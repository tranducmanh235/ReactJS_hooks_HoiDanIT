import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
    // let name = "Tdmx4";
    let obj = { name: "Tdmx4", age: "24" };
    let link_ =
        "https://www.youtube.com/watch?v=Y9gTouaZJ5s&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=12&ab_channel=H%E1%BB%8FiD%C3%A2nIT";

    let [name, setName] = useState("Ducmanhx4");
    const [address, setAddress] = useState("");
    const [todos, setTodos] = useState([
        { id: "todo1", title: "watching television" },
        { id: "todo2", title: "doing homework" },
        { id: "todo3", title: "paging liu liu" },
    ]);

    let handleEventClick = (event) => {
        if (!address) {
            alert("empty input");
            return;
        }
        // hook not merge state
        let newTodo = { id: "", title: address };
        setTodos([...todos, newTodo]);
        setAddress("");
    };

    let handleChangeInput = (event) => {
        setAddress(event.target.value);
        // console.log(event.target.value);
    };

    return (
        <div className="App">
            <Nav />
            <img src={logo} className="App-logo" />
            <h2>App component</h2>
            <h3>Hello {name}</h3>
            <div className="todos-container">
                {todos.map((todo) => {
                    return (
                        <li key={todo.id} className="todo-child">
                            {" "}
                            {todo.title}
                        </li>
                    );
                })}
            </div>
            <input
                type="text"
                value={address}
                onChange={(event) => handleChangeInput(event)}
            />
            <button type="button" onClick={(event) => handleEventClick(event)}>
                Click
            </button>
        </div>
    );
}

export default App;
