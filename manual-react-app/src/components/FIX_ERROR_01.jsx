// issue fixed bug 1
import React from "react";
const baseUrl="https://images.pexels.com/photos/3119955/pexels-photo-3119955.jpeg?cs=srgb&dl=pexels-kelly-1179532-3119955.jpg&fm=jpg";
const person={
    name:"Aathityan",
    imageId:"7vQD0fp",
    imageSize:'s',
    theme:{
        backgroundColor:'black',//issue fixed bug 2
        color:'pink',
    }
};
export default function FIX_ERROR_01(){
    const a = baseUrl + person.imageId + person.imageSize + ".jpg";///issue fixed
    return(
        <div style={person.theme}>
        {/* issue fixed  bug 3*/}
         <h1>{person.name}'s TO DO's</h1>
         <img className="avatar"
         src={a} height={100} //introduced new issue
         alt={person.name}
         />
         <ul style={{
            listStylePosition: "inside", // Moves bullet closer to text
            paddingLeft: "0",            // Removes extra space
            marginLeft: "0", 
         }}>
            <li>day 1</li>
            <li>day 2</li>
            <li>day 3</li>
         </ul>
        </div>//issue fixed bug no 4
    );
}