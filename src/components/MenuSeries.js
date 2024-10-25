import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class MenuSeries extends Component {
    state = {
        series:[]
    }
    loadSeries=()=>{
        let request = "api/Series"
        let url = Global.api+request
        axios.get(url).then(response=>{
            console.log("leyendo el servicio")
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
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/insert/">Nuevo Personaje</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href='/modificar/'>Modificar Personaje</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            {
                this.state.series.map((serie,index)=>{
                    return(
                        <li class="nav-link"  key={index}><NavLink  to={'/detalles/'+serie.idSerie}>{serie.nombre}</NavLink></li>
                    )
                })
            }
           
          </ul>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
