import React from 'react';
import { Flex, Text, Container, HStack, Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, PlusSquareIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";  

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container maxH={"1140px"} px={4}>
            <Flex h={16} alignItems={'center'}
                justifyContent={'space-between'}
                flexDir={{
                    base: "column",
                    sm: "row"
                }}
            >
                <Text
                    fontSize={{ base: "22", sm: "28" }}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                >
                    <Link to={"/"}>Product Store 🛒</Link>
                </Text>

                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>  {/* React Router Link */}
                        <Button>
                            <PlusSquareIcon fontSize={20} />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon size="20" />}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    )
}
