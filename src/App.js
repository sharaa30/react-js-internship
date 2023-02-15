import logo from './logo.svg';
import './App.css';
import image from "./assets/image.jpg";


function App() {

  const x=10;
  var text="hogh";
  if(x===1){
    text="equal";

  }
  else{
    text="not equal";

  }

  return (
    <div className="App">
      <h1>hello world</h1>
      <p>this is what cs students kows to code</p>
      <h3> {5 + 50}</h3>
      <img src={image} alt="pic"/>
      <h2>{text}</h2>
      <h2>{x>=10?"greater":"lesser"}</h2>
    </div>
  );s
}

export default App;
