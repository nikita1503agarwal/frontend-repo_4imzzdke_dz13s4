export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-slate-300">
        <div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 ring-2 ring-white/20 mb-3" />
          <p className="text-white font-semibold">Vertex Software Enterprise</p>
          <p className="text-sm text-slate-400 mt-2">Building reliable, elegant products with 3D, AI, and cloud-native tech.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Company</p>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/solutions" className="hover:text-white">Solutions</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Legal</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-white">Security</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Contact</p>
          <p className="text-sm">hello@vertex.software</p>
          <p className="text-sm">+1 (555) 010-2000</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">© {new Date().getFullYear()} Vertex Software Enterprise. All rights reserved.</div>
    </footer>
  );
}
