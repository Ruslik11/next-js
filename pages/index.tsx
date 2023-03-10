import Heading from "../components/Heading";
import styles from '../styles/Home.module.scss'
import Head from "next/head";
import Socials from "../components/Socials";

export const getStaticProps = async () => {
    try {
        const response = await fetch(`${process.env.API_HOST}/socials/`)
        const data = await response.json()
        if (!data) {
            return {
                notFound: true
            }
        }
        return {
            props: {
                socials: data
            }
        }
    } catch {
        return {
            props: {
                socials: null
            }
        }
    }
}

const Home = ({ socials }) => (
    <>
        <Head>
            <title>Next.JS</title>
        </Head>
        <div className={styles.wrapper}>
            <Heading text={'Next.JS'} />
            <Socials socials={socials} />
        </div>
    </>
)

export default Home