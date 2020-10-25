import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Layout from './layouts/Layout'
import Login from './screens/Login'

function App() {
  return (
    <div className="App">
    <Layout>
      <Route path='/login'>
      <Login />
      </Route>
    </Layout>
    </div>
  );
}

export default App;
