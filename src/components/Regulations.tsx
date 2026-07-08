import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const prohibitions = [
  "Нельзя создавать впечатление, что добавка — лекарство.",
  "Нельзя ссылаться на конкретные случаи улучшения состояния.",
  "Нельзя использовать благодарности физических лиц.",
  "Нельзя побуждать к отказу от здорового питания.",
  "Нельзя ссылаться на исследования, обязательные для госрегистрации, как на конкурентное преимущество.",
]

export function Regulations() {
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
            Важно знать
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Понятие БАД в России и для импорта
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-border">
          {/* Определение */}
          <div className={`bg-background p-10 lg:p-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-8">
              <Icon name="BookOpen" size={20} className="text-sage" />
              <p className="text-xs tracking-[0.25em] uppercase text-sage font-medium">Что считается БАД</p>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              БАД — это природные или идентичные им биологически активные вещества и пробиотики.
              Их единственная цель — <span className="text-foreground font-medium">дополнить рацион питания</span>.
              Ключевое слово — «добавить в рацион».
            </p>

            <div className="space-y-5 mt-8 pt-8 border-t border-border">
              <div className="flex items-start gap-4 p-4 bg-muted/50">
                <Icon name="AlertTriangle" size={18} className="text-sage shrink-0 mt-0.5" />
                <p className="text-muted-foreground leading-relaxed text-sm">
                  <span className="text-foreground font-medium">Никаких медицинских свойств.</span>{" "}
                  Категорически нельзя заявлять «повышает иммунитет», «укрепляет суставы» или что-либо подобное.
                </p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-muted/50">
                <Icon name="AlertTriangle" size={18} className="text-sage shrink-0 mt-0.5" />
                <p className="text-muted-foreground leading-relaxed text-sm">
                  <span className="text-foreground font-medium">Запрет на впечатление о лекарстве.</span>{" "}
                  Реклама и этикетка не должны содержать ссылки на случаи излечения или благодарности.
                </p>
              </div>
            </div>
          </div>

          {/* Правила рекламы */}
          <div className={`bg-background p-10 lg:p-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-8">
              <Icon name="ShieldAlert" size={20} className="text-sage" />
              <p className="text-xs tracking-[0.25em] uppercase text-sage font-medium">Правила рекламы БАД</p>
            </div>
            <ul className="space-y-4 mb-10">
              {prohibitions.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-stone">
                    <Icon name="X" size={14} />
                  </span>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item}</p>
                </li>
              ))}
            </ul>
            <div className="pt-8 border-t border-border">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">По составу</p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Допускаются только разрешённые компоненты. Компонент считается разрешённым, если он не входит
                в перечень запрещённых веществ и обоснован с точки зрения пищевых традиций
                (для растительных компонентов).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}