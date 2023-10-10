import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contect';
import Error from './Error';
import TempApp from './TempApp';
import ToDoList from './ToDoList';
// import ExampleComponent from './Image';
import PPP from './PPP';
import Respocivenavbar from './Respocivenavbar';



import Restrunt from './components/Restrunt';
import Demo from './Demo';

// const Home = () => {
//   return (
//     <div>
//       <Respocivenavbar />

//       <section className='hero-section'>
//         <p>welcome to home page.</p>
//         <h1> belymon infotech.</h1>
//       </section>
//     </div>
//   )
// };
// const About = () => {
//   return (
//     <div>
//       <Respocivenavbar />

//       <section className='hero-section'>
//         <p>welcome to About page.</p>
//         <h1> belymon infotech.</h1>
//       </section>
//     </div>
//   )
// }; const Service = () => {
//   return (
//     <div>
//       <Respocivenavbar />

//       <section className='hero-section'>
//         <p>welcome to Service page.</p>
//         <h1> belymon infotech.</h1>
//       </section>
//     </div>
//   )
// };
// const contect = () => {
//   return (
//     <div>
//       <Respocivenavbar />

//       <section className='hero-section'>
//         <p>welcome to contect page.</p>
//         <h1> belymon infotech.</h1>
//       </section>
//     </div>
//   )
// };

function App() {
  return (
    <div>

      {/* <BrowserRouter> */}
      {/* <Routes>
        <Route path="/" element={<Home />} >
        <Route path="about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path='*' element={<Error />} />
       </Route>
       </Routes> */}
      {/* <Respocivenavbar /> */}
      {/* 
    </BrowserRouter> */}
      {/* 
    // <TempApp />
    // <PPP />,
    // <Image />
    // <ToDoList /> 
    // <ExampleComponent/>,
    // <PPP /> */}



      <Restrunt/>
      {/* <Demo /> */}

    </div>


  )

}

export default App;




