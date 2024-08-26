import React, { useState } from 'react'
import './Slider.css'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const Slider = () => {

  const productsdata = [
    { id: 0, url:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name: 'Product 1',  },
    { id: 1,url:"https://images.unsplash.com/photo-1663269532290-70aa9866fe5e?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: 'Product 2',  },
    // { id: 2,url:"https://images.unsplash.com/photo-1660921436563-65ec990056e5?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: 'Product 3',  },
    { id: 3,url:"https://images.unsplash.com/photo-1623998021451-306e52f35634?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: 'Product 4',  },
    { id: 4, url:"https://images.unsplash.com/photo-1608223652565-63abae6cf733?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name: 'Product 5',  }]
    
    const[currentSlide,setCurrentSlide]=useState(0)
    const slidelength=productsdata.length

   const prevSlide=()=>{
      setCurrentSlide((prev)=>(prev===0?slidelength-1:prev-1 ))
   }
   const nextSlide=()=>{
    setCurrentSlide((prev)=>(prev===slidelength-1?0:prev+1))
   }

   setTimeout(nextSlide, 10000);

  return (
  <div>
    <div className="directions">
        <div className='prev' onClick={prevSlide}>
        <GoArrowLeft />
        </div>
        <div className='next' onClick={nextSlide}>
        <GoArrowRight />
        </div>
       
        </div>
    <div className='slider'>
       
      {productsdata.map((item,index)=>
      { 
        return(
          <div
          key={item.id}
          className={index === currentSlide ? "slide active" : "slide"}
          style={{ display: index === currentSlide ? "block" : "none" }}
          >
        <img src={item.url} alt="" />
        </div>)
        
      })}
     
    </div>
    </div>
  )
}

export default Slider