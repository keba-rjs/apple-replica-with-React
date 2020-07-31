import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/header.js';
import Main from './component/Main/main.js';
import Footer from './component/Footer/footer.js';


class App extends Component {
  render (){
    return(
     <div>
       <Header/>
       <Main/>
       <Footer/>
     </div>
    );
  }
}

export default App;
