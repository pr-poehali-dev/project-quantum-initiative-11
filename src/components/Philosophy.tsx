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
          {/* Photo */}
          <div
            className={`relative aspect-[4/5] overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <img
              src="https://cdn.poehali.dev/projects/46bc5300-06d7-4dec-8c93-1cbeb365c2f6/bucket/a9d3e007-635d-4e3e-86de-9e69b58f437f.jpeg"
              alt="Банки и капсулы БАД"
              className="absolute inset-0 w-full h-full object-cover"
            />
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
                Результат — <em className="text-foreground">Свидетельство о государственной регистрации (СГР)</em>{" "}
                и запись в Едином реестре ЕАС.
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