import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import photo from './assets/Rectangle 5160.png'
import vector from './assets/Vector.png'


function App() {
  const [activeButton, setActiveButton] = useState(1);

  // Ref to control the slider
  const sliderRef = useRef(null);

  const handleClick = (index) => {
    setActiveButton(index); 
  };

  const buttonWidth = 195;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    pauseOnHover: true,
  };

  return (
    <div className="flex h-screen w-screen bg-[#000000de] justify-center gap-14 py-12 px-7">
      {/* left hand side */}
      <div className="h-[689px] w-[50%] bg-[#616161D1] border border-[#96BEE7] rounded-[27px]"></div>

      {/* right hand side */}
      <div className="h-full w-[50%] flex flex-col justify-center gap-6">
        {/* widget1 */}
        <div className="flex flex-col items-center gap-4 h-[316px] bg-[#363C43] rounded-[19px] py-4">
          {/* part1 */}
          <img src= {vector} className="absolute left-[51.5vw] top-20"></img>

          <div className="relative flex justify-center h-[49px] bg-[#171717] m-2 text-white rounded-[23px]">

            
            <div
              className="absolute shadow-2xl top-0 left-0 h-full bg-[#28292F] rounded-[23px] transition-transform duration-300"
              style={{ transform: `translateX(${(activeButton - 1) * buttonWidth}px)`, width: `${buttonWidth}px` }}
            ></div>

            <button
              onClick={() => handleClick(1)}
              className="w-[195px] relative z-10 text-center"
            >
              About Me
            </button>
            <button
              onClick={() => handleClick(2)}
              className="w-[195px] relative z-10 text-center p-2"
            >
              Experiences
            </button>
            <button
              onClick={() => handleClick(3)}
              className="w-[195px] relative z-10 text-center"
            >
              Recommended
            </button>
          </div>
          {/* part2 */}
          <div className="px-16 text-[#969696] text-xl">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
          </div>
        </div>

        {/* line1 */}
        <div className="bg-[#363C43] w-[80%] ml-16 h-1"></div>

        {/* widget2 */}
        <div className="h-[316px] w-full overflow-hidden bg-[#363C43] rounded-[19px] flex flex-col items-start">
        <img src= {vector} className="absolute left-[51.5vw] top-[54vh]"></img>

          <div className="flex justify-between items-center gap-36 py-4 px-16">
            <div className="w-[149px] h-[62px] bg-[#171717] rounded-[20px] text-white text-xl flex justify-center items-center">
              Gallery
            </div>
            <div className="flex justify-center gap-4">
              <div className="h-[46px] w-[131px] flex justify-center shadow-gray-900 shadow-xl font-semibold items-center text-white rounded-[104px]">
                + ADD IMAGE
              </div>
              <div className="flex justify-center items-center gap-6">
                {/* Custom navigation buttons */}
                <button
                  className="bg-slate-800 hover:bg-black transition-all text-[#969696] p-2 rounded-full shadow-sm shadow-cyan-50"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <FaArrowLeft size={25} />
                </button>
                <button
                  className="bg-slate-800 hover:bg-black transition-all text-[#969696] p-2 rounded-full shadow-sm shadow-cyan-50"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <FaArrowRight size={25}/>
                </button>
              </div>
            </div>
          </div>

          {/* Slick Slider */}
          <div className="w-full px-16 pt-6">
            <Slider ref={sliderRef} {...settings}>
              <div className="rounded-[10px] overflow-visible transition-transform duration-300 ease-in-out">
                <img 
                  src={photo} 
                  alt="Slide 1" 
                  className="w-[190px] h-[180px] rounded-[10px] transform hover:scale-105 hover:-rotate-6 hover:translate-x-4 hover:-translate-y-2 transition duration-300 ease-in-out" 
                />
              </div>

              <div className="rounded-[10px] overflow-visible transition-transform duration-300 ease-in-out">
                <img 
                  src={photo} 
                  alt="Slide 1" 
                  className="w-[190px] h-[180px] rounded-[10px] transform hover:scale-110 hover:-rotate-6 hover:translate-x-4 hover:-translate-y-2 transition duration-300 ease-in-out" 
                />
              </div>
              <div className="rounded-[10px] overflow-visible transition-transform duration-300 ease-in-out">
                <img 
                  src={photo} 
                  alt="Slide 1" 
                  className="w-[190px] h-[180px] rounded-[10px] transform hover:scale-110 hover:-rotate-6 hover:translate-x-4 hover:-translate-y-2 transition duration-300 ease-in-out" 
                />
              </div>
              <div className="rounded-[10px] overflow-visible transition-transform duration-300 ease-in-out">
                <img 
                  src={photo} 
                  alt="Slide 1" 
                  className="w-[190px] h-[180px] rounded-[10px] transform hover:scale-110 hover:-rotate-6 hover:translate-x-4 hover:-translate-y-2 transition duration-300 ease-in-out" 
                />
              </div>
              <div className="rounded-[10px] overflow-visible transition-transform duration-300 ease-in-out">
                <img 
                  src={photo} 
                  alt="Slide 1" 
                  className="w-[190px] h-[180px] rounded-[10px] transform hover:scale-110 hover:-rotate-6 hover:translate-x-4 hover:-translate-y-2 transition duration-300 ease-in-out" 
                />
              </div>
            </Slider>
          </div>
        </div>

        {/* line2 */}
        <div className="bg-[#363C43] h-1 w-[80%] ml-16"></div>
      </div>
    </div>
  );
}

export default App;
