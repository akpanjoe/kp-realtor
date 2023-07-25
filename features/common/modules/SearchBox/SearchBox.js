import { Button, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';

const SearchBox = ({ onSearch }) => {

    const [query, setQuery] = useState('');

    const handleChange = (e) => {
      setQuery(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(query);
    };
    return (
        <Flex>
            <Input type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search"
        variant="filled"
        mr={2}
/>
        <Button type="submit">Search</Button>
        </Flex>
     );
}
 
export default SearchBox;