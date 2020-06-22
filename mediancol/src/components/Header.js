import { Link } from "react-router-dom";
import React from "react";

function Header() {
    return (
      <header style={{height:"50px",
                     backgroundColor:"gray",
                     color:"white",
                     } }>
            <nav>
               <div className="container">
                   <div className="row">
                       <div className="col-sm-7"></div>
                       <div className="col-sm-1 mr-2">
                       <Link to="/home">MedianCOL </Link>
                       </div>
                       <div className="col-sm-1 mr-2"><Link to="/projects"> About</Link></div>
                       <div className="col-sm-1"><Link to="/Contact"> LivingCost</Link></div>
                   </div>
               </div>
               
            </nav>
        </header>
    )
}

export default Header;