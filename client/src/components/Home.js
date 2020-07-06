import React, { useState, useEffect } from "react"
import { PieChart } from 'react-minimal-pie-chart';
import CitiPicture from "./images/CitiPicture.png"
import charlotte from './images/charlotte.jpg'
import newYork from './images/newYork.jpg'
import 'react-dropdown/style.css';
import Dropdowns from './dropdowndata';
import IconLabelButtons from "./button";



const style = {
    main: {
        "backgroundImage": `url(${CitiPicture})`, "height": "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundColor: 'rgb(74, 74, 74)',
        backgroundSize: 'cover'
    },
    jumbotron: {

        height: '60%',
        margin: 'auto auto',
        opacity: .9,
        backgroundColor: 'black',
        backgroundSize: 'cover',
        fontSize: '1rem',
        fontWeight: 700
    },
    choose: {
        color: 'white'
    },
    button: {
        
    }
}
const cityData = [
    {
        name: 'Charlotte',
        housing: 1056,
        costOfLiving: 977,
        avgIncome: 2653,
        image: charlotte
    },
    {
        name: 'New York',
        housing: 2000,
        costOfLiving: 1292,
        avgIncome: 4815,
        image: newYork
    }
]
const Home = () => {
    const [currCity, setCurrCity] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setCurrCity(current => {
                if (current === cityData.length - 1) {
                    return 0
                }
                return current + 1
            })
        }, 3000)
    }, [])
    const currentCity = cityData[currCity]
    return (
       
                    <div style={style.main} className='d-flex align-items-center' >
                         <div class="container">
                             <div class = "row">
                                 <div class = "col"></div>
                                 
                             <h1 class = "choose" style={style.choose}>Choose the City you live in</h1>
                             
                             <div class = "col"></div>
                             </div>
            <div class="row">
                <div class="col"></div>
                <div class="col">

                        {/* <div style={{ backgroundImage: `url(${currentCity.image})`, ...style.jumbotron }} className="jumbotron text-white text-center pt-0 pb-1">
                <h1 className=' text-center'>{currentCity.name}</h1>
                <PieChart style={{ height: '50%' }}
                    data={[
                        { title: 'Disposable ', value: 100 - Math.floor((((currentCity.housing + currentCity.costOfLiving) / currentCity.avgIncome) * 100)), color: '#E38627' },
                        { title: 'Rent', value: Math.floor((currentCity.housing / currentCity.avgIncome) * 100), color: '#C13C37' },
                        { title: 'Cost of Living', value: Math.floor((currentCity.costOfLiving / currentCity.avgIncome) * 100), color: '#6A2135' },
                    ]}
                    label={({ dataEntry }) => dataEntry.title}
                    labelStyle={(index) => ({
                         fill:'#ffffff',
                        fontSize: '.5rem',
                        fontFamily: 'sans-serif',
                    })}
                    radius={42}
                    labelPosition={112}

                />
                <div >Average Cost of Living: ${currentCity.housing + currentCity.costOfLiving}</div>
                <div>Average Income: ${currentCity.avgIncome} </div>
                <div>Housing Cost {((currentCity.housing / currentCity.avgIncome) * 100).toFixed(2)}% of Income </div>
            </div> */}
                        <div><Dropdowns /></div>
                        <div style={style.button}>
                        {/* <IconLabelButtons/> */}
                        </div>
                    </div>
                    <div class="col"></div>
                </div >
            </div>
        </div>

    )
}

export default Home
