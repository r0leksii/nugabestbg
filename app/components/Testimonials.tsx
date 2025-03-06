import Image from 'next/image'

const testimonials = [
  {
    content: 'След месец използване на Nuga Best N6, хроничната болка в гърба ми значително намаля. Качеството на живот ми се подобри драстично.',
    author: {
      name: 'Мария Иванова',
      role: 'Офис мениджър',
      image: '/images/testimonial-1.webp',
    },
  },
  {
    content: 'Като физиотерапевт, препоръчвам Nuga Best N6 на моите пациенти. Резултатите са впечатляващи, особено при хора с хронични болки.',
    author: {
      name: 'Д-р Петър Димитров',
      role: 'Физиотерапевт',
      image: '/images/testimonial-2.webp',
    },
  },
  {
    content: 'Инвестицията в Nuga Best N6 беше една от най-добрите ми решения. Помага ми да се отпусна след дълъг работен ден и подобрява съня ми.',
    author: {
      name: 'Георги Николов',
      role: 'Спортист',
      image: '/images/testimonial-3.webp',
    },
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Доволни Клиенти Споделят
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Вижте какво споделят нашите клиенти за своя опит с Nuga Best N6 и как той е 
            променил живота им към по-добро.
          </p>
        </div>
        <div className="mt-16 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author.name}
              className="lg:flex lg:flex-col lg:h-full"
            >
              <blockquote className="flex-grow">
                <div className="h-full bg-white rounded-lg shadow-sm p-6 flex flex-col">
                  <svg
                    className="h-8 w-8 text-gray-400 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-lg text-gray-600 flex-grow">
                    {testimonial.content}
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-10 w-10 rounded-full"
                        src={testimonial.author.image}
                        alt={testimonial.author.name}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {testimonial.author.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Запитване за Демонстрация
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 