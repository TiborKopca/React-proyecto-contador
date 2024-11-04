import logoTK from "./img/TKlogo.svg";
import "./App.css";
import Button from "./components/Button";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [numClicks, setNumClicks] = useState(0);
  const [fade, setFade] = useState(false);

  //BUTTON HANDLER
  const handleClick = () => {
    setFade(true);
    setTimeout( () => {
      setNumClicks(numClicks + 1); 
      setFade(false); //Triggers CSS transition
    }, 200); // Match transition duration in CSS
    
    // console.log("number of clicks: ", numClicks);
  };
  const handleClickReset = () => {
    setFade(true);
    setTimeout( () => {
      setNumClicks(0);
      setFade(false); //Triggers CSS transition
    }, 200); // Match transition duration in CSS
    // console.log("Reset, number of clicks: ", numClicks);
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
        <h1>Click Counter</h1>
        <Counter 
          numClicks= { numClicks } 
          fade={ fade } />
        <Button 
          text="Click +1" 
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
