import {MAIN_URL} from "../constants/constants";

export const api = () => {
   fetch(MAIN_URL+"/login").then(responce => {
     console.log(JSON.parse(responce))
   })
}