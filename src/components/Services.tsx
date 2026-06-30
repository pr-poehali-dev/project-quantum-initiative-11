import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const steps = [
  {
    number: "I",
    title: "Лабораторные исследования",
    description: "Испытываем образцы в аккредитованных лабораториях. На выходе — протоколы испытаний.",
    icon: "FlaskConical",
  },
  {
    number: "II",
    title: "Санитарно-эпидемиологическая экспертиза",
    description: "Оценку проводит орган инспекции Роспотребнадзора. Получаем Экспертное заключение.",
    icon: "ClipboardCheck",
  },
  {
    number: "III",
    title: "Регистрация в департаменте РПН",
    description: "Итоговый этап. Вы получаете бланк СГР и запись в Едином реестре.",
    icon: "ShieldCheck",
  },
]

export function Services() {
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
    <section ref={sectionRef} id="services" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Как проходит регистрация
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Процесс получения СГР: прозрачно и по шагам
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`group bg-background p-10 lg:p-12 transition-all duration-1000 hover:bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-serif text-4xl text-stone/50 group-hover:text-sage transition-colors duration-500">
                  {step.number}
                </span>
                <div className="text-sage transition-transform duration-500 group-hover:scale-110">
                  <Icon name={step.icon} size={28} />
                </div>
              </div>
              <h3 className="font-serif text-2xl md:text-[1.6rem] leading-tight text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}