import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import storeObject from './Redux/store/Store';

//Action 


//Action creator
// let ritik = () =>{
//   return {
//     type:"abc"
//   }
// }


//reducer



//Store object



//console.log(store);

// store.subscribe( ()=>{
//   console.log(store.getState());  //despatch the method 
// } )
//console.log(store.getState());

//store.dispatch({type:"abc",name:"ritik",surname:"patidar"})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeObject}>
      <App />
    </Provider>
  </React.StrictMode>
);

