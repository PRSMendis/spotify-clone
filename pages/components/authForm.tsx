import { Box, Flex, Input, Button } from "@chakra-ui/react";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { FC, useState } from "react";
import { useSWRConfig } from "swr";
import { auth } from "../../lib/mutations";

const AuthForm: FC<{mode: 'signin' | 'signup'}> = ({mode}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(false)
    const route = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 

        await auth(mode, {email, password})
        setLoading(false)
        Router.push("/")

    }

    return (
        <Box height="100vh" width="100vw" bg="black" color="white">
            <Flex justify="center" align="center" height="100px" borderBottom="white 1px solid">
                <Image src="/circle.svg" height={60} width={60}></Image>
                {/* hello */}
            </Flex>
            <Flex justify="center" align="center" height="calc(100vh - 100px)">
                <Box padding="50px" bg="gray.900" borderRadius="6px">
                    <form onSubmit={handleSubmit}>
                        <Input placeholder='email'
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input placeholder='password'
                        type='passsword'
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit" bg="green.300" isLoading={isLoading}>
                            {mode}
                        </Button>

                    </form>
                </Box>

            </Flex>

        </Box>
    )


}
export default AuthForm;