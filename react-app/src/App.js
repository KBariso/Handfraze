import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import LoginForm from './components/LoginFormModal/LoginForm';
// import SignUpForm from './components/SignupFormModal/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import Footer from './components/Footer';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
// import User from './components/User';
import { authenticate } from './store/session';
import AllPhrases from './components/AllPhrases';
import SinglePhrasePage from './components/SinglePhrasePage';
import CreateNewPhrase from './components/CreateNewPhrase';
import EditPhrase from './components/EditPhrase';
import PhraseComments from './components/AllPhraseComments';
import About from './components/About';
import Importance from './components/Importance';
import Learn from './components/Learn';
import Labels from './components/InfoLabels';

import './index.css'

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/home'>
          <Labels />
            <Route path='/home/about' exact={true}>
              <About />
            </Route>
            <Route path='/home/importance' exact={true}>
              <Importance />
            </Route>
            <Route path='/home/learn' exact={true}>
              <Learn />
            </Route>
          <AllPhrases />
        </Route>


        <ProtectedRoute path='/phrases/new' exact={true}>
        <Route path='/phrases/new' exact={true}>
          <CreateNewPhrase />
        </Route>
        </ProtectedRoute>
        <Route path='/phrases/:phraseId' exact={true}>
          <SinglePhrasePage />
        </Route>
        <Route>
          <div className='ErrorPage'>
            <h1 style={{color:"black"}}>Looks like theres nothing here yet!</h1>
            <p> Please redirect back to the home page.</p>
          </div>
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
