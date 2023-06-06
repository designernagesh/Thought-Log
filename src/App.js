import { Container, Box, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import LogForm from './components/LogForm';
import Logist from './components/LogList';

function App() {
  const currentTime = () => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const time = `@ ${h}:${m}`;
    return time; 
  }

  const [ inputText, setInputText ] = useState("");
  const [ thoughts, setThoughts ] = useState([]);
  const [ error, setError ] = useState("");

  const changeHandler = (e) => {
    setInputText(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if( inputText.length >= 10 ) {
      thoughts.push(`${inputText} ${currentTime()}`);
    }

    setThoughts(thoughts);
    setInputText("");
    setError(validation())
  }

  const validation = () => {
    let errorText = "";
    if(!inputText) {
      errorText = "Please, put your thought."
    } else if(inputText.length < 10) {
      errorText = "Thought can not be 10 characters less."
    }
    return errorText;
  }

  return (
    <>
    <Container maxW='3xl' mt='30px'>
      <Box boxShadow='lg' p='6' rounded='md' bg='white'>
        <Heading as='h1' fontSize='72px' mb='20px' color='#ec1839' align='center'>
          Thought Log
        </Heading>
        <LogForm error={error} inputText={inputText} changeHandler={changeHandler} submitHandler={submitHandler} />
        <Logist thoughts={thoughts} />
      </Box>
    </Container>
    </>
  );
}

export default App;
