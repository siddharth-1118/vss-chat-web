import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-2xl text-center space-y-8">
        <div className="inline-block p-3 rounded-2xl bg-green-500/10 border border-green-500/20 mb-4">
          <span className="text-green-500 font-bold text-sm tracking-widest uppercase">2026 Production Standard</span>
        </div>

        <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
          Secure. Fast. <br /> Zero Cost.
        </h1>

        <p className="text-neutral-400 text-xl leading-relaxed">
          The world's first production-grade messaging app with $0 scaling.
          Encrypted local storage, peer-to-peer transit, and private cloud backups.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <a
            href="https://github.com/siddharth-1118/vss-chat/releases/latest"
            className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
          >
            Download Android APK
          </a>
          <a
            href="https://github.com/siddharth-1118/vss-chat"
            className="px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-bold rounded-full transition-all border border-neutral-700"
          >
            View Source Code
          </a>
        </div>

        <div className="pt-12 grid grid-cols-3 gap-8 border-t border-neutral-800/50 mt-12 opacity-50 text-xs font-mono uppercase tracking-widest">
          <div>AES-256 GCM</div>
          <div>SUPABASE REALTIME</div>
          <div>GOOGLE DRIVE BACKUP</div>
        </div>
      </div>
    </div>
  );
}
