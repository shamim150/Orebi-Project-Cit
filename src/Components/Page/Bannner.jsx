import React, { useState } from "react";
import Slider from "react-slick";
import Image from "../Layer/Image";


const Banner = () => {


  let [active, setActive] = useState(0)

  var settings = { 
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      // fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,

      appendDots: dots => (
        <div
          style={{
            // backgroundColor: "red",
            borderRadius: "10px",
            padding: "10px",
            position: 'absolute',
            top: "50%",
            left: "12%",
            transform: "translateY(-50%)",

          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
        customPaging: i => (
          <div className={` transition-all duration-500 border-r-2 flex items-center text-[10px]  ${active == i ? "text-primary border-primary " : "text-transparent border-white"}`}
            style={{
              width: "22px",
              height:"30px",
              
            }}
          >
            0{i + 1}
          </div>
        ),

        beforeChange: (item,i)=> {
          setActive(i)
        },


        
        responsive: [
          {
            breakpoint: 680,
            settings: {
              appendDots: dots => (
                <div
                  style={{
                    borderRadius: "10px",
                    padding: "10px",
                    position: 'absolute',
                    left: "50%",
                    bottom: '10px',
                    transform: "translateX(-50%)",
    
                  }}
                >
                  <ul className='flex' style={{ margin: "0px" }}> {dots} </ul>
                </div>
              ),
              customPaging: i => (
                <div className={` transition-all duration-500 border-b-2 flex items-center text-[10px]  ${active == i ? "text-primary border-primary " : "text-transparent border-white"}`}
                  style={{
                    width: "22px",
                    height:"30px",
                    
                  }}
                >
                  0{i + 1}
                </div>
              ),
    
              beforeChange: (item,i)=> {
                setActive(i)
              },


              responsive: [
             
                {
                  breakpoint: 680,
                  settings: {
                    appendDots: dots => (
                      <div
                        style={{
                          borderRadius: "10px",
                          padding: "10px",
                          position: 'absolute',
                          left: "50%",
                          bottom: '15px',
                          transform: "translateX(-50%)",
          
                        }}
                      >
                        <ul className='flex' style={{ margin: "0px" }}> {dots} </ul>
                      </div>
                    ),
                    customPaging: i => (
                      <div className={` transition-all duration-500  flex justify-center text-[10px]  ${active == i ? "text-primary border-primary " : "text-transparent border-white"}`}
                        style={{
                          width: "18px",
                          height:"18px",
                          
                        }}
                      >
                        0{i + 1}
                      </div>
                    ),
                  }
                }
              ]
             
            }
          },

        ]



    };
 

  return (
    <div>
      <Slider {...settings}>
     <Image imageClass='w-full' src='/public/Banner_1.jpg' />
     <Image imageClass='w-full' src='/public/Banner_2.png' />
     <Image imageClass='w-full' src='/public/Banner_1.jpg' />

      </Slider>
    </div>



  );
};

export default Banner;
