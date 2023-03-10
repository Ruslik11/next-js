import Head from "next/head";

const Socials = ({ socials }) => {
    if (!socials) {
        return null
    }

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css"/>
            </Head>
            <ul className='wrapper'>
                {socials && socials.map(({id, icon, path}) => <li key={id}>
                    <a className={`icon ${icon}`} href={path} target='_blank' rel='noopener noreferrer'>
                        <span className='tooltip'>{icon}</span>
                        <span><i className={`fab fa-${icon}`} aria-hidden='true' /></span>
                    </a>
                </li>)}
            </ul>
        </>
    )
}

export default Socials