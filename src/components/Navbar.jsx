import React, { Component } from 'react'
import { Flex, TabList, Tabs, Tab, TabPanels, TabPanel } from '@chakra-ui/react'

export class Toolbar extends Component {
    render() {
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
                <Tabs variant='enclosed' bg='#0E5E81' style={{width: "100vw", height: "72px", display: 'flex', justifyContent: 'center'}}>
                <TabList borderBottom='none'>
                    <Tab _selected={{ color: 'black', bg: 'white'}} style={{padding: '0 50px 0 50px', ml: '20px', marginTop: "20px"}}>Syllabus</Tab>
                    <Tab _selected={{ color: 'black', bg: 'white'}} style={{padding: '0 50px 0 50px', ml: '20px', marginTop: "20px"}}>Q&nbsp;&#38;&nbsp;A</Tab>
                    <Tab _selected={{ color: 'black', bg: 'white'}} style={{padding: '0 50px 0 50px', ml: '20px', marginTop: "20px"}}>Notes</Tab>
                    <Tab _selected={{ color: 'black', bg: 'white'}} style={{padding: '0 50px 0 50px', ml: '20px', marginTop: "20px"}}>Take Action</Tab>
                </TabList>
                </Tabs>
          </Flex>
        )
    }
}

export default Toolbar
