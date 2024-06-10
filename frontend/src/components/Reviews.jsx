import { useState } from "react"
import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'
import avatar4 from '../assets/avatar4.png'
import avatar5 from '../assets/avatar5.png'
import { TiStarFullOutline } from "react-icons/ti"
import { LiaArrowCircleLeftSolid, LiaArrowCircleRightSolid } from "react-icons/lia"

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Ashley Cooper",
      text: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.",
      avatar: avatar1
    },
    {
      id: 2,
      name: "Noah Jack",
      text: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch.",
      avatar: avatar2
    },
    {
      id: 3,
      name: "John Doe",
      text: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch.",
      avatar: avatar3
    },
    {
      id: 4,
      name: "Samuel Jackson",
      text: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.Teamollo delivered the site with inthe timeline as they requested.",
      avatar: avatar4
    },
    {
      id: 5,
      name: "Jim Johnson",
      text: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used.",
      avatar: avatar5
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardWidth = 300

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    )
  }

  return (    
    <section className="bg-[rgba(128,162,176,.35)] font-urbanist py-10 min-h-[50vh] w-full">
        <h2 className="font-semibold text-5xl text-center text-dark">Clientes felices</h2>
        <div className="relative flex justify-between items-center w-full px-4">
          <button onClick={prevSlide} className="mr-2 md:mr-4 text-white rounded-full hover:bg-gray-400">
            <LiaArrowCircleLeftSolid className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20"/>
          </button>
          <div className="overflow-x-hidden w-full" style={{scrollSnapType: "x mandatory"}}>
            <div className="flex transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${currentIndex * cardWidth}px)`}}>
              {reviews.map((review) => (
                <div key={review.id} className="w-4/5 sm:w-4/5 md:w-3/5 lg:w-1/3 max-w-[500px] flex-shrink-0 bg-white rounded-xl p-4 md:p-8 m-4 h-fit">
                  <p className="mb-14 text-text-reviews md:text-xl">{review.text}</p>
                  <div className="flex items-center gap-2">                    
                      <img src={review.avatar} alt="Avatar Usuario" className='rounded-full w-14 h-14'/>
                      <div>
                          <h3 className="text-lg md:text-2xl">{review.name}</h3>                          
                          <div className="flex text-[#FFC250]">
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />                            
                          </div>
                      </div>
                  </div>
                </div>
              ))}  
            </div>
          </div>
          <button onClick={nextSlide} className="ml-2 md:ml-4 text-white rounded-full hover:bg-gray-400">
            <LiaArrowCircleRightSolid className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20"/>
          </button>          
        </div>     
    </section>    
  )
}

export default Reviews