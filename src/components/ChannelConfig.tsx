// @ts-nocheck

import { Flex, FormLabel, Input, Button } from "@chakra-ui/react";

export default function ChannelConfig ({ i, register, remove }) {

    return (
        <Flex direction='column' >
            <FormLabel>Channel ID:</FormLabel> 
            <Flex>
                <Input {...register(`config.${i}.channel_id`)} />
                <Button color='white' bg='crimson' borderRadius='100%' onClick={() => remove(i)}> - </Button>
            </Flex>
            <Flex direction='column'  pl={5} >
                <FormLabel>Image generation :</FormLabel> <Input {...register(`config.${i}.image_generation`)} />
                <FormLabel>Summarize :</FormLabel> <Input {...register(`config.${i}.summarize`)} />
                <FormLabel>Tagging :</FormLabel> <Input {...register(`config.${i}.tagging`)} />
                <FormLabel>Bot ID :</FormLabel> <Input {...register(`config.${i}.bot_id`)} />
            </Flex>

            
        </Flex>
    );
} 