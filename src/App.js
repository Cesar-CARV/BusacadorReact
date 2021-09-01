import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import CardContaner from './components/CardContainer/CardContainer';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import VerMasBoton from './components/VerMasBoton';

function App() {
  
  const [loader, setloader] = useState(false);
  const [busqueda, setBusqueda] = useState("dog");
  const [imagenes, setImagenes] = useState([]);
  const [numPagina, setNumPagina] = useState(1);
  const [modalData, setModalData] = useState(null);
  const [totalHits, setTotalHits] = useState(0);
  const [filters, setFilters] = useState(
    {
      imageType: "all", // all, photo, illustration, vector
      orientation:"all", // all, horizontal, vertical
      category: "", // backgrounds, fashion, nature, science, education, feelings, health, people, religion, places, animals, industry, computer, food, sports, transportation, travel, buildings, business, music
      color: "", // grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown" 
    });

  const apiTest = async (param) => {
    let API_KEY = '20079417-b048d94b664937dffd0f387e3';
    let URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(param)+"&per_page="+24+"&page=" + numPagina +
              `&image_type=${filters.imageType}&orientation=${filters.orientation}&category=${filters.category}&colors=${filters.color}`;
    // console.log(URL);
    let peticion = await fetch(URL);
    let res = await peticion.json();
    // console.log(res);
    return res;
  }

  const buscar = () => {
    // console.log("loader...");
    setModalData(null);
    setloader(true);
    const test = async () => {
      let publicaciones = await apiTest(busqueda);
      // console.log(publicaciones.hits);
      setTotalHits(publicaciones.totalHits);

      if (imagenes.length === 0){
        // console.log("no hay imagenes")
        setImagenes(publicaciones.hits);
      }
      else {
        // console.log("ya tiene imagenes");
        setImagenes([...imagenes, ...publicaciones.hits]);
      }

      // console.log(imagenes);
      
      setloader(false);
    }
    test();
    // console.log("pagina: ",numPagina);
  }

  const VerMasBotonClick = () => {
    setNumPagina(numPagina + 1);
  }
  
  const realizaBusqueda = (param) =>{
    setImagenes([]);
    setBusqueda(param);
    setNumPagina(1);
  }

  const informacionModal = (data) => {
    setModalData(data);
  }

  const cambiarFiltros = (target) => {
    setImagenes([]);
    setFilters(prevFilters => ({...prevFilters, [target.name] : target.value}));
  }

  useEffect( ()=> {
    buscar();
    // console.log(filters);
  },[busqueda, numPagina, filters]);
  
  return (
    <div className="App">
      <Header buscar={realizaBusqueda} cambiarFiltros={cambiarFiltros}/>
      <div>
        <CardContaner imagenes={imagenes} cardImgClick={informacionModal}/>
        {
          loader ? <Loader/> : ""
        }
        <div>
          {
            totalHits / imagenes.length >  1 && loader === false ?
            <VerMasBoton handleClick={VerMasBotonClick}/>
            :
            ""
          }
        </div>
      </div>

      {
        modalData ? <Modal data={modalData} cerrar={informacionModal}/> : ""
      }
    </div>
  );
}

export default App;
