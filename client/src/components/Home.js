import React from "react"
import CitiPicture from "./images/CitiPicture.png"
import 'react-dropdown/style.css';
import Dropdowns from './dropdowndata';
import Animate from './animation';
import '../style/style.css'



const style = {
    // main: {
    //     "backgroundImage": `url(${CitiPicture})`, "height": "130%",
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: 'center',
    //     backgroundColor: 'rgb(74, 74, 74)',
    //     backgroundSize: 'cover'
    // },
    // jumbotron: {

    //     height: '70%',
    //     margin: 'auto auto',
    //     opacity: .9,
    //     backgroundColor: 'black',
    //     backgroundSize: 'cover',
    //     fontSize: '1rem',
    //     fontWeight: 700
    // },
    choose: {
        color: 'white'
    },

}

const Home = () => {

    return (

        <div className='d-flex ' >
            <div class="container">
                <div class="row">
                    <Animate />
                    <div class="col"></div>

                    <h2 class="choose" style={style.choose}>Choose the City you live in</h2>

                    <div class="col"></div>
                </div>  



                        <div><Dropdowns /></div>



                    
              
            </div>
        </div>

    )
}

export default Home
