import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-dvh bg-gradient-to-br from-slate-50 via-white to-slate-50 text-slate-900">
      {/* Header - Glassmorphism */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200/60 px-6 py-4 shadow-sm">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
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
          <Link
            href="/chat"
            className="group px-6 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-full hover:shadow-xl hover:shadow-indigo-200 hover:scale-105 transition-all duration-200"
          >
            <span className="flex items-center gap-2">
              チャットを開く
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Link>
        </div>
      </header>

      {/* Hero Section with Aurora */}
      <main>
        <section className="relative px-6 py-20 md:py-32 overflow-hidden aurora">
          <div className="relative mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 rounded-full backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                AI搭載のナレッジ共有システム
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
              <span className="block bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent pb-2">
                必要な情報に
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                すぐアクセス
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
              AIチャットで企業ナレッジを瞬時に検索。
              <br className="hidden md:block" />
              自然な会話で、必要な情報にすぐアクセスできます。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/chat"
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-lg font-bold rounded-full hover:shadow-2xl hover:shadow-indigo-300 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  チャットを始める
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
              <a
                href="#features"
                className="px-10 py-4 bg-white/90 backdrop-blur-sm text-slate-700 text-lg font-bold rounded-full border-2 border-slate-300 hover:bg-white hover:border-indigo-300 hover:shadow-xl transition-all duration-300"
              >
                詳しく見る
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                  24/7
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  稼働時間
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                  即時
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  回答速度
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                  AI
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  搭載技術
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="px-6 py-24 bg-gradient-to-b from-white via-slate-50 to-white"
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <div className="inline-block mb-4 px-4 py-1.5 bg-indigo-50 border border-indigo-200 rounded-full">
                <span className="text-sm font-semibold text-indigo-700">
                  Features
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                主な機能
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                AIチャットボットが、あなたの質問に素早く正確に回答します
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group relative p-8 bg-white rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-label="ナレッジ検索アイコン"
                    >
                      <title>ナレッジ検索</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    高速検索
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    必要な情報を自然な言葉で質問するだけで、AIが関連するナレッジを瞬時に検索します
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative p-8 bg-white rounded-3xl border border-slate-200 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-label="文書管理アイコン"
                    >
                      <title>文書管理</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    統合ナレッジベース
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    マニュアル、FAQ、業務手順書などの情報を一元管理し、いつでもアクセス可能
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative p-8 bg-white rounded-3xl border border-slate-200 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-100 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl mb-6 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-label="セキュリティアイコン"
                    >
                      <title>セキュアなアクセス</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    セキュアなアクセス
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    クライアント企業専用の安全な環境で、機密情報も安心して管理できます
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="px-6 py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-20">
              <div className="inline-block mb-4 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full">
                <span className="text-sm font-semibold text-blue-700">
                  How to Use
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                使い方
              </h2>
              <p className="text-lg md:text-xl text-slate-600">
                3ステップで簡単に情報を取得
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "チャットを開く",
                  description: "画面上部のボタンからチャット画面にアクセス",
                  gradient: "from-blue-600 to-indigo-600",
                },
                {
                  step: "2",
                  title: "質問を入力",
                  description:
                    "「〇〇の手順を教えて」など、普段の言葉で質問",
                  gradient: "from-indigo-600 to-purple-600",
                },
                {
                  step: "3",
                  title: "回答を確認",
                  description: "AIが即座に回答。追加の質問も自由に続けられます",
                  gradient: "from-purple-600 to-blue-600",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex gap-6 items-start p-8 bg-white rounded-3xl border border-slate-200 hover:border-indigo-200 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${item.gradient} text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-6 py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
              今すぐ始めましょう
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 font-medium">
              AIチャットで、業務効率を劇的に向上
            </p>
            <Link
              href="/chat"
              className="group inline-block px-12 py-5 bg-white text-indigo-600 text-xl font-black rounded-full hover:bg-blue-50 hover:shadow-2xl hover:scale-110 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                チャットを始める
                <svg
                  className="w-6 h-6 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-lg shadow-lg flex items-center justify-center text-white text-sm font-bold">
                AI
              </div>
              <div className="text-base font-bold">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Knowledge
                </span>
                <span className="text-slate-700 ml-1">Hub</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
