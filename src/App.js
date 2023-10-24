
// Completed Frontend part only


import { useState } from 'react';
import './App.css';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';


function App() {
  // const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newCategory, setNewCategory] = useState("");
  
  const handleAddTodo = ()=>{
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
      date: newDate,
      category: newCategory,
    };

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push (newTodoItem);
    setTodos (updatedTodoArr);
  };

  const handleDeleteTodo = (index)=>{
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index);
    setTodos(reducedTodo);
  }

  return (
    <>
     {/* <Navbar/> */}
    <div className="App">
      
      <h1>Task Management Application</h1>

      <div className='q'>
        <div className='w'>
          <div className='e'>
            <lable>Title</lable>
            <input type='text' value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="What's the task title" ></input>
          </div>

          <div className='e'>
            <lable>Description</lable>
            <input type='text'  value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder="What's the task Description" ></input>
          </div>

          <div className='e' >
            <lable>Date</lable>
            <input type='date' value={newDate} onChange={(e)=>setNewDate(e.target.value)}/> 
          </div>

          <div className='e'>
            <lable >Category</lable>
            <select className='o'  value={newCategory} onChange={(e)=>setNewCategory(e.target.value)}>
              <option>None</option>  
              <option>Indore</option>  
              <option>Jaipur</option>  
              <option>Jodhpur</option>  
              <option>Chandigarh</option>  
              <option>Mumbai</option>  
              <option>Bengaluru</option>  
              <option>New Delhi</option>
            </select>
          </div>

          <div className='e'>
            <button type='button' onClick={handleAddTodo} className='r' >Add</button>
          </div>   
        </div>

        <div className='t'>
          <div>
            <lable >Filter by Category :</lable>
              <select className='o1' >
                <option>None</option>  
                <option>Date</option>  
                <option>Title</option>  
                <option>Description</option>  
              </select>
          </div>
          <div>
            <lable >Sort by :</lable>
              <select className='o1' >
                <option>None</option>  
                <option>Date</option>  
                <option>Title</option>  
                <option>Description</option>  
              </select>
          </div>
          {/* {/* <button className={`y ${isCompleteScreen===false && 'active'}`} onClick={()=> setIsCompleteScreen(false)}>Todo</button> */}
          {/* <button className={`y ${isCompleteScreen===true && 'active'}`} onClick={()=> setIsCompleteScreen(true)}>Completed</button> */} 
        </div>

        <div className='u'>
          {allTodos.map ((item, index) => {
              return(
                <div className='i' key={index}>
                  <div >
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>{item.date}</p>
                    <p>{item.category}</p>
                  </div>

                  <div>
                    <DeleteOutlined className='icon'  onClick={()=>handleDeleteTodo(index)} title='Delete?'/>
                    <EditOutlined className='checkicon'  title='Edit?'/>
                  </div>
                </div>
              )
          })}
          <div className='p'>
            <Pagination defaultCurrent={1} total={40} />
          </div>

        </div>

      </div>
    </div>
    </>
  );
}

export default App;
