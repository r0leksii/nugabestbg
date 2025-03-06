import Image from 'next/image'

const benefits = [
  {
    title: 'Облекчаване на болки',
    description: 'Ефективно облекчава болки в гърба, врата и ставите чрез комбинация от масаж и термотерапия.',
    icon: '/images/pain-relief.svg',
  },
  {
    title: 'Подобрено кръвообращение',
    description: 'Стимулира кръвообращението и подпомага доставката на кислород до всички части на тялото.',
    icon: '/images/circulation.svg',
  },
  {
    title: 'Намален стрес',
    description: 'Помага за намаляване на стреса и напрежението чрез дълбока релаксация на мускулите.',
    icon: '/images/stress.svg',
  },
  {
    title: 'По-добър сън',
    description: 'Подобрява качеството на съня чрез намаляване на физическото и психическо напрежение.',
    icon: '/images/sleep.svg',
  },
  {
    title: 'Възстановяване',
    description: 'Ускорява възстановяването след физическо натоварване и спортни дейности.',
    icon: '/images/recovery.svg',
  },
  {
    title: 'Гъвкавост',
    description: 'Подобрява гъвкавостта и обхвата на движение чрез разтягане на мускулите.',
    icon: '/images/flexibility.svg',
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ползи за Вашето Здраве
          </h2>
          <p className="text-lg text-gray-600">
            Открийте как Nuga Best N6 може да подобри вашето здраве и качество на живот чрез редовна употреба.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card hover:scale-105 transition-transform duration-300"
            >
              <div className="flex gap-6">
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-primary/5 rounded-xl">
            <div className="w-12 h-12 relative">
              <Image
                src="/images/guarantee.svg"
                alt="Guarantee"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">100% Удовлетворение</h3>
              <p className="text-gray-600">30-дневен период на тестване</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 