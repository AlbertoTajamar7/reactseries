import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'

export default class InsertarPersonaje extends Component {
    state = {
        series:[]

    }
    cajaImagen = React.createRef();
    cajaNombre = React.createRef();
    cajaSeries = React.createRef();
    InsertarPersonaje=(e)=>{
        e.preventDefault();
        let request ="api/Personajes"
        let url = Global.api+request
        let nombre =this.cajaNombre.current.value;
        let img =this.cajaImagen.current.value;
        let idS = parseInt(this.cajaSeries.current.value);
         console.log(nombre+idS)
        let Personaje={
            idPersonaje:1,
            nombre:nombre,
            imagen:img,
            idSerie:idS
        }
        axios.post(url,Personaje).then(response=>{
            console.log("leyendo insert de personajes")
            alert("personaje insertado"+Personaje.nombre)
        })
    }
    loadSeries=()=>{
        let request = "api/Series"
        let url = Global.api+request
        axios.get(url).then(response=>{
            this.setState({
              series:response.data  
            })
            
        })
    }

    componentDidMount=()=>{
        this.loadSeries();
    }
  render() {
    return (
      <div>
        <label>Nombre</label><br/>
        <input type='text' ref={this.cajaNombre}/><br/>
        <label>Imagen</label><br/>
        <input type='text' ref={this.cajaImagen} /><br/>
        <select ref={this.cajaSeries}>
            {
                this.state.series.map((serie,index)=>{
                    return(
                        <option key={index} value={serie.idSerie}>{serie.nombre}</option>
                    )
                })
            }
        </select><br/><br/>
        <button onClick={this.InsertarPersonaje}>Insertar</button>
        
      </div>
    )
  }
}
