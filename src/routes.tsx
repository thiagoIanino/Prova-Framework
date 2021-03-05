import React from 'react'
import { Route, BrowserRouter} from 'react-router-dom'

import Home from './pages/Home'
import Postagens from './pages/Postagens'
import Albuns from './pages/Albuns'
import Todos from './pages/Todos'


const Routes = () =>{

    return(
        <BrowserRouter>
        <Route component={Home} path="/" exact/>
        <Route component={Postagens} path="/postagens" />
        <Route component={Albuns} path="/albuns" />
        <Route component={Todos} path="/todos" />
        </BrowserRouter>
    )
}

export default Routes