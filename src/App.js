// import logo from './logo.svg';
// import './App.css';
// import React, { useState, useEffect } from 'react'
// import { Card, Typography, Button, TextField } from '@mui/material'
// import uuid from 'uuid'
// import AddTodoMain from './components/Redux/modules/action'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux';

// function App(props) {
//   const [addData, setAddData] = useState('')
//   const [update, setUpdate] = useState('')
//   const [array, setArray] = useState([])

//   // let array=[]
//   let obj = { id: uuid(), item: addData }
//   console.log(array)
//   const addTodos = () => {
//     if (array !== [] && array !== null && array !== '') {
//       setArray([...array, obj])

//     }
//     else {
//       setArray([obj])
//     }


//   }
//   useEffect(() => {
//     props.AddTodoMain(array)
//   }, [array])
// console.log('props 33 page number',props)

//   const updateFunc = (id) => {


//     for (let i = 0; i < array.length; i++) {

//       if (array[i].id === id) {
//         array[i].item = update
//         setArray([...array])

//       }
//     }


//     // let filtered = array.filter(val => val.id == id)
//     // filtered.item = update

//     // filtered.id = id
//     // setArray([...array, filtered])
//     // console.log(array)


//   }

//   const deleteFunc = (id) => {
//     let filtered = array.filter(val => val.id !== id)
//     console.log(filtered)
//     setArray(filtered)

//   }
//   const mapStateToProps = (state) => ({

//     todos: state.todo
//   })

//   const mapDispatchToProps = (dispatch) =>
//     bindActionCreators({
//       AddTodoMain
//     }, dispatch)

//   return (
//     <div className="App">
//       <h1 className='heading1'>React Redux Firebase Todolist</h1>
//       <Card className='mainCard'>
//         <TextField placeholder='Add Todos....' onChange={e => setAddData(e.target.value)} className='addTodoInput' />
//         <Button onClick={addTodos} className='addTodoBtn'>
//           <Typography className='addTodoBtnText'>Add Todo</Typography>
//         </Button>
//         {
//           array.map((val, ind) => (
//             <span><h5>{val.item}</h5> <h6>{val.id}</h6> <button onClick={() => deleteFunc(val.id)}>Delete</button> <button onClick={() => updateFunc(val.id)}> Edit</button> </span>
//           ))
//         }
//         <input placeholder='update' onChange={e => setUpdate(e.target.value)} />
//       </Card>

//     </div>
//   );
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
import React from 'react'
import { connect } from 'react-redux'

export const App = (props) => {
  return (
    <div className="App">
    //       <h1 className='heading1'>React Redux Firebase Todolist</h1>
    //       <Card className='mainCard'>
    //         <TextField placeholder='Add Todos....' onChange={e => setAddData(e.target.value)} className='addTodoInput' />
    //         <Button onClick={addTodos} className='addTodoBtn'>
    //           <Typography className='addTodoBtnText'>Add Todo</Typography>
    //         </Button>
    //         {
    //           array.map((val, ind) => (
    //             <span><h5>{val.item}</h5> <h6>{val.id}</h6> <button onClick={() => deleteFunc(val.id)}>Delete</button> <button onClick={() => updateFunc(val.id)}> Edit</button> </span>
    //           ))
    //         }
    //         <input placeholder='update' onChange={e => setUpdate(e.target.value)} />
    //       </Card>
    
        </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
