import {AppProps} from "next/app";
import Layout from "../components/Layout";
import Image from "next/image";
import '../styles/globals.scss'

import test from '../public/test.jpeg'

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Layout>
        <main>
            <Component {...pageProps} />
            <Image
                src={test}
                width={500}
                height={350}
                alt='preview'
                placeholder='blur'
            />
        </main>
    </Layout>
)

export default MyApp