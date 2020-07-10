import { Link } from "react-router-dom";
import React, { useContext } from "react";
import MedianCol from "./images/MedianCol.png";
import authContext from "../context/authContext"


function Header() {
    const style = {
        height: {
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
    const auth = useContext(authContext)
    const handleLogout = () => {
        auth.onLogout()
    }
    return (
        <header style={style.global}>
            <div className="container-fluid" style={style.global}>

                <div className="row" style={style.height}>
                    <div className="col-sm-8" style={style.height}>

                        <img src={MedianCol} alt="app logo" style={style.image} />
                        {auth.user?<span className="text-light"> Welcome {auth.user.email}!</span>:null}
                    </div>
                    
                    <div className="col-sm-2 align-self-center text-center " >

                    </div>
                    <div className="col-sm-1 align-self-center text-center " ><Link className="text-light" to="/"> Home</Link></div>
            
                    {
                        auth.user ? 
                            <div className="col-sm-1 align-self-center text-center text-light" onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</div>
                            : <div className="col-sm-1 align-self-center text-center" ><Link className="text-light" to="/login">Login</Link></div>

                    }




                </div>






            </div>

        </header>
    )
}

export default Header;