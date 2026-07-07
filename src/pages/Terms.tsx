import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function Terms() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-40 pb-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-10">
            Условия использования
          </h1>

          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">1. Общие условия</h2>
              <p>
                Настоящие условия регулируют порядок использования сайта ООО «Экспертиза и регистрация»
                (далее — «Компания») и оказания услуг по регистрации биологически активных добавок (БАД).
                Пользуясь сайтом, пользователь принимает данные условия в полном объёме.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">2. Услуги Компании</h2>
              <p>
                Компания оказывает услуги по сопровождению регистрации БАД: организацию лабораторных
                исследований, подготовку документации, взаимодействие с Роспотребнадзором и внесение продукции
                в государственный реестр.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">3. Порядок взаимодействия</h2>
              <p>
                Заявка, оставленная пользователем через сайт, не является публичной офертой. Условия и стоимость
                оказания услуг согласовываются индивидуально после консультации со специалистом Компании.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">4. Стоимость услуг</h2>
              <p>
                Итоговая стоимость услуг зависит от объёма работ, вида продукции и иных факторов, обсуждаемых
                индивидуально. Информация о стоимости, размещённая на сайте, носит ознакомительный характер.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">5. Ответственность сторон</h2>
              <p>
                Компания прилагает все усилия для качественного оказания услуг, однако не несёт ответственности
                за решения контролирующих органов, принятые вне зоны влияния Компании.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">6. Интеллектуальная собственность</h2>
              <p>
                Все материалы сайта, включая тексты, изображения и логотип, являются собственностью Компании
                и не могут быть использованы третьими лицами без письменного согласия.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground mb-3">7. Изменение условий</h2>
              <p>
                Компания вправе изменять настоящие условия в одностороннем порядке. Актуальная версия условий
                всегда доступна на данной странице сайта.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
