import React, { useEffect } from 'react';
import Productlist from './Home/Productlist'
import Slider from './Home/Slider';
import SelectCata from './Home/SelectCata/SelectCata';
import Fproduct from './Home/Fproduct/Fproduct';

const Home = () => {

  
  

  return (
    <div>
      <Slider />
      <Productlist />
      <SelectCata />
      <Fproduct />
     </div>
  )
}

export default Home