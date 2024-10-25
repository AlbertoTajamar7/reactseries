import React, { Component } from 'react'
import axios from 'axios';
import Global from './Global';
import { NavLink } from 'react-router-dom';

export default class Detalles extends Component {
    state ={
            serie:[]
        }
    loadserie=()=>{
        let id = this.props.idserie;
        let request = "api/Series/"+id;
        let url =  Global.api+request
        axios.get(url).then(response=>{
            this.setState({
                serie:response.data
            });
            this.loadserie()
            console.log(response.data);
        })
    }
    componentDidMount=()=>{
        this.loadserie();
    }

  render() {
    return (
      <div>
        <h1>Pagina detalles</h1>
        <button ><NavLink className="dropdown-item" to={'/personajes/'+this.state.serie.idSerie}>Personajes</NavLink></button>
        <table className='table table-bordered'>
            <thead>
                <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Puntuacion</th>
                        <th>año</th>   
                </tr>
            </thead>
            <tbody>
                {
                    this.state.serie &&(
                            <tr >
                              <td>{this.state.serie.nombre}</td>
                              <td><img src={this.state.serie.imagen} width='10%'/></td>   
                              <td>{this.state.serie.puntuacion}</td>  
                              <td>{this.state.serie.anyo}</td>

                            </tr>)
                }
                
            </tbody>
        </table>
      </div>
    )
  }
}
