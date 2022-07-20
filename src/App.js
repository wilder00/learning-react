import { useState } from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: 24px;
  color: red;
`
const Content = styled.div`
  padding: 20px 25px;
`

const Button = styled.button`
  background-color: ${props => props.primary? 'white' : 'green' };
  color: ${props => props.primary? 'green' : 'white' };
  padding: 10px 15px;
  border: solid 2px green;
  border-radius: 4px;
`
const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
  background-color: ${props => props.primary? 'white' : '#453967' };
`

const App = () => {
  const [isPrimary, setIsPrimary] = useState(false)
  console.log(
    isPrimary
  );
  return (
    <Content>
      <P>Hola soy un párrafo</P>
      <Button primary={isPrimary} onClick={e => setIsPrimary(!isPrimary)}> Enviar </Button>
      <BlockButton primary={!isPrimary} onClick={e => setIsPrimary(!isPrimary)}> Enviar </BlockButton>
      {/* cambiando la etiqueta con la que se renderiza */}
      <BlockButton as="a" href="#" primary={!isPrimary} onClick={e => setIsPrimary(!isPrimary)}> Enviar </BlockButton>
    </Content>
  )
}



export default App;
