import React from 'react';
import tw from "tailwind-styled-components";
import {v1 as uuid} from "uuid";
const App = () =>
{
  let todoContent ="";

  function getInput(element) {
    todoContent=element.target.value
  }

  function deleteTodo(e) {
    let confirm = window.confirm(`Are you sure you want to delele this todo? \n You can't undo this`)
    if(confirm){
      setTodo((todo.filter(item=>item.id !== e.currentTarget.id)))
    }
  }
  const [todo, setTodo] = React.useState([{}])

  const todos = todo.map((item)=> 
    item.value ?
    <Todo key = {item.id} id={item.id}>
        <Ptodo className='todo--p'>{item.value}</Ptodo>
        <Delete className='todo-delete' onClick={deleteTodo} id={item.id}>Delete</Delete>
      </Todo>
    : ""
    )
    
  function addItem(){
    if (todoContent === "") return;
    else {
      setTodo((todo)=>[({value : todoContent, id:uuid()}),...todo])
      document.getElementById('todo').value = "";
    }

  } 
  return(
    <Container>
      <Main id='main'>
        <Input id='todo' placeholder='What you are going to do?...' onChange={getInput}>
        </Input>
        <Add onClick={addItem}>
          Add
        </Add>
        {todos}
      </Main>
    </Container>
  )
}

const Container = tw.div`
m-0
w-screen
h-screen
bg-slate-800
flex
flex-col
justify-center
items-center
fixed
overflow-y-scroll
`
const Main = tw.div`
w-full
h-full
flex
flex-col
justify-start
items-center
bg-fixed
`
const Input = tw.textarea`
bg-stone-900
min-h-[10%]
h-32 
max-h-96
w-4/5
max-w-xl 
mt-10 
placeholder-neutral-400 
hover:placeholder-neutral-100
text-center
text-amber-500
border
border-orange-900
hover:border-orange-500
rounded-2xl
font-serif
text-2xl
overflow-y-auto
break-words
shadow-[0_0_5px]
hover:shadow-[0_0_10px]
shadow-pink-900
py-2
px-4
`
const Add = tw.button`
bg-green-600 
hover:bg-green-300
hover:text-amber-600
text-amber-300
h-12 
mt-1 
w-4/5 
max-w-xl
rounded-2xl
font-serif
text-4xl
duration-300
shadow-[0_0_5px]
hover:shadow-[0_0_15px]
shadow-pink-900
active:bg-green-600
active:text-amber-300
`
const Todo = tw.div`
flex
flex-col
justify-start
items-start
bg-amber-700
bg-opacity-30
w-4/5 
max-w-xl
mt-4
rounded-md
min-h-max
shadow-[0_0_5px]
hover:shadow-amber-500
`
const Ptodo = tw.p`
text-amber-400
text-2xl
m-2
`
const Delete = tw.button`
m-2
p-2
self-end
rounded-xl
text-black
text-[1em]
bg-red-300
hover:bg-red-600
hover:text-[1.15em]
`
export default App;