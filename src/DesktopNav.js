import "./App.css";
import { FaAirbnb } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BsGlobe, BsPersonFill } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import {
  Text,
  HStack,
  Button,
  Flex,
  Box,
  Icon,
  VStack,
  Input,
  Divider,
} from "@chakra-ui/react";

function DesktopNav({ searchActive, setSearchActive }) {
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
  const [searchTabActive, setSearchTabActive] = useState("stay");

  console.log(searchActive);

  const searchBoxRef = useRef(null);
  const expSearchBoxRef = useRef(null);
  const staySearchBoxRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", closeSearch, true);
    return () => {
      document.removeEventListener("click", closeSearch, true);
    };
  });

  return (
    <Box
      ref={searchBoxRef}
      w="100%"
      d="flex"
      justifyContent="center"
      boxShadow="rgb(0 0 0 / 8%) 0px 1px 12px"
      h={searchActive ? { base: "240px", sm: "240px", md: "185px" } : "80px"}
      pos="fixed"
      top="0"
      left="0"
      transition="all 125ms"
    >
      <Flex
        pos="relative"
        w="100%"
        mt="15px"
        maxW="1280px"
        px={{ base: "30px", sm: "30px", md: "50px", lg: "50px" }}
        justifyContent="space-between"
        alignItems="flex-start"
        h="100%"
      >
        <HStack>
          <Icon fontSize="40px" as={FaAirbnb} />
          <Text
            display={{ base: "none", sm: "none", md: "block" }}
            fontSize="23px"
            fontWeight="600"
          >
            airbnb
          </Text>
        </HStack>

        <Box
          _hover={{ cursor: "pointer" }}
          onClick={() => setSearchActive(true)}
          pos="absolute"
          left={{ base: "240px", sm: "240px", md: "50%" }}
          top="0"
          transition="-ms-transform 150ms ease 0s, -webkit-transform 150ms ease 0s, transform 150ms ease 0s, opacity 50ms ease 20ms, visibility 0ms ease 25ms !important"
          transform={
            searchActive
              ? "scale(2.5, 1.375) translate(-60px, 122px) !important"
              : "translate(-50% , 0)"
          }
          borderRadius="full"
          w="300px"
          h="45px"
          border="1px solid rgb(221, 221, 221)"
          boxShadow="rgb(0 0 0 / 8%) 0px 1px 2px, rgb(0 0 0 / 5%) 0px 4px 12px"
          visibility={{
            base: "hidden",
            xs: "hidden",
            sm: searchActive ? "hidden" : "visible",
            md: searchActive ? "hidden" : "visible",
            lg: searchActive ? "hidden" : "visible",
          }}
          pl="20px"
          d="flex"
          alignItems="center"
        >
          <Text mb="3px">start your search</Text>
          <Box
            w="33px"
            h="33px"
            pos="absolute"
            borderRadius="full"
            right="5px"
            top="50%"
            bg="rgb(255, 56, 92)"
            transform="translate(0,-50%)"
          >
            <Icon
              color="#FFF"
              fontSize="20px"
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%,-50%)"
              as={AiOutlineSearch}
            ></Icon>
          </Box>
        </Box>

        <Flex
          pos="absolute"
          left="50%"
          top={{ base: "50px", sm: "50px", md: "0" }}
          transformOrigin="-50% 60px  !important"
          transform={
            searchActive
              ? "translate(-50%)"
              : "scale(0.4, 0.727273) translate(-50%, -100px)"
          }
          h="45px"
          justifyContent="space-around"
          alignItems="center"
          visibility={searchActive ? "visible" : "hidden"}
          transition="-ms-transform 150ms ease 0s, -webkit-transform 150ms ease 0s, transform 150ms ease 0s, opacity 50ms ease 20ms, visibility 0ms ease 25ms !important"
          transitionDelay="0s, 0s, 0s, 20ms, 25ms !important"
          w="300px"
        >
          <Box
            _hover={{ cursor: "pointer" }}
            onClick={() => setSearchTabActive("stay")}
            pos="relative"
            _after={
              searchTabActive === "stay" && {
                content: `""`,
                pos: "absolute",
                bottom: "-15px",
                left: "50%",
                transform: "translate(-50%,0)",
                w: "20px",
                border: "1px solid black",
                bgColor: "#000",
              }
            }
          >
            Places to Stay
          </Box>
          <Box
            _hover={{ cursor: "pointer" }}
            onClick={() => setSearchTabActive("experience")}
            pos="relative"
            _after={
              searchTabActive === "experience" && {
                content: `""`,
                pos: "absolute",
                bottom: "-15px",
                left: "50%",
                transform: "translate(-50%,0)",
                w: "20px",
                border: "1px solid black",
                bgColor: "#000",
              }
            }
          >
            Experiences
          </Box>

          {searchTabActive === "experience" ? (
            <Box
              ref={expSearchBoxRef}
              d="flex"
              flexWrap="wrap"
              borderRadius="full"
              pos="absolute"
              maxW="1000px"
              w="95vw"
              h="70px"
              bottom="-100px"
              left="50%"
              transform="translate(-50%,0)"
              border="1px solid"
              bgColor={expLocationActive === "" ? "#FFF" : "rgb(247, 247, 247)"}
              borderColor="gray.300"
            >
              <Box w="45%">
                <Box
                  onClick={() => setExpLocationActive("place")}
                  borderLeftRadius="full"
                  alignItems="center"
                  justifyContent="space-between"
                  d="flex"
                  h="100%"
                  pl="35px"
                  ml="1px"
                  pos="relative"
                  zIndex={999}
                  bgColor={
                    expLocationActive === "place" && "rgb(247, 247, 247)"
                  }
                  _hover={{
                    bgColor: `${!expLocationActive && "#FFF"}`,
                    cursor: "pointer",
                    _after: {
                      boxShadow: `${
                        expLocationActive === "place" &&
                        "rgb(0 0 0 / 20%) 0px 6px 20px !important"
                      }`,
                      pos: "absolute",
                      content: `""`,
                      bgColor: `${
                        expLocationActive === "place"
                          ? "#FFF"
                          : "rgb(235, 235, 235)"
                      }`,
                      w: "100%",
                      h: "100%",
                      top: 0,
                      borderRadius: "full",
                      left: "-1px",
                    },
                  }}
                  pr="-20px"
                  _after={{
                    _focusWithin: { border: "2px solid black" },
                    boxShadow: `${
                      expLocationActive === "place" &&
                      "rgb(0 0 0 / 20%) 0px 6px 20px !important"
                    }`,
                    pos: "absolute",
                    content: `""`,
                    bgColor: `${expLocationActive === "place" && "#FFF"}`,
                    w: "100%",
                    h: "100%",
                    top: 0,
                    borderRadius: "full",
                    left: "-1px",
                  }}
                  w="100%"
                  role="group"
                >
                  <VStack
                    zIndex={999}
                    fontSize="15px"
                    spacing="-8px"
                    alignItems="start"
                  >
                    <Text fontWeight="700">Location</Text>
                    <Input
                      border=""
                      p="0"
                      _focus={{}}
                      placeholder="where are you going?"
                    />
                  </VStack>
                </Box>
              </Box>
              <Divider
                alignSelf="center"
                zIndex={-1}
                w="0"
                pos="absolute"
                left="45%"
                transform="translate(-50%)"
                borderColor="gray.400"
                h="60%"
                orientation="vertical"
              />
              <Box
                _after={{
                  boxShadow: `${
                    expLocationActive === "date" &&
                    "rgb(0 0 0 / 20%) 0px 6px 20px !important"
                  }`,
                  pos: "absolute",
                  content: `""`,
                  bgColor: `${expLocationActive === "date" && "#FFF"}`,
                  w: "100%",
                  h: "100%",
                  top: 0,
                  borderRadius: "full",
                  left: "1px",
                }}
                ml="-1px"
                pos="relative"
                _hover={{
                  bgColor: `${!expLocationActive && "#FFF"}`,
                  cursor: "pointer",
                  _after: {
                    boxShadow: `${
                      expLocationActive === "date" &&
                      "rgb(0 0 0 / 20%) 0px 6px 20px !important"
                    }`,
                    pos: "absolute",
                    content: `""`,
                    bgColor: `${
                      expLocationActive === "date" ? "" : "rgb(235, 235, 235)"
                    }`,
                    w: "100%",
                    h: "100%",
                    top: 0,
                    borderRadius: "full",
                    left: "1px",
                  },
                }}
                borderRightRadius="full"
                bgColor={expLocationActive === "date" && "rgb(247, 247, 247)"}
                zIndex={expLocationActive === "date" && 999}
                alignItems="center"
                d="flex"
                w="55%"
                pl="35px"
                pr="10px"
                justifyContent="space-between"
                onClick={() => setExpLocationActive("date")}
              >
                <VStack
                  zIndex={999}
                  w="80%"
                  fontSize="15px"
                  spacing="0px"
                  alignItems="start"
                >
                  <Text fontWeight="700">Date</Text>
                  <Text _hover={{ cursor: "pointer" }} border="" p="0" w="100%">
                    Add when you want to go
                  </Text>
                </VStack>
                <Box
                  zIndex={998}
                  bg="rgb(255, 56, 92)"
                  py="10px"
                  px="17px"
                  borderRadius="full"
                  w="100%"
                  h="80%"
                  d="flex"
                  alignItems="center"
                  transition="max-width 0.2s cubic-bezier(0.35, 0, 0.65, 1) 0s !important"
                  maxW={!expLocationActive ? "55px" : "120px"}
                >
                  <HStack color="#FFF">
                    <Icon fontSize="22px" as={AiOutlineSearch} />
                    <Text
                      visibility={!expLocationActive && "hidden"}
                      fontWeight="600"
                    >
                      Search
                    </Text>
                  </HStack>
                </Box>
              </Box>
            </Box>
          ) : searchTabActive === "stay" ? (
            <Box
              ref={staySearchBoxRef}
              d="flex"
              flexWrap="wrap"
              borderRadius="full"
              pos="absolute"
              maxW="1000px"
              w="95vw"
              h="70px"
              bottom="-100px"
              left="50%"
              transform="translate(-50%,0)"
              border="1px solid"
              bgColor={stayActive && "rgb(247, 247, 247)"}
              borderColor="gray.300"
            >
              <Box w="30%">
                <Box
                  zIndex={stayActive === "place" && 999}
                  _hover={{
                    bgColor: `${
                      stayActive !== "place" && stayActive
                        ? "rgba(247,247,247)"
                        : !stayActive && "#FFF"
                    }`,
                    cursor: "pointer",
                    _after: {
                      boxShadow: `${
                        stayActive === "place" &&
                        "rgb(0 0 0 / 20%) 0px 6px 20px !important"
                      }`,
                      pos: "absolute",
                      content: `""`,
                      bgColor: `${
                        stayActive === "place" ? "#FFF" : "rgb(235, 235, 235)"
                      }`,
                      w: "100%",
                      h: "100%",
                      top: 0,
                      borderRadius: "full",
                      left: "-1px",
                    },
                  }}
                  _after={{
                    boxShadow: `${
                      stayActive === "place" &&
                      "rgb(0 0 0 / 20%) 0px 6px 20px !important"
                    }`,
                    pos: "absolute",
                    content: `""`,
                    bgColor: `${stayActive === "place" && "#FFF"}`,
                    w: "100%",
                    h: "100%",
                    top: 0,
                    borderRadius: "full",
                    left: "-1px",
                  }}
                  pos="relative"
                  onClick={() => setStayActive("place")}
                  bgColor={stayActive === "place" && "rgb(247, 247, 247)"}
                  borderLeftRadius="full"
                  alignItems="center"
                  d="flex"
                  h="100%"
                  w="100%"
                  ml="1px"
                  alignSelf="flex-start"
                  px="35px"
                >
                  <VStack
                    zIndex={999}
                    fontSize="15px"
                    spacing="-8px"
                    alignItems="start"
                  >
                    <Text fontWeight="700">Location</Text>
                    <Input
                      border=""
                      p="0"
                      _focus={{}}
                      placeholder="where are you going?"
                    />
                  </VStack>
                </Box>
              </Box>
              <Divider
                alignSelf="center"
                zIndex={-1}
                w="0"
                pos="absolute"
                left="30%"
                transform="translate(-50%)"
                borderColor="gray.400"
                h="60%"
                orientation="vertical"
              />
              <Box w="20%">
                <Box
                  h="100%"
                  pos="relative"
                  _hover={{
                    bgColor: `${
                      stayActive !== "check-in" && stayActive
                        ? "rgba(247,247,247)"
                        : !stayActive && "#FFF"
                    }`,
                    cursor: "pointer",
                    _after: {
                      boxShadow: `${
                        stayActive === "check-in" &&
                        "rgb(0 0 0 / 20%) 0px 6px 20px !important"
                      }`,
                      pos: "absolute",
                      content: `""`,
                      bgColor: `${
                        stayActive === "check-in"
                          ? "#FFF"
                          : "rgb(235, 235, 235)"
                      }`,
                      w: "100%",
                      h: "100%",
                      top: 0,
                      borderRadius: "full",
                      left: "-1px",
                    },
                  }}
                  _after={{
                    boxShadow: `${
                      stayActive === "check-in" &&
                      "rgb(0 0 0 / 20%) 0px 6px 20px !important"
                    }`,
                    pos: "absolute",
                    content: `""`,
                    bgColor: `${stayActive === "check-in" && "#FFF"}`,
                    w: "100%",
                    h: "100%",
                    top: 0,
                    borderRadius: "full",
                    left: "-1px",
                  }}
                  onClick={() => setStayActive("check-in")}
                  bgColor={stayActive === "check-in" && "rgb(247, 247, 247)"}
                  _focusWithin={{ border: "2px solid black" }}
                  alignItems="center"
                  d="flex"
                  zIndex={stayActive === "check-in" && 999}
                  w="calc(100% + 3px)"
                  mx="-1px"
                  px="35px"
                >
                  <VStack
                    zIndex={999}
                    fontSize="15px"
                    spacing="0px"
                    alignItems="start"
                  >
                    <Text fontWeight="700">Check in</Text>
                    <Text border="" p="0">
                      Add dates
                    </Text>
                  </VStack>
                </Box>
              </Box>
              <Divider
                alignSelf="center"
                zIndex={-1}
                w="0"
                pos="absolute"
                left="50%"
                transform="translate(-50%)"
                borderColor="gray.400"
                h="60%"
                orientation="vertical"
              />
              <Box w="20%">
                <Box
                  zIndex={stayActive === "check-out" && 999}
                  h="100%"
                  pos="relative"
                  _hover={{
                    bgColor: `${
                      stayActive !== "check-out" && stayActive
                        ? "rgba(247,247,247)"
                        : !stayActive && "#FFF"
                    }`,
                    cursor: "pointer",
                    _after: {
                      boxShadow: `${
                        stayActive === "check-out" &&
                        "rgb(0 0 0 / 20%) 0px 6px 20px !important"
                      }`,
                      pos: "absolute",
                      content: `""`,
                      bgColor: `${
                        stayActive === "check-out"
                          ? "#FFF"
                          : "rgb(235, 235, 235)"
                      }`,
                      w: "100%",
                      h: "100%",
                      top: 0,
                      borderRadius: "full",
                      left: "-1px",
                    },
                  }}
                  _after={{
                    boxShadow: `${
                      stayActive === "check-out" &&
                      "rgb(0 0 0 / 20%) 0px 6px 20px !important"
                    }`,
                    pos: "absolute",
                    content: `""`,
                    bgColor: `${stayActive === "check-out" && "#FFF"}`,
                    w: "100%",
                    h: "100%",
                    top: 0,
                    borderRadius: "full",
                    left: "-1px",
                  }}
                  onClick={() => setStayActive("check-out")}
                  bgColor={stayActive === "check-out" && "rgba(247,247,247)"}
                  _focusWithin={{ border: "2px solid black" }}
                  alignItems="center"
                  d="flex"
                  ml="-1px"
                  w="calc(100% + 2px)"
                  px="35px"
                >
                  <VStack
                    zIndex={999}
                    fontSize="15px"
                    spacing="0px"
                    alignItems="start"
                  >
                    <Text fontWeight="700">Check out</Text>
                    <Text border="" p="0">
                      Add dates
                    </Text>
                  </VStack>
                </Box>
              </Box>
              <Divider
                alignSelf="center"
                zIndex={-1}
                w="0"
                pos="absolute"
                left="70%"
                transform="translate(-50%)"
                borderColor="gray.400"
                h="60%"
                orientation="vertical"
              />
              <Box w="30%">
                <Box
                  h="100%"
                  pos="relative"
                  _hover={{
                    bgColor: `${
                      stayActive !== "guests" && stayActive
                        ? "rgba(247,247,247)"
                        : !stayActive && "#FFF"
                    }`,
                    cursor: "pointer",
                    _after: {
                      zIndex: 1,
                      pos: "absolute",
                      content: `""`,
                      bgColor: `${
                        stayActive !== "guests" ? "rgb(235,235,235)" : ""
                      }`,
                      w: "calc(100% + 2px)",
                      h: "100%",
                      top: 0,
                      borderRightRadius: "full",
                      left: "1px",
                    },
                  }}
                  _after={{
                    zIndex: 2,
                    boxShadow: `${
                      stayActive === "guests" &&
                      "rgb(0 0 0 / 20%) 0px 6px 20px !important"
                    }`,
                    pos: "absolute",
                    content: `""`,
                    bgColor: `${stayActive === "guests" && "#FFF"}`,
                    w: "100%",
                    h: "100%",
                    top: 0,
                    borderRadius: "full",
                    left: "1px",
                  }}
                  zIndex={stayActive === "guests" && 999}
                  borderRightRadius="full"
                  alignItems="center"
                  w="calc(100% + 1px)"
                  ml="-1px"
                  d="flex"
                  pl="35px"
                  pr="10px"
                  bgColor={stayActive === "guests" && "rgb(247, 247, 247)"}
                  justifyContent="space-between"
                  onClick={() => setStayActive("guests")}
                >
                  <VStack
                    zIndex={999}
                    w="80%"
                    fontSize="15px"
                    spacing="0"
                    alignItems="start"
                  >
                    <Text fontWeight="700">Guests</Text>
                    <Text
                      _hover={{ cursor: "pointer" }}
                      border=""
                      p="0"
                      w="100%"
                    >
                      Add guests
                    </Text>
                  </VStack>

                  <Box
                    zIndex={998}
                    bg="rgb(255, 56, 92)"
                    py="10px"
                    px="17px"
                    borderRadius="full"
                    w="100%"
                    h="80%"
                    d="flex"
                    alignItems="center"
                    transition="max-width 0.2s cubic-bezier(0.35, 0, 0.65, 1) 0s !important"
                    maxW={{
                      base: "55px",
                      sm: "55px",
                      md: !stayActive ? "55px" : "120px",
                      lg: !stayActive ? "55px" : "120px",
                    }}
                  >
                    <HStack color="#FFF">
                      <Icon fontSize="22px" as={AiOutlineSearch} />
                      <Text
                        visibility={{
                          base: "hidden",
                          sm: "hidden",
                          md: !stayActive ? "hidden" : "visible",
                          lg: !stayActive ? "hidden" : "visible",
                        }}
                        fontWeight="600"
                      >
                        Search
                      </Text>
                    </HStack>
                  </Box>
                </Box>
              </Box>
            </Box>
          ) : (
            ""
          )}
        </Flex>

        <HStack spacing="20px">
          <Button variant="ghost" borderRadius="full">
            Become a Host
          </Button>
          <Box
            _hover={{ bgColor: "gray.100", transition: "all 0.4s" }}
            pos="relative"
            w="40px"
            h="40px"
            transition="all 0.4s"
            borderRadius="full"
          >
            <Icon
              color="#000"
              fontSize="17px"
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%,-50%)"
              as={BsGlobe}
            ></Icon>
          </Box>
          <Box bgColor="gray.400" p="3px" borderRadius="full">
            <Icon fontSize="28px" color="#FFF" as={BsPersonFill} />
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}

export default DesktopNav;
