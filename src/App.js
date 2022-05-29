import React from 'react'
import { Switch } from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AllCreators from './AllCreators'
import Donations from './Donations'
import TModal from './TModal'

function App() {


 

  return (
    <>

    
      <BrowserRouter>
        <Switch>
          <Route exact path= "/" component ={AllCreators} /> 
          <Route exact path = "/donations" component = {Donations} />
          <Route exact path = "/submit" component={TModal} />
        </Switch>
      </BrowserRouter>

      {/* data */}

     
    </>
  )
}

export default App
