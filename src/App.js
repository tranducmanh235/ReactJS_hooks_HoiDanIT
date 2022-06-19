import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import Covid from "./components/Covid";

function App() {
    // let name = "Tdmx4";
    let obj = { name: "Tdmx4", age: "24" };

    let [name, setName] = useState("Ducmanhx4");
    const [address, setAddress] = useState("");
    const [todos, setTodos] = useState([
        { id: "todo1", title: "watching television", type: "tm" },
        { id: "todo2", title: "doing homework", type: "tm" },
        { id: "todo3", title: "paging liu liu", type: "x4" },
        { id: "todo4", title: "reading book", type: "x4" },
    ]);

    // chay bat cu khi nao Giao dien re-Render
    useEffect(() => {
        // console.log("run useEffect");
    }, [address]);
    useEffect(() => {
        // console.log("run useEffect todos");
    }, [todos]);

    const handleEventClick = (event) => {
        if (!address) {
            alert("empty input");
            return;
        }
        // hook not merge state
        let newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: address,
            type: "tm",
        };
        setTodos([...todos, newTodo]);
        setAddress("");
    };

    const handleChangeInput = (event) => {
        setAddress(event.target.value);
        // console.log(event.target.value);
    };

    const deleteDataTodo = (id) => {
        let currentTodos = todos;
        currentTodos = currentTodos.filter((item) => item.id !== id);
        setTodos(currentTodos);
    };

    return (
        <div className="App">
            <header className="App-header">
                <Nav />
                <img src={logo} className="App-logo" />
                <h2>App component</h2>
                <h3>Hello {name}</h3>

                {/* <Todo
                    todos={todos}
                    title={"All todos"}
                    deleteDataTodo={deleteDataTodo}
                />

                <Todo
                    todos={todos.filter((item) => item.type === "tm")}
                    title={`Tm's todos`}
                />
                <input
                    type="text"
                    value={address}
                    onChange={(event) => handleChangeInput(event)}
                />
                <button
                    type="button"
                    onClick={(event) => handleEventClick(event)}
                >
                    Click
                </button> */}
            </header>
            <Covid />
        </div>
    );
}

export default App;
