import React from "react"
import CitiPicture from "./images/CitiPicture.png"

const style ={
    "backgroundImage": `url(${CitiPicture})`, 
    "height": "100%", 
    backgroundRepeat:"no-repeat",
    backgroundPosition: 'center',
    backgroundColor: 'rgb(74, 74, 74)',
    backgroundSize: 'cover'
}
const Home = () => {
    return (
       <div style={style} >
        </div >
    )
}

export default Home
