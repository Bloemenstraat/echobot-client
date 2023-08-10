// @ts-nocheck

import { Flex, FormLabel, Input } from "@chakra-ui/react";

export default function ChannelConfig ({ i, register }) {

    return (
        <Flex direction='column' >
            <FormLabel>Channel ID:</FormLabel> <Input {...register(`channel_id_${i}`)} />
            <Flex direction='column'  pl={5} >
                <FormLabel>Image generation :</FormLabel> <Input {...register(`image_generation_${i}`)} />
                <FormLabel>Summarize :</FormLabel> <Input {...register(`summarize_${i}`)} />
                <FormLabel>Tagging :</FormLabel> <Input {...register(`tagging_${i}`)} />
                <FormLabel>Bot ID :</FormLabel> <Input {...register(`bot_id_${i}`)} />
            </Flex>
        </Flex>
    );
} 