import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const tasks = [
  "Анализ регистрационной стратегии под конкретный препарат.",
  "Формирование и доработка досье по требованиям ЕАЭС и Минздрава.",
  "Сопровождение экспертизы качества и отношения «польза/риск».",
  "Получение бессрочного регистрационного удостоверения.",
  "Приведение иностранного досье к российским нормам (для импорта).",
]

export function MedicineRegistration() {
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
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className={`text-base tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Регистрация лекарственных средств
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Регистрируем не только БАД, но и лекарственные средства
          </h2>
          <p className={`text-muted-foreground leading-relaxed text-lg max-w-3xl transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Помогаем получить регистрационное удостоверение Минздрава РФ на лекарственные препараты.
            Сопровождаем полный цикл: от подготовки досье до внесения в Государственный реестр лекарственных средств.
          </p>
        </div>

        <div className={`bg-background p-10 lg:p-12 mb-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.25em] uppercase text-sage font-medium mb-8">Что входит в работу</p>
          <ul className="space-y-5">
            {tasks.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <Icon name="Check" size={18} className="text-sage shrink-0 mt-0.5" />
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={`flex items-start gap-4 p-8 lg:p-10 border border-border mb-12 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Icon name="AlertTriangle" size={22} className="text-terracotta shrink-0 mt-1" />
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-terracotta mb-3">Важно</p>
            <p className="text-muted-foreground leading-relaxed">
              Процедура регистрации лекарств значительно строже, чем для БАД. Обязательны клинические данные
              и фармаконадзор. Мы выстраиваем стратегию так, чтобы пройти экспертизу без отказа и замечаний.
            </p>
          </div>
        </div>

        <div className={`p-8 lg:p-10 border border-border transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-2">
            Срок и стоимость
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Рассчитываются индивидуально. Предварительная оценка — бесплатно.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500"
          >
            Обсудить регистрацию препарата
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}