import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import {GetServerSideProps} from "next";
import {contactType} from "../../types";
import {FC} from "react";

export const getServerSideProps:GetServerSideProps = async (ctx) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${ctx.query.id}`)
    const data = await response.json()

    if (Object.keys(data).length === 0) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            contact: data
        }
    }
}

type contactTypeProps = {
    contact: contactType
}

const Contact:FC<contactTypeProps> = ({ contact }) => {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <ContactInfo contact={contact} />
        </>
    )
}

export default Contact