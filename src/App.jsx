import React , {useState} from "react";
import ListItem from "./Items"


function App(){

    const[task , taskChanger] = useState("");
    const[items , newItems] = useState([]);
    
    const newEntry = (event) =>{
       
        taskChanger(event.target.value);
    }

    const addTask = () => {
        newItems((old) =>{
            return [...old , task];
        })
        taskChanger("");
    }
    const deleteItem = (id) => {
        newItems((old) => {
            return old.filter((val , index) => {
                return id !== index
            })
        })
    }
    return(
        <>
            <div className="parent">
            <div className="container">
                <h1 className="head">Daily reminder</h1>
                <input className = "input" type="text" onChange={newEntry} value={task} placeholder="Add Tasks"/>
                <button className="add" onClick={addTask}>Add</button>
                <ul>
                    {items.map((val , index) => {
                        return(
                            <ListItem 
                            id = {index}
                            key = {index}
                            text = {val}
                            onSelect = {deleteItem}
                            />
                        );
                    })
                    }
                    
                </ul>
            </div>
            </div>
        </>
    )
}

export default App;