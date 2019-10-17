import React from 'react';
import './App.css';
import HeaderComponent from './Header/header.component';
import FormComponent from './FormComponent/BodyForm/form.component';

const App: React.FC = () => {
  return (
    <div className="body_wrapper">
      <HeaderComponent/>
      <FormComponent/>
    </div>
  );
}

export default App;