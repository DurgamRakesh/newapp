// // import React from 'react'
// // import Sub from './Sub'

// // const App = () => {
// //   return (
// //     <div>
// //       <Sub/>
// //     </div>
// //   )
// // }

// // export default App
// import React from 'react'
// import Chaild from './Components/Chaild';
// // import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// // import Home from './Components/Home'
// // import About from './Components/About'
// // import Contact from './Components/Contact'

// const App = () => {
//   const getData = (data) => {
//     console.log(data)
//   }
//   return (
//     <>
//     {/* <BrowserRouter>
//     <div>App</div>
//     <Link to={'/'}>Home</Link>
//     <Link to={'/About'}>About</Link>
//     <Link to={'/Contact'}>Contactus</Link>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/About' element={<About/>}/>
//       <Route path='/Contact' element={<Contact/>}/>
//     </Routes>
//     </BrowserRouter> */}
//     <Chaild getData={getData}/>
//     </>
//   )
// }

// export default App
// import React from 'react'
// import { Provider } from 'react-redux'
// import Counter from './Components/Redux/Counter'
// import { store } from './Components/Redux/Store'

// const App = () => {
//   return (
//     <Provider store={store}>
//       <div>
//         <Counter/>
//       </div>
//       </Provider>
//   )
// }

// export default App
// import React, { useReducer } from 'react'
// const initialvalue = {
//   count:0
// }
// const reducer = (state, actions) => {
//   switch (actions.type){
//     case 'inc' :
//     return{count:state.count+1}
//     case 'dec' :
//     return{count:state.count-1}
//   }
// }

// const App = () => {
//   const [state,dispatch] = useReducer(reducer,initialvalue)
//   return (
//     <div> 
//       <p>{state.count}</p>
//       <button onClick={()=>dispatch({type:'inc'})}>+</button>
//       <button onClick={()=>dispatch({type:'dec'})}>-</button>

//     </div>
//   )
// }

// export default App
// import React, { useRef } from 'react'

// const App = () => {
//   const inputele = useRef()
//   console.log(inputele.current);
//   const hc = () => {
//     // inputele.current.value = 'hello world'
//     // console.log(inputele.current.value);
//     inputele.current.focus()
//   }
//   return (
//     <div>
//       <input type='text' ref={inputele}/>
//       <button onClick={hc}>focus</button>
//     </div>
//   )
// }

// export default App

// import React, { lazy, Suspense } from 'react'
// // import Lazy from './Lazy'
// const Lazylo = lazy(() => import('./Lazy'))

// const App = () => {

//   return (
//     <div>
//       <Suspense fallback='loading...'>
//       <Lazylo/>
//       </Suspense>
//       {/* <Lazy/> */}
//     </div>
//   )
// }

// export default App
// import React, { createContext, useState } from 'react'
// import ComponentA from './Components/ComponentA'
// import ComponentB from './Components/ComponentB'

// export const store = createContext();
// const App = () => {
//   const [data,setData] = useState([
//     {
//       name:'a'
//     },
//     {
//       name:'b'
//     },
//     {
//       name:'c'
//     }
//   ])

  
//   return (
//     <>
//     <store.Provider value={[data,setData]}>
//     <h1>App</h1>
//     <ComponentA/>
//     <ComponentB/>
//     </store.Provider>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import { useState,useEffect } from 'react'

// const App = () => {
//   const [data, setData] = useState([])
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(d=>setData(d))
//   }, [])
  
//   return (
//     <div>App
//       {
//         data.map((e,id) => {
//           return <li key={id}>{e.name}</li>
//         })
//       }
//     </div>
//   )
// }

// export default App

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [data,setData] = useState([])
//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setData(res.data))
//   },[])
//   return (
//     <div>App
//       {
//         data.map((e,id) => {
//           return <li key={id}>{e.email}</li>
//         })
//       }
//     </div>
//   )
// }

// export default App

// import React, { Component } from 'react'

//  class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       count:0
//     }
//   }
//   componentDidMount(){
//     console.log('componentdidmount');
//   }
//   componentDidUpdate(){
//     console.log('componentDidUpdate');
//   }
//   componentWillUnmount(){
//     console.log('componentWillunMount');
//   }

//   hc(){
//     this.setState({count:this.state.count+1})
//   }
//   render() {
//     return (
//       <div>
//         <div>App</div>
//         <p>{this.state.count}</p>
//       <button onClick={()=>this.hc()}>+</button>
//       </div>
//     )
//   }
// }
// export default App

// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [d,setD] = useState(0)
//   const [e,setE] = useState(0)
//   useEffect(()=>{
//     console.log('mount');
//   },[d,e])
//   return (
//     <div>App
//       <p>{d}</p>
//       <button onClick={()=>setD(d+1)}>+</button>
//       <p>{e}</p>
//       <button onClick={()=>setE(e+1)}>+</button>
//     </div>
//   )
// }

// export default App
//----------------------------------------------------------------------------------
// import React from 'react'
// import { BrowserRouter, Link,Routes,Route } from 'react-router-dom'
// import Home from './Components/Home'
// import About from './Components/About'
// import Contact from './Components/Contact'


// const App = () => {
//   return (
//     <>
//     <BrowserRouter>
//     <Link to={'/'}>Home</Link>
//     <Link to={'/About'}>About</Link>
//     <Link to={'./Contact'}>Contact</Link>

//     <Routes>
//         <Route path={'/'}  element={<Home/>}/>
//         <Route path={'/About'}  element={<About/>}/>
//         <Route path={'/Contact'}  element={<Contact/>}/>
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App
// import React from 'react'
// import Chaild from './Components/New/Chaild'

// const App = () => {
//     const getData = (data) => {
//         console.log(data);
//     }
//   return (
//     <div>App
//         <Chaild getData={getData}/>
//     </div>
//   )
// }

// export default App
// import React, { lazy, Suspense } from 'react'
// // import LazyComponent from './Components/New/LazyComponent'
// const Lazy = lazy(()=>import('./Components/New/LazyComponent'))

// const App = () => {
//   return (
//     <div>App
//         <div>
//             {/* <LazyComponent/> */}
//             <Suspense fallback='loading...'>
//             <Lazy/>
//             </Suspense>
            
//         </div>
//     </div>
//   )
// }

// export default App
// import React from 'react';
// import { Provider } from 'react-redux';
// import CounterComponent from './Components/New/Redux/CounterComponent';
// import { store } from './Components/New/Redux/Store';

// const App = () => {
//   return (
//     <Provider store={store}>
//         <div>App</div>
//         <CounterComponent/>
//     </Provider>
//   )
// }

// export default App
// import React, { useEffect, useState } from 'react'

// const App = () => {
//     const [state,setState] = useState(0);
//     const [state1,setState1] = useState(0);
//     useEffect(() => {
//         console.log('CompontMounting');
//     },[state,state1])
    
//   return (
//     <div>App
//         <h1>state:{state}</h1>
//         <button onClick={()=>setState(state+1)}>+</button>
//         <h1>state1:{state1}</h1>
//         <button onClick={()=>setState1(state1+1)}>+</button>
//     </div>
//   )
// }

// export default App

// import React,{ Component } from 'react';

// class App extends Component{
//     constructor(){
//         super();
//         this.state = {
//             count:0
//         }
//     }
//     hc(){
//         this.setState({count:this.state.count + 1})
//     }

//     componentDidMount(){
//         console.log('componentDidMount');
//     }
//     componentDidUpdate(){
//         console.log('componentDidUpdate');
//     }
//     componentWillUnmount(){
//         console.log('componentWillUnMount');
//     }
//     render() {
//         return(
//             <div>This is class Component
//                 <p>{this.state.count}</p>
//                 <button onClick={() => this.hc()}>+</button>
//             </div>
//         )
//     }
// }
// export default App;

// import React, { useReducer } from 'react'
// const initialvalue = {
//     count:0
// }
// const reducer = (state,actions) => {
//     switch (actions.type) {
//         case 'inc':
//             return {count:state.count + 1}
//         case 'dec':
//             return {count:state.count - 1}
//     }
// }
// const App = () => {
//     const [state,dispatch] = useReducer(reducer,initialvalue);
//   return (
//     <div>App
//         <p>{state.count}</p>
//         <button onClick={() => dispatch({type:'inc'})}>+</button>
//         <button onClick={() => dispatch({type:'dec'})}>-</button>
//     </div>
//   )
// }

// export default App

// import React, { useRef } from 'react'

// const App = () => {
//     const inputElement = useRef();
//     const handileClick = (e) => {
//         e.preventDefault()
//         // inputElement.current.value = 'hello input tag'
//         inputElement.current.focus()
//     }
//   return (
//     <div>App
//         <form onSubmit={handileClick}>
//             <input type='text' ref={inputElement}/>
//             <button>submit</button>
//         </form>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Hoc from './Components/New/Hoc'

// const App = ({name}) => {
//   return (
//     <div>App
//         <h1>{name}</h1>
//     </div>
//   )
// }

// export default Hoc(App)
// import React from 'react';
// import Context from './Components/New/Context';
// import SubChaildComponent from './Components/New/SubChaildComponent';
// const App = () => {
//     return(
//         <Context>
//             <SubChaildComponent/>
//         </Context>
//     )
// }
// export default App;

