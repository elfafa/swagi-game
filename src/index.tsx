import * as React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import NavTab from 'components/layout/navtab'
import { GlobalStyles } from 'components/elements'
import Home from 'pages'
import Game from 'pages/game'
import History from 'pages/history'
import configureStore from 'configureStore'

const store = configureStore()

render(
    <Provider store={store}>
        <NavTab key="nav"/>                
        <GlobalStyles />
        <Box m={4}>
            <Grid
                container
                direction="row"
                justify="center"
            >
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/game" component={Game} />
                        <Route exact path="/history" component={History} />
                    </Switch>
                </Router>
            </Grid>
        </Box>
    </Provider>,
    document.getElementById('root')
)
