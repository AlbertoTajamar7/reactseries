import React, { Component } from 'react'
import { BrowserRouter,Routes,Route, useParams } from 'react-router-dom'
import MenuSeries from './MenuSeries'
import Home from './Home'
import Detalles from './Detalles'
import Personajes from './Personajes'
import InsertarPersonaje from './InsertarPersonaje'
import ModificarPersonaje from './ModificarPersonaje'

export default class Router extends Component {
  render() {
    function DetallesElement(){
        let {idserie} = useParams();
        return(<Detalles idserie={idserie}/>)

    }
    function PersonaElement(){
        let {idserie} = useParams();
        return(<Personajes idserie={idserie}/>)

    }
    return (
        <BrowserRouter>
        <MenuSeries/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/detalles/:idserie' element={<DetallesElement/>}></Route>
            <Route path='/personajes/:idserie' element={<PersonaElement/>}></Route>
            <Route path='/insert/' element={<InsertarPersonaje/>}></Route>
            <Route path='/modificar/' element={<ModificarPersonaje/>}></Route>
        </Routes>
        </BrowserRouter>
    )
  }
}
