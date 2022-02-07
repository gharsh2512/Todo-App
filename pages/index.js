import {useState} from 'react'

function Home(){
  const [todoItem,setTodoItem] = useState('');
  const [items,setItems] = useState([])

  const handleAdd = () =>{
    if(todoItem){
      setItems([todoItem, ...items]);
      setTodoItem("");
    }
  }

  const handleDelete = (todo) =>{
    const updated = items.filter(item => todoItem.indexOf(item)!=todoItem.indexOf(todo))
    setItems(updated);
  }

  return(
    <div>
      <h1>Todo App</h1>
      <div>
        <input type="text" value={todoItem} onChange={(e)=>setTodoItem(e.target.value)} />
        <button type="button" onClick={handleAdd}> Add</button>
      </div>
      <ul>
        {/* {items.map((item)=>(
          <li key={item}>{item}<button onClick={(e) => {
            e.preventDefault()
            handleDelete(item)
          }}>Delete</button></li>
        ))} */}
       

       {
         items.length >=1? items.map((todo,idx)=>{
           return <li key={idx}>{todo}<button onClick={(e) =>{
             e.preventDefault()
             handleDelete(todo)
           }}>Delete</button></li>
         }): 'Enter Item'
       }
      </ul>
    </div>
  )
}

export default Home;