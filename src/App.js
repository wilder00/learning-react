import { useState } from "react";
import styled, { keyframes } from "styled-components";
import './App.css'

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
  transition: background-color 0.2s ease;
  &:hover{ 
    background-color: rgba(0,0,0,.3)
  }
  &.secondary{
    background-color: #a49876;
  }
`

const girar = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`

const Rotar = styled.div`
  animation: ${girar} 2s ease infinite;
  display: inline-block;
`

const Link = ({ className, ...props}) => {
  return <a className={className} {...props}></a>
}

const StyledLink = styled(Link)`
  color: blue;
`

const Input = styled.input.attrs(props => ({
  type: 'text',
  color: props.color || 'red'
}))`
  font-size: 20px;
  border: 10px solid green;
  color: ${ props => props.color}
`

const Password = styled(Input).attrs({
  type: 'password'
})``


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
      <BlockButton className="secondary" as="a" href="#" primary={!isPrimary} onClick={e => setIsPrimary(!isPrimary)}> Enviar </BlockButton>
      <Link className="link">link</Link>
      <StyledLink>Link con estilo</StyledLink>
      <Input></Input>
      <Password></Password>
      <br/>
      <Rotar>asdf</Rotar>
    </Content>
  )
}



export default App;
