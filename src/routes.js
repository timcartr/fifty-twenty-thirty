import React from 'react'
import { Switch, Route } from 'react-router-dom'

// IMPORT PAGES
import Home from './components/home'
import EssentialExpenses from './components/essentialExpenses'

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/essentialexpenses' component={EssentialExpenses} />
  </Switch>
)