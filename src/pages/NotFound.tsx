import { Flex, Heading } from "@chakra-ui/react";

export default function NotFound () {
    return (
        <Flex w='100%' h='100vh' bg='#2B2D31' gap={100} flexDirection='column' justifyContent='center' alignItems='center'>
            <Heading color='white'> This page doesn't exist :(</Heading>
        </Flex>
    )
}