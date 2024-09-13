import React from 'react';
import './Fproduct.css'
import { useSelector } from 'react-redux';

const Fproduct = () => {
    const productsdata = [
        { id: 0, url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/q/5/-original-imahfkf6jcuhhzyb.jpeg?q=70", name: "Redmi" },
        { id: 1, url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/f/d/-original-imagpgx4g2m63gfh.jpeg?q=70", name: "Pixles" },
        { id: 2, url: "https://rukminim2.flixcart.com/image/612/612/kr83ukw0/power-bank/w/5/6/power-bank-plm13zm-mi-original-imag52az6xpcvjdk.jpeg?q=70", name: "Samsung" }
    ];

    const { items } = useSelector((state) => state.data);
    console.log(items)
    // const filteredItems=items.filter((item)=>{
    //     const isInCategory= item.catagorie.toLowerCase().includes("offer product") ;
    //     return isInCategory;
    // })

    return (
        <div className="fproduct">
            <div className="fproduct-h">
                <h2>Offer Product</h2>
            </div>
            <div className="lorem">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a autem ut itaque dolorem placeat voluptates fugit nulla tempora iusto quibusdam repellendus et esse aut minima, debitis velit quasi voluptatum!</p>
            </div>
            <div className="map">
            {productsdata.map((item, index) => (
                <div key={index} className="fproduct-map">
                    <div className="fproduct-img">
                        <img src={item.url} alt={item.name} />
                    </div>
                    <div className="product-disc">
                        <h4>{item.name}</h4>
                    </div>
                
                </div>
            ))}
            </div>
        </div>
    );
}

export default Fproduct;
