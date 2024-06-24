import { useState, useEffect } from "react"
import axios from 'axios'
import { 
  Col, 
  Card, 
  CardBody, 
  CardFooter, 
  CardImg,
  Badge,
 } from 'reactstrap'

const PokeTarjeta = (params) => {
  const [pokemon,setPokemon] = useState([]);
  const [imagen, setImagen] = useState('');
  const [cardClass, setCardClass] = useState(' d-none');
  const [loadClass, setLoadClass] = useState('');

  useEffect(() => {
    getPokemon()
  },[])

  const getPokemon = async(o) => {
    const apiPocket = params.poke.url;
    axios.get(apiPocket).then( async(response) => {
      const respuesta = response.data;
      setPokemon(respuesta);
      setCardClass('');
      setLoadClass(' d-none');
    })
  }
  return (
    <Col sm='4' lg='3' className='mb-3'>
      <Card className={'shadow-lg border-5 border-violet-400' + loadClass}>
        <CardImg src='/public/img/loading2.gif' className="p-3"/>
      </Card>
      <Card className={'shadow-lg border-5 border-violet-400' + cardClass}>
        <CardImg src={imagen} height='150' className='p-2'/>
        <CardBody className="text-center">
          <Badge pill color='danger'># {pokemon.id}</Badge>
          <label className="uppercase text-base">{pokemon.name}</label>
        </CardBody>
        <CardFooter className="bg-violet-400">
          <a className="btn bg-slate-800 text-white "><i className="fa-solid fa-arrow-up-right-from-square"></i> Detalle</a>
        </CardFooter>
      </Card>
    </Col>
  )
}

export default PokeTarjeta