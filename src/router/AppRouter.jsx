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

export const AppRouter = () => {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
      <Header />
      <Switch>
        <Route>
        <Route exact path="/"component={ Main }>
        </Route>
        <Route exact path="/user-page" component={ UserPage }>
        </Route>
        </Route>
      </Switch>
      </AnimatePresence>
    </Router>
  )
}
