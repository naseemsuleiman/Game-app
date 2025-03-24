import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Explore from "./Components/Explore";
import Nav from "./Components/Nav";
import Action from "./Components/Action";
import Code from "./Components/Code";
import Walking from "./Components/Walking";
import Metal from "./Components/Metal";
import Call from "./Components/Call";

import Among from "./Components/Among";
import Adventure from "./Components/Adventure";
import Space from "./Components/space";
import Operation from "./Components/Operation";
import Destiny from "./Components/Destiny";
import Racing from "./Components/Racing";
import Asphat from "./Components/Asphat";
import Nitro from "./Components/Nitro";
import City from "./Components/City";
import Mines from "./Components/Mines";



function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} >
        <Route path='action' element={<Action/>}> 
        <Route path='code' element={<Code/>}/>
        <Route path='walking' element={<Walking/>}/>
        <Route path='metal' element={<Metal/>}/>
        <Route path='call' element={<Call/>}/>
        <Route path='mines' element={<Mines/>}/>
        <Route path='among' element={<Among/>}/>
        </Route>
        <Route path='adventure' element={<Adventure/>}>
        <Route path='space' element={<Space/>}/>
        <Route path='operation' element={<Operation/>}/>
        <Route path='destiny' element={<Destiny/>}/>
        </Route>
        <Route path='racing' element={<Racing/>}>
        <Route path='asphat' element={<Asphat/>}/>
        <Route path="nitro" element={<Nitro/>}/>
        <Route path="city" element={<City/>}/>
        </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

