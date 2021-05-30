import React from 'react'
import App from './App'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import District from './Components/District/District'
import Pincode from './Components/Pincode/Pincode'
import SelectionScreen from './Components/SelectionScreen/SelectionScreen'
const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/"><App/></Route>
                    <Route exact path="/selection"><SelectionScreen/></Route>
                    <Route exact path="/district"><District/></Route>
                    <Route exact path="/pincode"><Pincode/></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
