import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const rfDocs = [
  { text: "Состав, раскрытый на 100% на форму выпуска.", highlight: true },
  { text: "Технические условия (ТУ).", highlight: false },
  { text: "Технологическая инструкция (ТИ).", highlight: false },
  { text: "Типовые письма от производителя (тексты предоставим).", highlight: false },
  { text: "Декларации соответствия (ДС) на сырьевые компоненты.", highlight: false },
  { text: "Уставные документы заявителя.", highlight: false },
  { text: "Подтверждение права собственности или аренды на производственный адрес.", highlight: false },
]

const importDocs = [
  { text: "Состав, раскрытый на 100% на форму выпуска.", highlight: true },
  { text: "Спецификация и сертификат анализа от производителя.", highlight: false },
  { text: "Сертификат свободной продажи (Free Sale).", highlight: false },
  { text: "Сертификат ISO.", highlight: false },
  { text: "Договор уполномоченного лица (ДУЛ) между заявителем и производителем (текст типовой, образец предоставим).", highlight: false },
  { text: "Уставные документы заявителя.", highlight: false },
]

export function Documents() {
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
    <section ref={sectionRef} className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className={`text-base tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Документы
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Список документов для старта
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {/* Россия */}
          <div className={`bg-background p-10 lg:p-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-8">
              <Icon name="Building2" size={20} className="text-sage" />
              <p className="text-xs tracking-[0.25em] uppercase text-sage font-medium">Для РФ</p>
            </div>
            <ul className="space-y-4">
              {rfDocs.map((doc, i) => (
                <li key={i} className={`flex items-start gap-3 ${doc.highlight ? "p-4 bg-sage/10 border-l-2 border-sage -ml-4" : ""}`}>
                  <span className="mt-1 shrink-0 text-sage">
                    <Icon name="Check" size={16} />
                  </span>
                  <p className={`leading-relaxed ${doc.highlight ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                    {doc.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Импорт */}
          <div className={`bg-background p-10 lg:p-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-8">
              <Icon name="Globe" size={20} className="text-sage" />
              <p className="text-xs tracking-[0.25em] uppercase text-sage font-medium">Для импорта</p>
            </div>
            <ul className="space-y-4">
              {importDocs.map((doc, i) => (
                <li key={i} className={`flex items-start gap-3 ${doc.highlight ? "p-4 bg-sage/10 border-l-2 border-sage -ml-4" : ""}`}>
                  <span className="mt-1 shrink-0 text-sage">
                    <Icon name="Check" size={16} />
                  </span>
                  <p className={`leading-relaxed ${doc.highlight ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                    {doc.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}