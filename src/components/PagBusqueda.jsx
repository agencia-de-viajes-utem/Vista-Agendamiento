import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import Filtros from './Filtros';
import SortBy from './SortBy'
import "../App.css"
import "../styles/PagBusqueda.css";
import CurrentSearch from './CurrentSearch.jsx'


function PagBusqueda() {
  const location = useLocation();
  const {paquetes} = location.state;
  const [paquetesFiltrados, setPaquetesFiltrados] = useState(paquetes);

  const filtrarPaquetes = (filtro) => {
    const paquetesFiltrados = paquetes.filter(filtro);
    setPaquetesFiltrados(paquetesFiltrados);
  };

  return (
    <div className="PagBusqueda">
      <div className="sidebar">
        <Filtros filtrarPaquetes={filtrarPaquetes} />
      </div>
      <div className="body">
        <h1>Paquetes</h1>
        <ul>
          {paquetesFiltrados.map((paquete) => (
            <li key={paquete.id_paquete}>
              <h2>{paquete.nombre_paquete}</h2>
              <p>Descripción: {paquete.desc_paquete}</p>
              <p>Detalle: {paquete.detalle_paquete}</p>
              <p>Fecha de inicio: {paquete.fechaInit}</p>
              <p>Fecha de fin: {paquete.fechaFin}</p>
              <p>Cantidad de días: {paquete.cant_dias}</p>
              <p>Precio del viaje: ${paquete.pr_viaje}</p>
              <p>Precio por noche: ${paquete.pr_noche}</p>
              <p>Precio total: ${paquete.pr_total}</p>
              <p>Ciudad de origen: {paquete.ciudad_origen}</p>
              <p>Ciudad de destino: {paquete.ciudad_destino}</p>
              <p>Nombre del hotel: {paquete.nombre_hotel}</p>
              <p>Descripción del hotel: {paquete.desc_hh}</p>
              <p>Servicios del hotel: {paquete.servicios_hh}</p>
            </li>
          ))}
        </ul>
        <SortBy/>
      </div>
    </div>
  );
}

export default PagBusqueda;