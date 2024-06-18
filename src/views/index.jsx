import { 
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupText,
  Input 
} from "reactstrap"
import axios from "axios"
import { useState, useEffect } from "react"
import PokeTarjeta from "../components/PokeTarjeta";

const index = () => {
  const [pokemones,setPokemones] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    getPokemones(offset)
  },[])

  const getPokemones = async(o) => {
    const apiPocket = 'https://pokeapi.co/api/v2/pokemon?limit='+limit+'&offset='+o;
    axios.get(apiPocket).then( async(response) => {
      const respuesta = response.data;
      setPokemones(respuesta.results);
    })
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <InputGroup className="m-3">
            <InputGroupText className="w-full gap-3 shadow">
              <i className="fa-solid fa-search"></i>
              <Input></Input>
            </InputGroupText>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        { pokemones.map((pok,i) => (
          <PokeTarjeta poke={pok} key={i} />
        ))}
      </Row>
    </Container>
  )
}

export default index