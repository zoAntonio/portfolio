export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] px-6 py-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-mono text-[10px] text-[#555] tracking-widest uppercase">
          © {new Date().getFullYear()} Zo Heriniaina Antonio Randrianandrianina
        </span>
        <span className="font-mono text-[10px] text-[#555] tracking-widest">
          Built with{' '}
          <span className="text-[#4ade80]/60">React + Vite</span>
        </span>
      </div>
    </footer>
  )
}
