import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const results = [
  { icon: "FlaskConical", title: "Протоколы испытаний (ПИ)", description: "Оригиналы протоколов испытаний из аккредитованных лабораторий." },
  { icon: "ClipboardCheck", title: "Экспертное заключение (ЭЗ)", description: "Оригинал заключения органа инспекции Роспотребнадзора." },
  { icon: "ShieldCheck", title: "Свидетельство о госрегистрации (СГР)", description: "Оригинал бланка Государственной Регистрации — ваш продукт законно на рынке." },
  { icon: "FileText", title: "Утверждённый проект этикетки", description: "Проект этикетки БАД, согласованный и утверждённый Роспотребнадзором." },
]

export function Results() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className={`text-base tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Результат
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Что вы получаете по итогам работы
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {results.map((item, index) => (
            <div
              key={item.title}
              className={`group bg-background p-10 lg:p-12 transition-all duration-1000 hover:bg-card ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${300 + index * 120}ms` }}
            >
              <div className="text-sage mb-6 transition-transform duration-500 group-hover:scale-110">
                <Icon name={item.icon} size={32} />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}