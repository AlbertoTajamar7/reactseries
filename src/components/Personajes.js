import axios from 'axios';
import React, { Component } from 'react'
import Global from './Global';
import { NavLink } from 'react-router-dom';

export default class Personajes extends Component {
    state = {
        personajes: []
    };
    loadPersonajes=()=>{
        let id = this.props.idserie;
        let request = "api/Series/PersonajesSerie/"+id;
        console.log(request);
        let url = Global.api+request
        axios.get(url).then((response)=>{
            this.setState ({
                personajes:response.data
            })
            console.log(response.data)
        })


    }
    componentDidMount=()=>{
        this.loadPersonajes();
    }
  render() {
    return (
      <div>
        <h1>Personajes {}</h1>
        <button ><NavLink className="dropdown-item" to={'/detalles/'+this.props.idserie}>Volver</NavLink></button>
        <table className='table table-bordered'>
            <thead>
                <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.personajes.map((personaje,index)=>{
                        return(
                        <tr key={index}>
                            <td>{personaje.nombre}</td>
                            <td><img src={personaje.imagen} width='20%'/></td>
                        </tr> 
                        )
                        
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
