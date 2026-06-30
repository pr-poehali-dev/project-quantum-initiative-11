import { useEffect, useRef, useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const factors = [
  {
    id: "composition",
    number: "01",
    title: "Состав продукта",
    body: "Чем сложнее состав, тем дороже и дольше исследования и экспертиза. Сложность не всегда равна количеству компонентов — часто она определяется самими активными компонентами. Это могут быть как простые витамины, так и наночастицы серебра или пробиотические микроорганизмы.",
  },
  {
    id: "corrections",
    number: "02",
    title: "Необходимость корректировок",
    body: "Особенно актуально для импорта. Почти всегда приходится дорабатывать спецификации и этикетку под строгие требования Технических регламентов Таможенного союза.",
  },
  {
    id: "labs",
    number: "03",
    title: "Загруженность лабораторий",
    body: "Все работы выполняются только уполномоченными учреждениями Роспотребнадзора. Мы не можем игнорировать фактор «живой очереди»: периодически случается высокая загрузка, которая влияет на скорость. Возможность ускорить процесс есть, но влечёт дополнительные расходы.",
  },
]

export function PricingFactors() {
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
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Ценообразование
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Факторы, влияющие на итоговую стоимость и срок
          </h2>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Accordion type="single" collapsible defaultValue="composition">
            {factors.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-border">
                <AccordionTrigger className="py-8 hover:no-underline group">
                  <div className="flex items-baseline gap-6 text-left">
                    <span className="font-serif text-3xl text-stone/40 group-data-[state=open]:text-sage transition-colors duration-300 shrink-0">
                      {item.number}
                    </span>
                    <span className="font-serif text-2xl md:text-3xl font-light text-foreground">
                      {item.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-16 pb-8">
                  <p className="text-muted-foreground leading-relaxed text-base">{item.body}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Итоговый месседж */}
        <div className={`mt-16 p-8 lg:p-10 border border-border transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-4">
            Заявителю важно заранее точно знать стоимость и рассчитать время на все работы по регистрации БАД.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Однако универсального ответа нет. Мы можем дать предварительную оценку стоимости исходя из
            поставленной заказчиком задачи.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500"
          >
            Получить расчёт
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
