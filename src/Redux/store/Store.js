import { legacy_createStore } from "redux";
import rootRaducer from "../reducre/Reducers";



let storeObject = legacy_createStore(rootRaducer);

export default storeObject;