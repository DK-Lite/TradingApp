import React from 'react'
import styeld from 'styled-components'

const Container = styeld.div`
    width: 100%;
    height: 100%;
    border-radius: 0px;
    box-shadow: 0px 0px 4px 1px gray;
    :hover {
        box-shadow: 0px 0px 5px 2px gray;
    }
    background: #FFFFFF;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
`
const Card = ({children, ...rest}) => (
    <Container {...rest}>
        {children}
    </Container>    
)

export default Card;