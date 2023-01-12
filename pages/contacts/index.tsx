import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";
import {GetStaticProps} from "next";
import {FC} from "react";
import {contactType} from "../../types";
export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            contacts: data
        }
    }
}


type contactTypeProps = {
    contacts: [contactType]
}

const Contacts:FC<contactTypeProps> = ({ contacts }) => {
    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading text={'Contacts list'} />
            <ul>
                {contacts && contacts.map(({id, name, email}) => <li key={id}>
                    <Link href={`/contacts/${id}`}>
                        <strong>{name}</strong>
                    </Link>
                    ({email})
                </li>)}
            </ul>
        </>
    )
}

export default Contacts