import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Масажно оборудване{' '}
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary">Nuga Best N6</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Революционна технология от Южна Корея за облекчаване на болки в гърба и подобряване на общото здравословно състояние чрез комбинация от термотерапия и прецизен масаж.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary"
              >
                Безплатна Демонстрация
              </a>
              <a
                href="#features"
                className="btn-secondary"
              >
                Научете Повече
              </a>
            </div>
            <div className="flex items-center gap-6 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-gray-200 to-gray-300 relative"
                  >
                    <Image
                      src={`/images/avatar-${i}.webp`}
                      alt={`Happy Customer ${i}`}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  Над <span className="text-primary font-bold">1000+</span> доволни клиенти
                </p>
                <p className="text-sm text-gray-600">в България</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/nuga-best-n6.webp"
                alt="Nuga Best N6 Massage Equipment"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">4.9/5 рейтинг</p>
                <p className="text-xs text-gray-500">от 200+ ревюта</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 