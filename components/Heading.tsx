import React from "react";

const Heading = ({ tag = 'h1', text}) => {
    const Tag = tag
    // @ts-ignore
    return <Tag>{text}</Tag>
}

export default Heading