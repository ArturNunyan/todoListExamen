import InputList from "./components/InputList";
import InputListCons from "./components/InputListCons";

function App() {


  return (
    <div className="container">
      <div className="gray">
        <h1>Should i eat at McDonalds ?</h1>
      </div>
      <div className="mid">
        <div className="floatLeft">
          <h3>PROS</h3>
        </div>
        <div className="floatRight">
          <h3>CONS</h3>
        </div>
      </div>
      <div className="pros">
        <InputList />
      </div>
      <div className="cons">
        <InputListCons />
      </div>
    </div>
  );
}

export default App;
