import { useEffect, useRef, useState } from "react"

const items = [
  {
    title: "Проверка состава",
    price: "Бесплатно",
    description: "Оцениваем перспективу получения СГР до старта работ.",
    highlight: true,
  },
  {
    title: "Подготовка документов",
    price: "от 60 000 ₽",
    description:
      "Разработка или доработка ТУ, ТИ, текста этикетки. Анализ всей предоставленной документации. Если у вас готов полный пакет — экспертная оценка пакета от 30 000 ₽.",
  },
  {
    title: "Регистрация СГР",
    price: "от 45 000 ₽",
    description:
      "Стратегия регистрации в зависимости от состава и рекомендаций по применению, проверка состава, утверждение у эксперта РПН, организация исследований и передача образцов в лаборатории.",
  },
  {
    title: "Лабораторные исследования",
    price: "от 3 000 ₽",
    description:
      "Показатели подлинности: 3 000–7 000 ₽ за каждый активный компонент. Показатели безопасности: 2 000–17 000 ₽ (зависит от формы выпуска).",
  },
  {
    title: "Санитарно-эпидемиологическая экспертиза (ЭЗ)",
    price: "от 19 000 ₽",
    description:
      "Стоимость определяется группой сложности, которую устанавливает Роспотребнадзор. Чем больше компонентов, тем сложнее экспертиза.",
  },
  {
    title: "Госпошлина",
    price: "от 5 000 ₽",
    description: "Оплачивается заявителем напрямую по реквизитам РПН.",
  },
]

export function Pricing() {
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
    <section ref={sectionRef} id="process" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Стоимость
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Прозрачное ценообразование: вы платите поэтапно
          </h2>
          <p
            className={`text-muted-foreground leading-relaxed max-w-2xl transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Мы не называем итоговую цифру до анализа состава, но показываем, из каких элементов
            она формируется.
          </p>
        </div>

        {/* Pricing rows */}
        <div className="space-y-px bg-border">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`p-8 lg:p-10 transition-all duration-1000 ${
                item.highlight ? "bg-sage" : "bg-background"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                <h3
                  className={`font-serif text-xl md:text-2xl ${
                    item.highlight ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`font-serif text-2xl md:text-3xl shrink-0 ${
                    item.highlight ? "text-primary-foreground" : "text-sage"
                  }`}
                >
                  {item.price}
                </p>
              </div>
              <p
                className={`leading-relaxed ${
                  item.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}