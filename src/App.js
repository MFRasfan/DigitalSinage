// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './App.css';
import logo2 from './images/slide_2.jpg';
import logo3 from './images/slide_3.jpg';
import logo4 from './images/slide_4.jpg';

 
// const slideImages = [
//   'images/slide_2.jpg',
//   'images/slide_3.jpg',
//   'images/slide_4.jpg'
// ];
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        n
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${logo2})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${logo3})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${logo4})`}}>
              
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;