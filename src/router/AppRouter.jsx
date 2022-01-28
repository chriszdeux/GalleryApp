import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
        <Route exact path="/"component={ Main } />
        <Route exact path="/favorite-page" component={ FavoritePage } / >
        <Route exact path="/user-page" component={ UserPage } />
        <Route exact path="/background" component={ AnimateBackground } />
      </Switch>
    </Router>
    <AnimateBackground />
    </>
  )
}
