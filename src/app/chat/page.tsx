"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | undefined>(
    undefined
  );
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, loading]);

  const canSend = useMemo(
    () => input.trim().length > 0 && !loading,
    [input, loading]
  );

  async function sendMessage() {
    if (!canSend) return;
    const text = input.trim();
    if (text.length === 0) return;

    // 即座に入力欄をクリア
    setInput("");

    const localId = `${Date.now()}`;
    setMessages((prev) => [
      ...prev,
      { id: localId, role: "user", content: text },
    ]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, conversationId }),
      });
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Request failed");
      }
      const data = await res.json();
      const answer: string = data?.answer ?? "";
      setConversationId((prev) => prev ?? data?.conversationId);
      setMessages((prev) => [
        ...prev,
        {
          id: data?.id ?? `${Date.now()}-a`,
          role: "assistant",
          content: answer,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-error`,
          role: "assistant",
          content: "エラーが発生しました。時間をおいて再度お試しください。",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      if (canSend) {
        sendMessage();
      }
    }
  }

  return (
    <div className="font-sans min-h-dvh bg-gradient-to-br from-slate-50 via-white to-slate-50 text-slate-900 flex flex-col">
      {/* Header - Matching Landing Page */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200/60 px-6 py-4 shadow-sm">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl shadow-lg flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform duration-200">
              AI
            </div>
            <div className="text-lg font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Knowledge
              </span>
              <span className="text-slate-700 ml-1.5">Hub</span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-700">AI Ready</span>
            </div>
            <Link
              href="/"
              className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
            >
              トップへ
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col max-w-4xl w-full mx-auto">
        {/* Chat Messages Area */}
        <div
          ref={listRef}
          className="flex-1 overflow-y-auto px-6 py-8 space-y-6 scroll-smooth"
        >
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center pt-20 pb-10">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-3xl shadow-2xl flex items-center justify-center mb-6 animate-pulse">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                何でもお聞きください
              </h2>
              <p className="text-slate-600 text-center max-w-md mb-8">
                業務手順、マニュアル、FAQなど、お気軽に質問してください。
              </p>

              {/* Suggested Questions */}
              <div className="grid gap-3 w-full max-w-lg">
                {[
                  "〇〇の業務手順を教えてください",
                  "△△の設定方法を知りたいです",
                  "よくある質問を見せてください"
                ].map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => setInput(suggestion)}
                    className="group p-4 bg-white border border-slate-200 rounded-2xl hover:border-indigo-300 hover:shadow-lg transition-all duration-200 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-700 group-hover:text-indigo-600 transition-colors font-medium">
                        {suggestion}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m) => (
            <div key={m.id} className="flex animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[75%] group"
                    : "mr-auto max-w-[85%] group"
                }
              >
                {m.role === "assistant" && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-slate-500">AI Assistant</span>
                  </div>
                )}
                <div
                  className={
                    m.role === "user"
                      ? "px-5 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-3xl rounded-tr-md shadow-lg shadow-indigo-200 text-[15px] leading-relaxed font-medium whitespace-pre-wrap"
                      : "px-5 py-3.5 bg-white border border-slate-200 rounded-3xl rounded-tl-md shadow-sm text-slate-800 text-[15px] leading-relaxed whitespace-pre-wrap"
                  }
                >
                  {m.content}
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mr-auto max-w-[85%]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">AI Assistant</span>
                </div>
                <div className="px-5 py-4 bg-white border border-slate-200 rounded-3xl rounded-tl-md shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                    <span className="text-sm text-slate-500">回答を生成中...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Form */}
        <form
          className="sticky bottom-0 px-6 pb-6 pt-4 bg-gradient-to-t from-white via-white/95 to-white/80 backdrop-blur-lg border-t border-slate-200/50"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="relative flex items-center gap-2 p-2 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="メッセージを入力してください..."
                className="flex-1 px-4 py-3 bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none text-[15px]"
              />
              <button
                type="submit"
                disabled={!canSend}
                className="group px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-indigo-300 hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                <span className="hidden sm:inline">送信</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
            <p className="text-xs text-slate-500 text-center mt-3">
              Enterキーで送信 • クライアント企業専用のナレッジ共有システム
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}
