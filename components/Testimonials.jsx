import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    id: 1,
    content: "Léomyre a fait un travail exceptionnel sur notre projet. Son expertise technique et sa créativité ont vraiment fait la différence.",
    author: "Marie Dupont, CEO de TechStart"
  },
  {
    id: 2,
    content: "Travailler avec Léomyre a été une expérience formidable. Il a su transformer nos idées en une application web performante et élégante.",
    author: "Jean Martin, Directeur Marketing chez InnovCorp"
  },
  {
    id: 3,
    content: "La capacité de Léomyre à résoudre des problèmes complexes et à livrer des solutions de haute qualité est impressionnante.",
    author: "Sophie Lefebvre, CTO de DataViz"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-gray-800/30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl border border-gray-700/20 my-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-100">
        Témoignages
      </h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div className="transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0">
                <blockquote className="text-xl italic text-gray-200 mb-4">"{testimonial.content}"</blockquote>
                <p className="text-blue-300 font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={prevTestimonial} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full" aria-label="Témoignage précédent">
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button onClick={nextTestimonial} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full" aria-label="Témoignage suivant">
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}

