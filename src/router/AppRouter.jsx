import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  Navigate
} from "react-router-dom";
import { Header } from '../components/header/Header';
import { Main } from '../components/main/Main';
import { UserPage } from '../components/user-page/UserPage';
import { AnimatePresence } from 'framer-motion';
import { FavoritePage } from '../components/favorite-page/FavoritePage';
import { AnimateBackground } from '../components/background/AnimateBackground';

export const AppRouter = () => {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="*"component={ Main } />
        <Route exact path="/"component={ Main } />
        <Route exact path="/gallery"component={ Main } />
        <Route exact path="/gallery/favorite-page" component={ FavoritePage } / >
        <Route exact path="/gallery/user-page" component={ UserPage } />
        {/* <Route path='*' component={ <Redirect to="/gallery"  />}/> */}
      </Switch>
    </Router>
    <AnimateBackground />
    </>
  )
}
