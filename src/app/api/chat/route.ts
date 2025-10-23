import { NextResponse } from "next/server";

type ChatRequestBody = {
  message: string;
  conversationId?: string;
  userId?: string;
  inputs?: Record<string, unknown>;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ChatRequestBody;

    if (!body?.message || typeof body.message !== "string") {
      return NextResponse.json(
        { error: "'message' is required" },
        { status: 400 }
      );
    }

    const difyApiKey = process.env.DIFY_API_KEY;
    if (!difyApiKey) {
      return NextResponse.json(
        { error: "Server is not configured with DIFY_API_KEY" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.dify.ai/v1/chat-messages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${difyApiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        inputs: body.inputs ?? {},
        response_mode: "blocking",
        user: body.userId ?? "anonymous",
        conversation_id: body.conversationId,
        query: body.message,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return new NextResponse(text, { status: response.status });
    }

    const data = await response.json();

    return NextResponse.json({
      answer: data?.answer,
      id: data?.id ?? data?.message_id,
      conversationId: data?.conversation_id,
      raw: data,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