// import React, { useEffect, useState } from 'react'
// const URL = 'https://jsonplaceholder.typicode.com/users';
// const App = () => {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         fetch(URL).then(res => res.json()).then(data => {
//             console.log(data)
//             setData(data)
//         })
//         .catch(err => console.log(err))
//     },[])
//   return (
//     <div>App
//         {
//             data.map((each, id) => {
//                 return(
//                     <div key={id}>
//                         <p>{each.name}</p>
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default App

// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// const URL = 'https://jsonplaceholder.typicode.com/users';
// const App = () => {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         axios.get(URL).then(res => setData(res.data))
//     },[])
//   return (
//     <div>App
//         {
//             data.map((each, id) => {
//                 return(
//                     <div key={id}>
//                         <p>{each.email}</p>
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default App



//TODO LIST
// import React, { useState } from 'react'

// const App = () => {
//     const [data,setData] = useState([
//         {
//             msg:'hello'
//         },
//         {
//             msg:'hi'
//         },
//         {
//             msg:'welcome'
//         }
//     ]);
//     const [newmsg,setNewmsg] = useState('');
//     const handc = () => {
//         setData([...data,{msg:newmsg}])
//         setNewmsg('')
//     }
//     const delfun = (i) => {
//         let n = [...data]
//         n.splice(i,1)
//         setData([...n])
//         console.log(i);
//     }
//   return (
//     <div>App
//         <input type='text' value={newmsg} onChange={(e) => setNewmsg(e.target.value)}/>
//         <button onClick={handc}>send</button>
//         {
//            (data.length > 0) ? data.map((each,index) => {
//                 // console.log(index);
//                 return(
//                     <li key={index} style={{margin:'10px'}}>
//                         {each.msg}
//                         <button onClick={ ()=>delfun(index)}>del</button>
//                     </li>
//                 )
//             }): <h1>No ToDo List</h1>
//         }
//     </div>
//   )
// }

//New2
// export default App
// import React from 'react'
// import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'
// import Home from './Components/New2/Home'
// import About from './Components/New2/About'
// import Contact from './Components/New2/Contact'
// import P1 from './Components/New2/P1'
// import P2 from './Components/New2/P2'


// const App = () => {
//   return (
//     <BrowserRouter>
//     <div>App
//       <Link to='/'>Home</Link>
//       <Link to='/About'>About</Link>
//       <Link to='/Contact'>Contact</Link>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/About' element={<About/>}>
//           <Route path='P1' element={<P1/>}/>
//           <Route path='P2' element={<P2/>}/>
//         </Route>
//         <Route path='/Contact' element={<Contact/>}/>

//       </Routes>
      
//       </div>
//     </BrowserRouter>
//   )
// }

// export default App
// import React, { useEffect,useState } from 'react'

// const App = () => {
//   const [state,setState] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>setState(data))
//   },[])
//   return (
//     <div>App
//       {
//         state.map((eachitem,i) => {
//           return <li key={i}>{eachitem.name}</li>
//         })
//       }
//     </div>
//   )
// }

// export default App
// import axios from 'axios';
// import React, { useEffect,useState } from 'react'

// const App = () => {
//   const [state,setState] = useState([]);
//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setState(res.data))
//   },[])
//   return (
//     <div>App
//       {
//         state.map((eachitem,i) => {
//           return <li key={i}>{eachitem.email}</li>
//         })
//       }
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import Chaild from './Components/New2/Chaild'

// const App = () => {
//   const getData = (data) => {
//     console.log(data);
//   }
//   return (
//     <div>App
//       <div>
//         <Chaild getData={getData}/>
//       </div>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import { Provider } from 'react-redux'
// import CounterValue from './Components/New2/Redux/CounterValue'
// import {store} from './Components/New2/Redux/Store'

// const App = () => {
//   return (
//     <Provider store={store}>
//     <div>App</div>
//     <CounterValue/>
//     </Provider>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [count1, setCount1] = useState(0);
//   useEffect(() => {
//     console.log('componentmount');
//   },[count])
//   return (
//     <div>App
//       <div>
//         <h1>{count}</h1>
//         <button onClick={() => setCount(count + 1)}>+</button>
//         <h1>{count1}</h1>
//         <button onClick={() => setCount1(count1 + 1)}>+</button>
//       </div>
//     </div>
//   )
// }

// export default App
// import React, { useReducer } from 'react'
// const initialvalue = {
//   count:0
// }
// const reducer = (state, actions) => {
//   switch(actions.type){
//     case 'inc':
//       return{count:state.count+1}
//     case 'dec':
//       return{count:state.count-1}
//   }
// }

