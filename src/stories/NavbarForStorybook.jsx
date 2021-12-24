import React from 'react'
import { Flex, TabList, Tabs, Tab} from '@chakra-ui/react'
import PropTypes from 'prop-types';



export const NavbarForStorybook = ({navbarColor,firstTab,secondTab,thirdTab,fourthTab,...args}) => {
    return (
        <Flex color='white' >
                {/* <Box bg='#0E5E81' style={{width: "100vw", height: "72px", display: 'flex', justifyContent: 'space-evenly'}} >
                    <Box  as='button'>
                    Syllabus
                    </Box>
                    <Box  as='button'>
                    Q & A
                    </Box>
                    <Box  as='button'>
                    Notes
                    </Box>
                    <Box as='button'>
                    Take Action
                    </Box>
                </Box> */}
                <Tabs variant='enclosed' bg={navbarColor} style={{width: "100vw", height: "72px", display: 'flex', justifyContent: 'center'}}>
                <TabList borderBottom='none'>
                    <Tab _selected={{ color: 'black', bg: 'white'}} style={{padding: '0 50px 0 50px', ml: '20px', marginTop: "20px"}}>{firstTab}</Tab>
                    <Tab _selected={{ color: 'black', bg: 'white'}} style={{padding: '0 50px 0 50px', ml: '20px', marginTop: "20px"}}>{secondTab}</Tab>
                    <Tab _selected={{ color: 'black', bg: 'white'}} style={{padding: '0 50px 0 50px', ml: '20px', marginTop: "20px"}}>{thirdTab}</Tab>
                    <Tab _selected={{ color: 'black', bg: 'white'}} style={{padding: '0 50px 0 50px', ml: '20px', marginTop: "20px"}}>{fourthTab}</Tab>
                </TabList>
                </Tabs>
          </Flex>
    )
}

NavbarForStorybook.propTypes = {
    navbarColor: PropTypes.string.isRequired,
    firstTab: PropTypes.string.isRequired,
    secondTab : PropTypes.string.isRequired,
    thirdTab : PropTypes.string.isRequired,
    fourthTab : PropTypes.string.isRequired,
    
};

export default NavbarForStorybook