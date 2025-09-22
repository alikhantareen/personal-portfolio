export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Ali Iftikhar. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Home
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Projects
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Experience
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
