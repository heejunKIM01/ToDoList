import './App.css'
import { useState } from 'react'
import React from 'react'
import TodoDone from './components/TodoDone'
import TodoNotDone from './components/TodoNotDone'
import Addbutton from './components/Addbutton'


function App() {

  const [todo, setTodo] = useState([
    { id: 1, title: '리액트 공부하기', comment: '리액트 기초를 공부해봅시다.', isDone: false },
    { id: 2, title: '리액트 공부하기', comment: '리액트 기초를 공부해봅시다.', isDone: true}
  ])

  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')

  function titleChange(event) {
    setTitle(event.target.value)
  }

  function commentChange(event) {
    setComment(event.target.value)
  }

  function clickAddButton() {
    const newTodo = {
      id: todo.length + 1,
      title: title,
      comment: comment,
      isDone: false
    }
    setTodo([...todo, newTodo])
    setTitle('')
    setComment('')
  }

  function deleteCard(id) {
    const newCard = todo.filter((a) => {
      return a.id !== id
    })
    setTodo(newCard)
  }

  function completeCard(id){
    const updateTodo = todo.map((a)=>{
      if(a.id === id){
        return {
          ...a,
          isDone:true
        }
      }else{
        return a
      }
    })
    setTodo(updateTodo)
  }

  function unCompleteCard(id){
    const updateTodo = todo.map((a)=>{
      if(a.id === id){
        return{
          ...a,
          isDone:false
        }
      }else{
        return a;
      }
    })
    setTodo(updateTodo)
  }



  return (
    <div className='layout'>

      <div className='main-title'>
        <div className='title'>My Todo List</div>
        <div className='specialty'>React</div>
      </div>

      <div className='input-area'>
        <div className='input-group'>
          <label className='label' for='title-input'>제목</label>
          <input className='title-input' id='title-input'
            value={title}
            onChange={titleChange}></input>

          <label className='label' for='comment-input'>내용</label>
          <input className='comment-input' id='comment-input'
            value={comment}
            onChange={commentChange}></input>
        </div>

        <Addbutton clickAddButton={clickAddButton}/>

      </div>
      <div className='list-container'>
        <div className='working'>Working.. 🔥</div>

        <div className='contain'>
          {
            todo.filter((a) => {
              return a.isDone === false
            }).map((b) => {
              return (
                <TodoNotDone b ={b} deleteCard={() => deleteCard(b.id)} completeCard={()=> completeCard(b.id)} key={b.id}/>
              )
            })
          }
        </div>

        <div className='working'>Done..!🎉</div>
        <div className='contain'>
          {
            todo.filter((a) => {
              return a.isDone === true;
            }).map((b) => {
              return (
                <TodoDone b={b} deleteCard={() => deleteCard(b.id)} unCompleteCard={()=> unCompleteCard(b.id)} key={b.id}/>
              )
            })
          }</div>
      </div>
    </div>
  );
}

export default App;
