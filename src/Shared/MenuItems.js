import React from "react";
import './MenuItems.css';

function MenuItems(props){
    return(
        <div className="hero">
                <figure>
                   <img src={props.item.image} width="250px" height="275px"/>
                  <figcaption>{props.item.description}</figcaption>
                  <p>Ksh.{props.item.price}</p> 
                </figure>
            
        </div>
    )
    
}
export default MenuItems