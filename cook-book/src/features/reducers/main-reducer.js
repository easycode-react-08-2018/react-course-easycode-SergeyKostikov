import {LOGIN_ACTION_TYPE, MAIN_URL, URL_PREFIX} from "../constants/constants";

const initSatate = {
  key: ""
}

export  const mainReducer = (state = initSatate,action) => {
  switch (action.type) {
    case LOGIN_ACTION_TYPE: {
      fetch(
        MAIN_URL+"/"+URL_PREFIX+"/login",{
          headers: {"Content-Type" : "application/json"},
          method: "POST",
          body: JSON.stringify(action.payload)})
        .then((response) => {
          return response.json()
          // if(response.status==401){
          //   let user_log = {
          //       ...action.payload,
          //     email:"sergey.diod@gmail.com"
          //   }
          //     fetch(MAIN_URL+"/"+URL_PREFIX+"/signup",{
          //
          //     headers: {"Content-Type" : "application/json"},
          //     method: "POST",
          //     body: JSON.stringify(user_log)})
          //     .then(result => {
          //
          //     })
          // }else if(response.status==201){
          //   return response.json()
          // }
      }).then(data=> {
        return data.message.token
      })
      return state

    }
    default:{
      return state
    }
    }
}