import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Organizer from './containers/Organizer/Organizer';
import Login from './containers/Login/Login';
import Error404 from './containers/Error404/Error404';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';
import Landing from './containers/Landing/Landing';


function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(true);

  const user = {
    firstName: 'Vlad',
    lastName: 'Ulinets'
  }

  const login = (isLogin) => {
    setLoggedIn(isLogin);
  }

  return (
    <BrowserRouter>
      {

        // isLoggedIn?(
          <>
          
           <Header />
            <Routes>
              <Route index path="/org" element={<Organizer user={user} />} /> 
              <Route path="*" element={<Error404 />} />
              <Route index path="/" element={<Landing />}/> 
              <Route index path="/Login" element={<Login onLogin={login} />} />
              
              <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
             
          </>
        // ) (
        //   <div className={styles.container}>
        //      <Header/> 
        //      <Routes>
        //       <Route index path="/" element={<Landing />}/> 
        //       <Route index path="/Login" element={<Login onLogin={login} />} />
              
        //       <Route path="*" element={<Error404 />} />
        //     </Routes>
        //      <Footer/> 
        //   </div>   
        // )
      }
    </BrowserRouter>
  );
}

export default App;
