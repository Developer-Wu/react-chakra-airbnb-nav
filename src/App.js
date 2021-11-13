import logo from "./logo.svg";
import "./App.css";
import {
  Heading,
  Text,
  HStack,
  Button,
  Flex,
  Box,
  Icon,
  VStack,
  Input,
  keyframes,
  Divider,
} from "@chakra-ui/react";
import { FaAirbnb } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import {
  BsGlobe,
  BsPersonFill,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import useWindowSize from "./hooks/WindowSize";
import DesktopNav from "./DesktopNav";

function App() {
  const { width, height } = useWindowSize();

  const [locSearch, setLocSearchActive] = useState(false);
  console.log(width);
  const searchBar = useRef(null);

  function handleOnClickSearch() {
    setLocSearchActive(true);
    searchBar.current.focus();
  }

  function closeSearch(event) {
    if (
      (searchBoxRef.current &&
        searchBoxRef.current?.contains(event.target) &&
        expSearchBoxRef &&
        !expSearchBoxRef.current?.contains(event.target)) ||
      (staySearchBoxRef && !staySearchBoxRef.current?.contains(event.target))
    ) {
      setExpLocationActive("");
      setStayActive("");
    }
    if (searchBoxRef.current && !searchBoxRef.current?.contains(event.target)) {
      setSearchActive(false);
    }
  }

  const [expLocationActive, setExpLocationActive] = useState("");
  const [stayActive, setStayActive] = useState("");

  const [searchActive, setSearchActive] = useState(false);

  const searchBoxRef = useRef(null);
  const expSearchBoxRef = useRef(null);
  const staySearchBoxRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", closeSearch, true);
    return () => {
      document.removeEventListener("click", closeSearch, true);
    };
  });

  return width > 721 ? (
    <DesktopNav searchActive={searchActive} setSearchActive={setSearchActive} />
  ) : (
    <Box
      w="100%"
      d="flex"
      justifyContent="center"
      boxShadow="rgb(0 0 0 / 8%) 0px 1px 12px"
      h="80px"
      pos="fixed"
      top="0"
      left="0"
      px="25px"
      py="13px"
      transition="all 125ms"
    >
      <Box
        onClick={setSearchActive}
        as="button"
        d="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="full"
        w="100%"
        bgColor="rgb(247, 247, 247) !important"
      >
        <HStack spacing="5px">
          <Icon fontSize="20px" color="rgb(255, 56, 92)" as={AiOutlineSearch} />
          <Text fontWeight="600">Where are you going?</Text>
        </HStack>
      </Box>

      <Box
        paddingTop="50px"
        px="30px"
        transition="all 0.6s"
        visibility={searchActive ? "visible" : "hidden"}
        opacity={searchActive ? 1 : 0}
        bgColor="white"
        top={searchActive ? 0 : "100%"}
        left="0"
        w="100vw"
        h="100vh"
        pos="fixed"
      >
        <Flex pos="relative" alignItems="center" justifyContent="space-between">
          <Icon
            _hover={{ cursor: "pointer" }}
            onClick={() => setSearchActive(false)}
            as={BsChevronLeft}
          />

          <Box pos="relative" w="100%">
            <Input
              ref={searchBar}
              marginLeft="25px"
              w="100%"
              border="none"
              placeholder="Where are you going?"
              _focus={{}}
            />
            {!locSearch && (
              <Box
                onClick={() => handleOnClickSearch()}
                pos="absolute"
                bgColor="#FFF"
                w="100%"
                d="flex"
                top="8px"
                left="0"
                justifyContent="center"
              >
                <HStack w="auto" alignSelf="center" spacing="5px">
                  <Icon
                    fontSize="20px"
                    color="rgb(255, 56, 92)"
                    as={AiOutlineSearch}
                  />
                  <Text fontWeight="600">Where are you going?</Text>
                </HStack>
              </Box>
            )}
          </Box>
        </Flex>
        <VStack mt="25px" spacing="20px" w="100%" alignItems="flex-start">
          <Text fontWeight="600" fontSize="13px">
            GO ANYWHERE, ANYTIME
          </Text>
          <Box
            w="100%"
            border="1px solid rgb(221, 221, 221)"
            px="20px"
            borderRadius="full"
            py="13px"
            fontWeight="700"
            boxShadow="rgb(0 0 0 / 12%) 0px 6px 16px"
            fontSize="19px"
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Text
                bg="linear-gradient(90deg, rgb(111, 1, 156) 0%, rgb(198, 1, 126) 135.12%)"
                bgClip="text"
              >
                I'm flexible
              </Text>
              <Icon
                color="rgb(111, 1, 156)"
                fontSize="25px"
                as={BsChevronRight}
              />
            </Flex>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

export default App;
