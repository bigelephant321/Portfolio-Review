import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/port-data.json";
import PortItem from "./components/PortItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2>Colin's Portfolio</h2>
        <p class="intro">Hi! I'm a senior at Brown University, focusing on the process of UX design. Take a look at how my process has progressed through various projects!</p>
      </header>

      <ul class="card-list">
        {bakeryData.map((item, index) => (
          <p>
            <PortItem item= {item} name={item.name} description={item.description} image={item.image} link={item.link}/>
          </p> 
        ))}
      </ul>
    </div>
  );
}

export default App;
