import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{//бул жерде ал бир жолу иштейт оценка жана рендер болгондон кийин 
    const storedUserLoggedInfo = localStorage.getItem('isLoggenIn' , '1')

    if(storedUserLoggedInfo==='1'){
      setIsLoggedIn(true)
    }
  },[])

  const loginHandler = (email, password) => {//loginHandler толка сабмит болгондо иштейт
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isloggedIn', '1')
    setIsLoggedIn(true)
  };

  const logoutHandler = () => {
    
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn')//биз логауд кылганда локал сторичтеги данныйлар дагы очуп кетет. Анан кайра перезагрузка болгондо логин пейжке тушуп калабыз
  };
  // <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> бул жерде биздин кодтун хедери иштеп атат 

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />  
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}    
        {isLoggedIn && <Home onLogout={logoutHandler} />}  
      </main>
    </React.Fragment>
  );
}
  //   {! isLoggedIn && <login/>} бул жерде isLoggenIn false болуп турганда login компоненти иштеп турат
  //{isLoggedIn && <Home onLogout={logoutHandler} />}   // егер isLoggedIn true болгондо home компоненти иштеп модалное окно чыгып калат

export default App;
