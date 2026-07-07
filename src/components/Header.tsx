import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-40 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="https://cdn.poehali.dev/projects/46bc5300-06d7-4dec-8c93-1cbeb365c2f6/bucket/6af6d695-c703-49a7-9830-2635ed52359c.png"
              alt="Экспертиза и регистрация"
              className="h-36 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <a
              href="#services"
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              Этапы
            </a>
            <a
              href="#timeline"
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              Сроки
            </a>
            <a
              href="#process"
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              Стоимость
            </a>
            <a
              href="#contact"
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              Контакты
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Открыть меню"
          >
            <span
              className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isMenuOpen ? "max-h-64 pb-8" : "max-h-0"}`}
        >
          <div className="flex flex-col gap-6 pt-4">
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Этапы
            </a>
            <a
              href="#timeline"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Сроки
            </a>
            <a
              href="#process"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Стоимость
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Контакты
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}