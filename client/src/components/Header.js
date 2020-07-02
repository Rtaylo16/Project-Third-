import { Link } from "react-router-dom";
import React from "react";
import MedianCol from "./images/MedianCol.png";



function Header() {
    const style = {
        height:{
            height: '100%'
        },
        global: {
            height: "75px",
            backgroundColor: "gray",

        },
        image: {
            height: '100%'
        }
    }
    return (
        <header style={style.global}>
            <div className="container-fluid" style={style.global}>

                <div className="row" style={style.height}>
                    <div className="col-sm-2" style={style.height}>

                        <img src={MedianCol} alt="app logo" style={style.image} />
                        
                    </div>
                    <div className="col-sm-2" ></div>
                    <div className="col-sm-2 align-self-center text-center " >
                       
                    </div>
                    <div className="col-sm-1 align-self-center text-center " ><Link className="text-light" to="/projects"> Home</Link></div>
                    <div className="col-sm-1 align-self-center text-center" ><Link className="text-light" to="/LivingCost"> LivingCost</Link></div>
                    <div className="col-sm-1 align-self-center text-center" ><Link className="text-light" to="/jobs"> JobSelection</Link></div>
                    <div className="col-sm-1 align-self-center text-center" ><Link className="text-light" to="/city"> Contact Us</Link></div>
                    
                

                    



                </div>


                
            
               

            </div>

        </header>
    )
}

export default Header;