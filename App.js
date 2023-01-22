import { Tabs, TabList, TabPanels, Tab, TabPanel,Image,Text} from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

function App() {
  return (
    <>
    <Tabs defaultIndex={1}>
  <TabPanels>
    <TabPanel>
      <Image
        boxSize='200px'
        fit='cover'
        src='https://www.freepnglogos.com/uploads/naruto-png/image-kunai-naruto-fictional-battle-omniverse-23.png'
      />
    </TabPanel>
    <TabPanel>
      <Image
        boxSize='200px'
        fit='cover'
        src="https://as1.ftcdn.net/v2/jpg/05/52/86/88/1000_F_552868888_JBxH1l4VIikDt7xpN0QIUCrtMhpeMozo.jpg"
      />
    </TabPanel>
  </TabPanels>
  <TabList>
    <Tab>Man</Tab>
    <Tab>Women</Tab>
  </TabList>
</Tabs>


      <Tabs>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>Match your Habits</p>
    </TabPanel>
    <TabPanel>
      <p>Match your Intrests</p>
    </TabPanel>
    <TabPanel>
      <p>Match your Future</p>
    </TabPanel>
  </TabPanels>
</Tabs>

<Box
  backgroundImage="url('./bgprom.webp')"
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
/>
<Card>
  <CardBody>
    <Text>View a summary of all your customers over the last month.</Text>
  </CardBody>
</Card>
    </>
  );
}




export default App;
