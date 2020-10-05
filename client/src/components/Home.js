import React from 'react'
import './Home.css'
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="" />
            
            <div className='home_row'>
                    <Product 
                    id="123456"
                    title='The Lean StartUp' 
                    price={29.99} 
                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F1%2F11%2FLean_Startup.png&f=1&nofb=1" 
                    rating={5} />
                    <Product 
                    id="123768"
                    title='Cellphone Stand' 
                    price={11.89} 
                    image="https://images-na.ssl-images-amazon.com/images/I/61VXacIAyRL._AC_SL1295_.jpg" 
                    rating={4.5} />
                    
                </div>

                <div className="home_row">
                    <Product 
                    id="123984"
                    title='Anker Wireless Charger' 
                    price={11.89} 
                    image="https://images-na.ssl-images-amazon.com/images/I/51cYdJDM6UL._AC_SL1500_.jpg" 
                    rating={3} />
                    <Product 
                    id="986456"
                    title='DayBetter LED Strip Lights' 
                    price={16.98} 
                    image="https://images-na.ssl-images-amazon.com/images/I/7170G4unQOL._AC_SL1200_.jpg" 
                    rating={4} />
                    <Product 
                    id="864456"
                    title='GOOVI Robot Vacuum' 
                    price={155.54} 
                    image="https://images-na.ssl-images-amazon.com/images/I/81WOzGZXWQL._AC_SL1500_.jpg" 
                    rating={5} />
                </div>
                
                <div className="home_row">
                    <Product 
                    id="873056"
                    title='FLYBIRD Adjustable Bench' 
                    price={148.57} 
                    image="https://images-na.ssl-images-amazon.com/images/I/610w0JHWFvL._AC_SL1200_.jpg" 
                    rating={5} />
                </div>
            
            </div>
            
        </div>
    )
}

export default Home
