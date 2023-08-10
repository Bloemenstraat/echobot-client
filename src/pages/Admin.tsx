// @ts-nocheck

import { Flex, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import CustomInput from "../components/CustomInput";
import { Inputs } from "../types";
import axios from "axios";
import { useState } from "react";

export default function Admin() {

    const [ loading, setLoading ] = useState(false);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
      } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setLoading(true);

        await axios.post(`${import.meta.env.VITE_REMOTE_API}/misc/secret`, data, {
            headers: {
                'auth-token': localStorage.getItem('echobot-jwt')
            }
        });

        setLoading(false);
    }

      
    return (
        <Flex direction='column' color='white' w='100%' minH='100vh' bg='#2B2D31'>
            <form onSubmit={handleSubmit(onSubmit)}>

                <CustomInput helperText="" register={register("OPENAI_TOKEN")}>OPENAI_TOKEN :</CustomInput>
                <CustomInput helperText="" register={register("OPENAI_API_KEY")}>OPENAI_API_KEY :</CustomInput>

                <CustomInput helperText="" register={register("PINECONE_TOKEN")}>PINECONE_TOKEN :</CustomInput>
                <CustomInput helperText="" register={register("PINECONE_REGION")}>PINECONE_REGION :</CustomInput>
                <CustomInput helperText="" register={register("GOOGLE_SEARCH_API_KEY")}>GOOGLE_SEARCH_API_KEY :</CustomInput>
                <CustomInput helperText="" register={register("GOOGLE_SEARCH_ENGINE_ID")}>GOOGLE_SEARCH_ENGINE_ID :</CustomInput>
                <CustomInput helperText="" register={register("WOLFRAM_API_KEY")}>WOLFRAM_API_KEY :</CustomInput>
                <CustomInput helperText="" register={register("REPLICATE_API_KEY")}>REPLICATE_API_KEY :</CustomInput>
                <CustomInput helperText="" register={register("IMAGE_TOKEN")}>IMAGE_TOKEN :</CustomInput>


                <Button type='submit' isLoading={loading} >Submit</Button>
            </form>
        </Flex>
    )
}