import Image from 'next/image'

const specifications = [
  {
    title: 'Размери',
    value: '137 x 68 x 48 см',
    icon: '/images/dimensions.svg',
  },
  {
    title: 'Тегло',
    value: '38 кг',
    icon: '/images/weight.svg',
  },
  {
    title: 'Мощност',
    value: '230W',
    icon: '/images/power.svg',
  },
  {
    title: 'Гаранция',
    value: '24 месеца',
    icon: '/images/warranty.svg',
  },
]

export function ProductShowcase() {
  return (
    <section className="section bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Nuga Best N6 - Върхова Технология за Вашето Здраве
            </h2>
            <p className="text-lg text-gray-600">
              Масажното легло Nuga Best N6 е създадено с мисъл за вашето здраве и комфорт. 
              Съчетава най-новите технологии в областта на масажната терапия с елегантен дизайн и лесна употреба.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 relative flex-shrink-0">
                    <Image
                      src={spec.icon}
                      alt={spec.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{spec.title}</h3>
                    <p className="text-gray-600">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Запазете Демонстрация
              </a>
              <a href="#benefits" className="btn-secondary">
                Вижте Ползите
              </a>
            </div>
          </div>

          <div className="relative lg:ml-12">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/nuga-best-n6-details.webp"
                alt="Nuga Best N6 Details"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 relative mb-4">
                <Image
                  src="/images/certificate.svg"
                  alt="CE Certificate"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-medium text-gray-900">CE Сертифициран</p>
              <p className="text-sm text-gray-600">Медицинско Изделие</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 