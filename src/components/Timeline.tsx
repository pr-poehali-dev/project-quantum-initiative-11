import { useEffect, useRef, useState } from "react"

const rows = [
  { stage: "Проверка состава на перспективу", duration: "до 2 рабочих дней", weight: "w-[10%]" },
  { stage: "Лабораторные исследования образцов и разработка разрешительной документации", duration: "от 3 недель", weight: "w-[55%]" },
  { stage: "Экспертиза", duration: "1 месяц", weight: "w-[70%]" },
  { stage: "Оформление бланка СГР", duration: "2–3 недели", weight: "w-[45%]" },
]

export function Timeline() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="timeline" ref={sectionRef} className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Сроки
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Сколько времени занимает регистрация
          </h2>
        </div>

        {/* Timeline rows */}
        <div className="space-y-px">
          {rows.map((row, index) => (
            <div
              key={row.stage}
              className={`bg-background p-6 lg:p-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 120}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <p className="text-foreground">{row.stage}</p>
                <p className="text-sm tracking-wide text-sage font-medium shrink-0">{row.duration}</p>
              </div>
              <div className="h-1 bg-muted overflow-hidden">
                <div
                  className={`h-full bg-sage transition-all duration-1000 ${row.weight} ${
                    isVisible ? "opacity-100" : "opacity-0 w-0"
                  }`}
                  style={{ transitionDelay: `${500 + index * 120}ms` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div
          className={`mt-px bg-sage p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-serif text-2xl md:text-3xl text-primary-foreground">Общий ориентир</p>
          <p className="font-serif text-2xl md:text-3xl text-primary-foreground">3–4 месяца</p>
        </div>

        <p
          className={`mt-8 text-muted-foreground leading-relaxed max-w-2xl transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          В среднем процесс, включая согласование договора и подготовку нормативных документов,
          укладывается в 3 месяца.
        </p>
      </div>
    </section>
  )
}