// const App = () => {
//   const [state,dispatch] = useReducer(reducer, initialvalue);
//   return (
//     <div>App
//       <div>
//         <h1>{state.count}</h1>
//         <button onClick={() =>dispatch({type:'inc'})}>+</button>
//         <button onClick={() =>dispatch({type:'dec'})}>-</button>
//       </div>
//     </div>
//   )
// }

// export default App
// import React, { useRef } from 'react'

// const App = () => {
//   const inp = useRef(null);
//   const hc = () => {
//     inp.current.focus()
//     inp.current.value = 'hello world'
//   }
//   return (
//     <div>App
//       <div>
//         <input type='text' ref={inp}/>
//         <button onClick={hc}>focus</button>
//       </div>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import Hoc from './Components/New2/Hoc'

// const App = () => {
//   return (
//     <div>
//       <h1>App</h1>
//     </div>
//   )
// }

// export default Hoc(App)
// import React from 'react'
// import Context from './Components/New2/Context'
// import SubChail from './Components/New2/SubChail'


// const App = () => {
//   return (
//     <Context>
//       <div>App
//         <SubChail/>
//       </div>
//     </Context>
//   )
// }

// export default App
// import React,{ Component} from 'react';
// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       count:0
//     }
//   }
//   componentDidMount(){
//     console.log('componentDidMount');
//   }
//   componentDidUpdate(){
//     console.log(' componentDidUpdate');
//   }
//   componentWillUnmount(){
//     console.log('componentWillUnmount');
//   }
//   hc(){
//     this.setState({count:this.state.count+1})
//   }
//   render(){
//     return(
//       <div>App from class
//         <div>
//           <h1>{this.state.count}</h1>
//           <button onClick={()=>this.hc()}>+</button>
//         </div>
//       </div>
//     )
//   }
// }
// export default App
// import React, { useState } from 'react'

// const App = () => {
//   const [list, setList] = useState([]);
//   const [text ,setText] = useState('');
//   const hc = (e) => {
//     e.preventDefault();
//     setList([...list,{msg:text}])
//     setText('')
//   }
//   const del = (i) => {
//     let newlist =  [...list];
//     newlist.splice(i,1);
//     setList([...newlist])
//     console.log(i);
//     console.log(newlist);
//   }
//   return (
//     <div>App
//       <div>
//         <form onSubmit={hc}>
//         <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
//         <button>add</button>
//         </form> 
//         {
//           (list.length > 0) ? list.map((eachitem, index) => {
//             return(
//               <div key={index}>
//                 <h1>{eachitem.msg}</h1>
//                 <button onClick={() => del(index)}>del</button>
//               </div>
//             )
//           }) : <h1>No ToDos</h1>
//         }       
//       </div>
//     </div>
//   )
// }

// export default App
// import React, { lazy, Suspense } from 'react'
// // import LazyComponent from './Components/New2/LazyComponent'
// const Lazyc = lazy(() => import('./Components/New2/LazyComponent'))
// const App = () => {
//   return (
//     <div>App
//       <div>
//         {/* <LazyComponent/> */}
//         <Suspense fallback='loading...'>
//         <Lazyc/>
//         </Suspense>
      
//       </div>
//     </div>
//   )
// }

// export default App
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [loading,setLoading] = useState(true);
//   useEffect(() => {
//     let ismount = true;
//     fetch('https://jsonplaceholder.typicode.com/users').then(() => {
//       if(ismount)
// {
//   setLoading(false);

// }      
//     })
//     return function cleanup() {
//       ismount = false
//     }
//   },[])
//   return (
//     <div>
//       {
//         loading ? <p>loading...</p> : <p>fetched...</p>
//       }
//     </div>
//   )
// }

// export default App
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [width,setWidth] = useState(window.screen.width)
//   const w = () => {
//     // console.log(window.innerWidth);
//     setWidth(window.innerWidth)
//   }
//   useEffect(() => {
//     console.log('add event');
//     window.addEventListener('resize',w)
//     return () => {
//       console.log('remove event');
//       window.removeEventListener('resize',w)
//     }
//     })
//   return (
//     <div>App
//       <h1>{width}</h1>
//     </div>
//   )
// }

// export default App
import React from 'react'
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'
import Home from './Components/Mock/Home'
import User from './Components/Mock/User'
import Counter from './Components/Mock/Counter'
import { Provider } from 'react-redux'
import { store } from './Components/Mock/Store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
    <div className='header'>
      <Link to='/'>Home</Link>
      <Link to='/User'>Users</Link>
      <Link to='/Counter'>Counter</Link>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/User' element={<User/>}/>
      <Route path='/Counter' element={<Counter/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App