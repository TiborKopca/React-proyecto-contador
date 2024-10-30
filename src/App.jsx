import logoTK from "./img/TKlogo.svg";
import "./App.css";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  //BUTTON HANDLER
  const handleClick = () => {
    setNumClicks(numClicks + 1);
    console.log("number of clicks: ", numClicks);
  };
  const handleClickReset = () => {
    setNumClicks(0);
    console.log("Reset, number of clicks: ", numClicks);
  };


  return (
    <div className="app">
      <div className="logo-container">
        <img 
          src={logoTK} 
          className="logo tk" 
          alt="logo Tibor Kopca" />
      </div>
      <main className="main__container">
        <h1>Contador de clicks</h1>
        {/* <Contador numClicks= {numClicks} /> */}
        <Button 
          text="Start Counter" 
          isButtonClick={true}
          handleClick={ handleClick }
          />
          <Button 
            text="Reset" 
            isButtonClick={false}
            handleClick={ handleClickReset }
            />
      </main>
    </div>
  );
}

export default App;
