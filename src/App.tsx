import React from 'react'
import { Home } from './Home';
import { Route,Routes } from "react-router-dom";
import { Error } from './components/Error';
import { Downoad } from './components/Downoad';
import { Cv } from './components/Cv';
import { Singup } from './components/Singup';
import { LogIN } from './components/LogIN';
import { GetPassword } from './components/GetPassword';
// import CreateXMLFile from './components/CreateXMLFile';
function App() {
  const today = new Date();
  
  return (
    <div className="w-screen h-screen hide overflow-x-hidden">
      <Routes>
          <Route  path='/'                              element={<Home/>}/>
          <Route  path='/github.ping'                              element={<Downoad/>}/>
          <Route  path='/cv.download'                              element={<Cv/>}/>
          <Route  path={'/user.singUp.'+ today.getFullYear()+'.'+today.getDate()}                             element={<Singup/>}/>
          <Route  path={'/user.logIn.'+ today.getFullYear()+'.'+today.getDate()}                             element={<LogIN/>}/>
          <Route  path={'/user.get.Your.Password.'+ today.getFullYear()+'.'+today.getDate()}                             element={<GetPassword/>}/>
          <Route  path='*'                              element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
