import { useState } from "react";
import ColorBox from "./componentes/ColorBox/ColorBox";
import ColorForm from "./componentes/ColorForm/ColorForm";

function App() {

  const [boxColors, setBoxColors] = useState([]);

  const createBox = (color,size) => {
    console.log(color);
    let newBoxes = boxColors;
    newBoxes.push({color:color,size:size});
    setBoxColors([...newBoxes]);
    console.log(newBoxes);
  }

  return (
    <div className="container">
      <ColorForm newBox={createBox} />

      <div className="row">
        {
          boxColors.map((color,index) => {
            return (
              <ColorBox key={color+index} BgColor={color.color} Size={color.size} /> 
            );
          })
        }
      </div>


    </div>
  );
}

export default App;
