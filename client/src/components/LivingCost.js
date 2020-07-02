import React from "react";
import CostOfLiving from "./images/CostOfLiving.jpg";


function LivingCost() {
    const style = {
        image:{
            width: '100%',
            height: "60%",
            image: 'center',
        },
    } 
        return (
            <page style={style.global}>
                <div className="container-fluid" style={style.global}>
    
                            <img src={CostOfLiving} alt="background" style={style.image} />
        
               </div>
        
        
        </page>
        
        )

    
}
        
    export default LivingCost;
        
