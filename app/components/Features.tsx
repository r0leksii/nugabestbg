import Image from 'next/image'

const features = [
  {
    title: 'Термотерапия',
    description: 'Дълбоко проникваща инфрачервена топлина за облекчаване на болки и подобряване на кръвообращението.',
    icon: '/images/heat.svg',
  },
  {
    title: 'Масажни ролки',
    description: 'Прецизни масажни ролки, проектирани да следват естествената извивка на гръбначния стълб.',
    icon: '/images/massage.svg',
  },
  {
    title: 'Акупресура',
    description: 'Стимулиране на акупресурни точки за облекчаване на напрежението и подобряване на енергийния поток.',
    icon: '/images/acupressure.svg',
  },
  {
    title: 'Йонизация',
    description: 'Генериране на отрицателни йони за подобряване на качеството на въздуха и общото благосъстояние.',
    icon: '/images/ionization.svg',
  },
]

export function Features() {
  return (
    <section id="features" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Революционни Функции за Вашето Здраве
          </h2>
          <p className="text-lg text-gray-600">
            Nuga Best N6 съчетава най-съвременните технологии за масаж и терапия, създадени да подобрят Вашето здраве и качество на живот.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 relative">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            Запазете Безплатна Демонстрация
          </a>
        </div>
      </div>
    </section>
  )
} 