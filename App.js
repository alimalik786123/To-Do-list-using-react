import React,{useState} from "react";
import Todo from "./todo"
const Todolist=()=>{
    const [iplist,setlist]=useState('')
    const [item,setitem]=useState([])
    const events=(e)=>{
          setlist(e.target.value)
    }
const list=()=>{
         setitem((olditem)=>{
             return[...olditem,iplist];
         })
         setlist('')
}  
const del=(id)=>{
    console.log('deleted');
       setitem((olditem)=>{
        return olditem.filter((arrel,index)=>{
            return index!==id;
        })
       })
}
  
    return(<>
    <div className="main_div">
        <div className="center_div">
            <br />
            <h1>To Do list</h1>
            <br />
            <input type="text" placeholder="Add items" value={iplist} onChange={events} />
            <button onClick={list}>+</button>
            <ol>
              {  item.map((val,index )=>{
                    return(<Todo 
                        key={index}
                        text={val}
                        id={index}
                        onSelect={del}/>)
                } )}
            </ol>
        </div>
    </div>
    </>)
}
export default Todolist;

 
 
