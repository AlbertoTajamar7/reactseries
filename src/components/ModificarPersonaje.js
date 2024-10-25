import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'

export default class ModificarPersonaje extends Component {
    cajaSeries = React.createRef();
    cajaPersonaje = React.createRef();
    cajaidserie = React.createRef();
    state = {
        series:[],
        personajes:[],
        personaje:[]

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
    loadPersonajes=()=>{
        let idserie = this.cajaSeries.current.value;
        let request = "api/Series/PersonajesSerie/"+idserie;
        let url = Global.api+request
        axios.get(url).then((response)=>{
            this.setState ({
                personajes:response.data
            })
            console.log(response.data)
        })
    }
    loadPersonaje=()=>{
        let idPersonaje = this.cajaPersonaje.current.value;
        let request = "api/Personajes/"+idPersonaje
        let url = Global.api+request
        console.log(url)
        axios.get(url).then((response)=>{
            this.setState({
                personaje:response.data
            })

        })

    }
    update=()=>{
        let idserie = this.cajaidserie.current.value;
        let idPersonaje = this.cajaPersonaje.current.value;
        console.log(idserie+""+ idPersonaje)
        let request = "api/Personajes/"+idPersonaje+"/"+idserie
        let url = Global.api+request 
        axios.put(url).then(response=>{
            alert("modificado")
            this.loadPersonaje()
        })
    }

    componentDidMount=()=>{
        this.loadSeries();
    }
  render() {
    return (
      <div>
        <h1>Personajes y series</h1>
        <label>Serie</label><br/>
        <select ref={this.cajaSeries} onChange={this.loadPersonajes}>
        {
        this.state.series.map((serie,index)=>{
            return(
                <option key={index} value={serie.idSerie}>{serie.nombre}</option>
                )
            })
            }
        </select><br/>
        <label>Personaje</label><br/>
        <select ref={this.cajaPersonaje} onChange={this.loadPersonaje}>
        {
        this.state.personajes.map((personaje,index)=>{
            return(
                <option key={index} value={personaje.idPersonaje}>{personaje.nombre}</option>
                )
            })
            }
        </select><br/>
                {
                   this.state.personaje &&(
                    <form>
                      <img src={this.state.personaje.imagen} width='60%'/><br/>
                      <input type='text'placeholder='Introduce el id de' ref={this.cajaidserie}/>
                    </form>
                   )
                    
                }
            <button onClick={this.update}>Update</button>
      </div>
    )
  }
}
