import { FaCheckCircle } from 'react-icons/fa';
import {
    List,
    ListItem,
    ListIcon
  } from '@chakra-ui/react'

const Logist = ({thoughts}) => {
    return (
        <List spacing={3}>
          {thoughts.map( (thought, i) => {
            return (
                <ListItem key={i}>
                    <ListIcon as={FaCheckCircle} color='blue.500' />
                    { thought }
                </ListItem>
            )
          })}
        </List>
    )
}

export default Logist;