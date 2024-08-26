import React from 'react';
import './SelectCata.css';

const SelectCata = () => {
  const productsdata = [
    { id: 0, url: "https://i.pinimg.com/564x/62/78/09/627809b28f4b0f5e74754ee3a71381ee.jpg", name: "Phone" },
    { id: 1, url: "https://i.pinimg.com/564x/c7/c5/58/c7c5587ad74b2405b52f3deef484d904.jpg", name: "Tab" },
    { id: 2, url: "https://i.pinimg.com/564x/a3/e5/d3/a3e5d34d951605b4a0eaecda3e91805c.jpg", name: "Accessories" }
  ];

  return (
    <div className='SelectCata'>
      {productsdata.map((item) => (
        <div key={item.id} className="catadata">
          <div className="imgdata">
            <img src={item.url} alt={item.name} />
          </div>
          <button className="cataname">
            {item.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectCata;
