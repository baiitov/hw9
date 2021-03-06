import React, { useEffect, useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
const emailReducer=(state, action)=>{
    if(action.type === "USER_INPUT"){
      return{
        value:action.val,
        isValid:action.val.includes('@')
      }

    }
    if(action.type === 'INPUt-BLUR'){
      return{
        value:state.value,
        isValid:state.value.includes('@')
      }
    }
    return{
      value:'',
      isValid:false,
    }
}

const passwordReducer=(state, action)=>{
  if(action.type === "USER_INPUT"){
    return{
      value:action.val,
      isValid:action.val.trim().length > 6
    }

  }
  if(action.type === 'INPUt-BLUR'){
    return{
      value:state.value,
      isValid:state.value.trim().length >6
    }
  }
  return{
    value:'',
    isValid:false,
  }
}
const Login = (props) => {
  const [emailState , dispatchEmail] = useReducer(emailReducer, {
    value:'',
    isValid:false,
  })
  const [passwordState, dispatchPassword]= useReducer(passwordReducer, {
    value:'',
    isValid:false
  })
  
  // const [enteredEmail, setEnteredEmail] = useState(''); 
  // const [emailIsValid, setEmailIsValid] = useState(false);
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const {isValid :emailIsValid} = emailState
  const {isValid :passwordIsValid} = passwordState


  useEffect(()=>{
   const identifier =  setTimeout(()=>{
     // биз  буну переменныйга салгыча жана ретурнга чеин. EnteredEmail ге бир неерсе жазсак . useeffect бир жолду иштейт, бирок таймери отчот кылат
      setFormIsValid(
        console.log('Valid'),
         emailIsValid&&passwordIsValid.isValid
      )
    }, 2500)

    return()=>{
      // бул функция очиски .Эми функция очиски ар дайым useEffect тин логикасын тазалап турат , таймер канча жолу чакырылса ал ошончо жолу тазаланат
      console.log('clean up');
    clearTimeout(identifier) // ушул таймерди тазалап салат
    }
   
  }, [emailState , passwordState])//бул жерде useEffect enteredEmail менен enteredPassword иштегенде иштейт
   // ошону текшергенде '@'жана пароль 6 дан жогору болсо анда true кайтарат

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
  dispatchEmail({type:'USER_INPUT', val:event.terget.value})

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: 'USER_INPUT', val:event.target.value})
      
      setFormIsValid(emailState.isValid&& event.target.value.trim().length >6)
    

    }
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    dispatchEmail({type:'INPUT_PLUR'})
    
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
