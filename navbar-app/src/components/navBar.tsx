import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  List,
  ListItem,
} from "@chakra-ui/react";

const NavBar = () => {
  const handleDashboardClick = () => {
    window.history.pushState(null, null, "/dashboard");
  };

  const handleClustersClick = (path) => {
    window.history.pushState(null, null, `/infra/${path}`);
  };

  return (
    <Box>
      <Box height={"80%"} w={"20%"} border={"1px"} borderColor={"gray.200"}>
        <Box
          _hover={{ cursor: "pointer" }}
          onClick={handleDashboardClick}
          ml={"10px"}
          p={2}
        >
          Dashboard
        </Box>
        <Box>
          <Accordion>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Infrastructure
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <List _hover={{ cursor: "pointer" }}>
                  <ListItem onClick={() => handleClustersClick("clusters")}>
                    Clusters
                  </ListItem>
                  <ListItem onClick={() => handleClustersClick("storage")}>
                    Storage
                  </ListItem>
                  <ListItem onClick={() => handleClustersClick("network")}>
                    Networks
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
