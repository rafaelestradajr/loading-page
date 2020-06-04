import React from 'react';
import NavigationBar from './navigation';
import './App.css';
import Posts from './posts';
import ContactForm from './contact';

function App() {

  return (
    <div className="App">
      <NavigationBar />
      
      <div class="carousel-container"></div>
      <Posts />
      <ContactForm />
      
    </div>
  );
}

export default App;
