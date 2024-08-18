import React from 'react';
import Header from '../src/components/Header';
import './App.css'


import Footer from '../src/components/Footer';
import AppRouter from '../src/components/Router';


const App = () => {
  return (
    <div>
      <div className="App">
        <Header />
            <AppRouter />
           
        </div>
    </div>
  );
};

const mainStyle = {
  padding: '20px',
  backgroundColor: '#e9ecef'
};

export default App;