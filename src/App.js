import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";

function App() {
    let name = "Tdmx4";
    let obj = { name: "Tdmx4", age: "24" };
    let link_ =
        "https://www.youtube.com/watch?v=Y9gTouaZJ5s&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=12&ab_channel=H%E1%BB%8FiD%C3%A2nIT";

    return (
        <div className="App">
            <Nav />
            <img src={logo} className="App-logo" />
            <h2>Hello from App component</h2>
            <h3>Hello {name}</h3>
            <h4>{obj.age}</h4>
            <p>{JSON.stringify(obj)}</p>
            <a href={link_} target="_blank">
                Visit this video
            </a>
        </div>
    );
}

export default App;
