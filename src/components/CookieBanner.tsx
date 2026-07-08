import { useEffect, useState } from "react"
import Icon from "@/components/ui/icon"

const STORAGE_KEY = "cookie-consent-accepted"

export function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY)
    if (!accepted) {
      const timer = setTimeout(() => setIsOpen(true), 400)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "true")
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6 transition-all duration-500 ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto bg-background border border-border shadow-lg p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start gap-6">
          <div className="flex-1">
            <p className="font-serif text-lg text-foreground mb-2">Мы используем cookie-файлы</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Для обеспечения оптимальной работы, анализа использования и улучшения пользовательского
              опыта на веб-сайте могут использоваться системы веб-аналитики (в том числе Яндекс.Метрика,
              Mindbox, Битрикс, Flocktory, МТС Маркетолог), которые могут размещать на Вашем устройстве
              cookie-файлы.{" "}
              {!isExpanded && (
                <button
                  onClick={() => setIsExpanded(true)}
                  className="text-sage underline underline-offset-2 hover:text-sage/80 transition-colors"
                >
                  Подробнее
                </button>
              )}
            </p>

            {isExpanded && (
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                Продолжая использование веб-сайта, Вы соглашаетесь с применением указанных технологий и
                размещением cookie-файлов. Вы можете удалить cookie-файлы с вашего устройства через
                настройки браузера, а также заблокировать размещение cookie-файлов, однако при этом
                некоторые функции веб-сайта могут быть недоступными в связи с технологическими
                ограничениями движка. Дополнительную информацию Вы можете найти в{" "}
                <a
                  href="/privacy"
                  className="text-sage underline underline-offset-2 hover:text-sage/80 transition-colors"
                >
                  Политике конфиденциальности
                </a>
                .
              </p>
            )}
          </div>

          <div className="flex sm:items-center shrink-0">
            <button
              onClick={handleAccept}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500"
            >
              <Icon name="Check" size={16} />
              Ок
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
