import { Box, IconButton, useDisclosure} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
      onOpen();
    } else {
      setIsVisible(false);
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box display={isVisible ? 'block' : 'none'} position="fixed" bottom="20px" right="20px" zIndex="9999">
        <IconButton aria-label=""
        icon={<FaArrowUp />}
        size="lg"
        onClick={scrollToTop}
        bgColor="orange.600"
        color="white"
        _hover={{ bgColor: 'orange.900' }}
        isOpen={isOpen}/>
    </Box>
  );
};

export default ToTop;