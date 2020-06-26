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
                    <div className="col-sm-4" style={style.height}>

                        <img src={MedianCol} alt="app logo" style={style.image} />
                    </div>
                    <div className="col-sm-3" ></div>
                    <div className="col-sm-2 align-self-center text-center " >
                        <Link className="text-light" to="/home">MedianCOL </Link>
                    </div>
                    <div className="col-sm-1 align-self-center text-center " ><Link className="text-light" to="/projects"> About</Link></div>
                    <div className="col-sm-1 align-self-center text-center" ><Link className="text-light" to="/Contact"> LivingCost</Link></div>

                </div>

            </div>

        </header>
    )
}

export default Header;