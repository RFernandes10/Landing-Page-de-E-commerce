import Slider from "react-slick"
import { Button } from "./Button"

const HeroData = [
  {
    id: 1,
    img: "headphone.png",
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    id: 2,
    img: "vr.png",
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    id: 3,
    img: "macbook.png",
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Laptops",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
]

const Hero = ({ theme }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  }
  return (
    <div className="p-[1rem] smp-[3rem]">
      {/* flex justify-center items-center */}
      <div
        className={`overflow-hidden rounded-3xl min-h-[550px]
      sm:min-h-[450px] bg-gradient-to-r 
       ${
         theme === "dark"
           ? "from-gray-900 to-gray-800 text-white"
           : "from-gray-300/80 to-gray-100"
       } `}
      >
        <div></div>
        <Slider {...settings} className="p-[1rem] smp-[3rem] pb-8 sm:pd-0">
          {HeroData.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 flex justify-center items-center">
                <div
                  className="flex flex-col justify-center
                gap-4 sm:pl-3 pt-12 sm:pt-0 text-center
                sm:text-left order-2 sm:order-1 relative z-10"
                >
                  <p
                    className="text-2xl sm:text-6xl
                  lg:text-2xl font-bold"
                  >
                    {data.subtitle}
                  </p>
                  <h2
                    className="text-5xl sm:text-6xl
                  lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h2>
                  <h1
                    className={`text-5xl uppercase 
                  sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold
                  ${theme === "dark" ? "text-white/5" : "text-white"}`}
                  >
                    {data.title2}
                  </h1>
                  <div>
                    <Button
                      bgColor={"bg-[#f42c37]"}
                      textColor={"text-white"}
                      text={"Shop By Category"}
                    />
                  </div>
                </div>
                <div className="order-1 sm:order-2">
                  <div>
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px]
                        sm:scale-105 sm:w-[450px] sm:h-[450px] lg:scale-110 object-contain
                        mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]
                        relative z-40"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export { Hero }
