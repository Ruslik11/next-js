import Heading from "../components/Heading";
import {useEffect} from "react";
import {useRouter} from "next/router";
import Head from "next/head";

const Error = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [router])

    return (
        <div>
            <Head>
                <title>404</title>
            </Head>
            <div>
                <Heading text={'404'} />
                <Heading tag={'h2'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, autem blanditiis distinctio dolorem, fuga impedit iste labore nemo neque nesciunt odit, quaerat quod recusandae sapiente sequi unde vel voluptates?'} />
            </div>
        </div>
    )
}

export default Error