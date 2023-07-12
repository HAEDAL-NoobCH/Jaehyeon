import logo from './logo.svg';
import './App.css';

function App() {

  const name="JAEHYEON";
  return (
    <div className="App">
      <header className="App-header">
        <h1>jkaehyyon</h1>
        <h2>{name}</h2>
        {name=="JAEHYEON"?<h2>히히후히후후후훟</h2>:<h2>"틀려용"</h2>}
        <h1 className="myName">{name}</h1>
      </header>
    </div>
  );
}

export default App;
