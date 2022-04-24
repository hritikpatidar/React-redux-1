import { A, B, C, D } from "../constants/Constants";
import initialState from "../initialData/Data";


let rootRaducer = (oldState=initialState,action) => {
    let newState = oldState;
    switch(action.type){
      case A:
        
        return {
            ...newState,
            name:"kiran"
        };
        
      case B:
        
        return newState;
      case C:
       
        return newState;
      case D:
       
        return newState;
      default: 
        return newState;
    }
     
  }

  export default rootRaducer;