import * as React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import { GlobalStyles, MainWrapper } from 'components/elements'
import Home from 'pages'
import Game from 'pages/game'
import History from 'pages/history'
import configureStore from 'configureStore'

const store = configureStore()

render(
    <Provider store={store}>
        <Router>
            <MainWrapper>
                <GlobalStyles />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/game" component={Game} />
                    <Route exact path="/history" component={History} />
                </Switch>
            </MainWrapper>
        </Router>
    </Provider>,
    document.getElementById('root')
)
