export default function Footer() {
    return (
      <footer className="bg-[#0D1B2A] text-white/60 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          
          <p>© {new Date().getFullYear()} Combo Group LLC. All rights reserved.</p>
  
          <a
            href="https://t.me/apath_y0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A84C] hover:brightness-125 transition-all"
          >
            Made by Vahe Vardanyan
          </a>
  
        </div>
      </footer>
    );
  }