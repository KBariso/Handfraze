import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import LoginForm from './components/LoginFormModal/LoginForm';
// import SignUpForm from './components/SignupFormModal/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
// import User from './components/User';
import { authenticate } from './store/session';
import AllPhrases from './components/AllPhrases';
import SinglePhrasePage from './components/SinglePhrasePage';
import CreateNewPhrase from './components/CreateNewPhrase';
import EditPhrase from './components/EditPhrase';
import PhraseComments from './components/AllPhraseComments';

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
        <Route path='/' exact={true} >
          <h1>My Home Page</h1>
          <AllPhrases />
        </Route>
        <Route path='/phrases/new' exact={true}>
          <CreateNewPhrase />
        </Route>
        <Route path='/phrases/:phraseId' exact={true}>
          <SinglePhrasePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
