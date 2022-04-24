import logo from './logo.svg';
import './App.css';
import { connect} from 'react-redux';
import { loginActionCreator } from './Redux/action creator/ActoinCreators';

 function App(props) {

//   let dispatch= useDispatch()

  let login=(e)=>{
    props.login();
  }

  return (
    <div className="App">
      <header className="App-header">
      {props.storeObject.name}

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
        <button type="button" onClick={ (e)=>{ login(e) }}>Change Name</button>
      </header>
    </div>
  );
}

let mapStateToProps=(getStateMethod)=>{

   return {
    "storeObject":getStateMethod  //p:v
  };
}
let mapDispatchToProps=(dispatchMethod)=>{

   return {
       login:() => {
       dispatchMethod(loginActionCreator());
     }
      
   };
 }
export default connect(mapStateToProps,mapDispatchToProps)(App);
