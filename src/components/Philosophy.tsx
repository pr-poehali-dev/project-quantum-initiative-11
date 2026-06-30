import { useEffect, useRef, useState } from "react"

export function Philosophy() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="philosophy" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Abstract molecular graphic */}
          <div
            className={`relative aspect-[4/5] bg-gradient-to-br from-sand to-secondary overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500" fill="none" preserveAspectRatio="xMidYMid slice">
              <g stroke="hsl(var(--sage))" strokeWidth="1" opacity="0.5">
                <line x1="100" y1="120" x2="200" y2="180" />
                <line x1="200" y1="180" x2="300" y2="120" />
                <line x1="200" y1="180" x2="200" y2="300" />
                <line x1="200" y1="300" x2="110" y2="370" />
                <line x1="200" y1="300" x2="290" y2="370" />
                <line x1="110" y1="370" x2="150" y2="450" />
                <line x1="290" y1="370" x2="250" y2="450" />
              </g>
              <g fill="hsl(var(--sage))">
                <circle cx="100" cy="120" r="9" />
                <circle cx="300" cy="120" r="9" />
                <circle cx="200" cy="300" r="14" fill="hsl(var(--terracotta))" />
                <circle cx="150" cy="450" r="8" />
                <circle cx="250" cy="450" r="8" />
              </g>
              <g fill="hsl(var(--terracotta))" opacity="0.85">
                <circle cx="200" cy="180" r="11" />
                <circle cx="110" cy="370" r="10" />
                <circle cx="290" cy="370" r="10" />
              </g>
            </svg>
            {/* Overlay accent */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-terracotta/80" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              БАД с точки зрения закона
            </p>

            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-8 text-balance transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Ваш продукт —
              <span className="italic"> пищевая</span>
              <br />
              продукция, а не лекарство
            </h2>

            <div
              className={`space-y-6 text-muted-foreground leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p>
                С юридической точки зрения биологически активные добавки относятся к специализированной
                пищевой продукции. Чтобы производить, продавать или импортировать БАД на территории России
                и Таможенного союза, нужно пройти регистрацию.
              </p>
              <p>
                Результат — <em className="text-foreground">Свидетельство о государственной регистрации (СГР)</em>
                и запись в Едином реестре Роспотребнадзора.
              </p>
            </div>

            {/* Key message plate */}
            <div
              className={`mt-12 p-8 bg-sage transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="font-serif text-2xl md:text-3xl text-primary-foreground leading-snug">
                Без СГР продукт не может легально находиться на рынке.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}