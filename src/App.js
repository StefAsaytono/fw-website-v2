import React, { lazy } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material'

const Home = lazy(() => import('./views/Home'))
const Table = lazy(() => import('./views/Table'))
const Ibingo2 = lazy(() => import('./views/Ibingo2'))
const Slot2 = lazy(() => import('./views/Slot2'))
const Faq = lazy(() => import('./views/Faq'))
const ResponsibleGaming = lazy(() => import('./views/ResponsibleGaming'))
const TermsAndConditions = lazy(() => import('./views/TermsAndConditions'))
const Promotions = lazy(() => import('./views/Promotions'))
const Launcher = lazy(() => import('./views/Launcher'))
const Live = lazy(() => import('./views/Live'))
const Virtual = lazy(() => import('./views/Virtual'))
const BetandWin = lazy(() => import('./views/BetandWin'))

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
    ]
  },
  palette: {
    indigo: {
      main: 'rgb(55 48 163)'
    },
    slate: {
      main: 'rgb(2 6 23)'
    },
    orange: {
      main: 'rgb(249 115 22)'
    },
    gray: {
      main: 'rgb(209 213 219)'
    },
    gray400: {
      main: '#9ca3af'
    }
  },
})

function App() {  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/home" component={Home} /> */}
          <Route exact path="/table" component={Table} />
          <Route exact path="/ibingo" component={Ibingo2} />
          <Route exact path="/slot" component={Slot2} />
          <Route exact path="/launcher" component={Launcher} />
          <Route exact path="/promotions" component={Promotions} />
          <Route exact path="/live" component={Live} />
          <Route exact path="/virtual" component={Virtual} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/responsible-gaming" component={ResponsibleGaming} />
          <Route exact path="/terms-and-conditions" component={TermsAndConditions} />
          <Route exact path="/betandwin" component={BetandWin} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
