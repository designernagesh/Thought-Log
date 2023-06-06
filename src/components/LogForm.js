import { InputGroup, InputRightElement, Input, Button } from '@chakra-ui/react';

const LogForm = ({inputText, submitHandler, changeHandler, error}) => {
    return (
        <form onSubmit={submitHandler} style={{ marginBottom: '15px'}}>
            <InputGroup size='lg'>
                <Input type="text" placeholder='Type the Thought' value={inputText} onChange={changeHandler} />
                <InputRightElement width='10rem'>
                    <Button colorScheme='blue' type='submit'>
                        Post the Thought
                    </Button>
                </InputRightElement>
            </InputGroup>
            {
            error &&
            <span>{error}</span>
            } 
        </form>
    )
}

export default LogForm;