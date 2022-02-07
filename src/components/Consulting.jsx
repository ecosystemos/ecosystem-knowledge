import React from 'react';
import {Flex,Box,Text,Link} from '@chakra-ui/react';
import ConsultingCard from './ConsultingCard';

const Consulting = () => {
  return (


    <Flex flexDirection={'column'}>

        <Text>Consulting that meets your needs</Text>
        <Text>Not sure which consulting package is right for you? We’ll help you choose</Text>
        
        <Flex flexDirection={'row'}>
             <Link> Hourly</Link>
             <Link> Hourly</Link>
             <Link> Hourly</Link>
             <Link> Hourly</Link>
             <Link> Hourly</Link>
             <Link> Hourly</Link>
        
        
        </Flex>

        <Flex flexDirection={'row'}> 
            <ConsultingCard> </ConsultingCard>  
            <ConsultingCard> </ConsultingCard>
        </Flex>







    </Flex>






  );
};

export default Consulting;
