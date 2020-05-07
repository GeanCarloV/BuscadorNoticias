import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'; 
import Formulario from './components/Formulario'; 
import ListadoNoticias from './components/ListadoNoticias'; 

function App() {

  //definer la categoria y noticias
  const [categoria, guardarCategoria] = useState('')
  const [noticias, guardarNoticas] = useState([])

  useEffect(() => {
    const consultarApi = async () => { 
      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=c92c227960de42fdad952f478129122f`
      const respuesta = await fetch(url); 
      const noticias = await respuesta.json(); 
      guardarNoticas(noticias.articles)
    };
    consultarApi();
  }, [categoria])


  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />
      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
