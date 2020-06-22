import React from 'react'
import { Card } from 'components/Common';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    aligh-items: flex-start;
`
const StyledCard = styled(Card)` 
    width: 760px;
    height: 480px;
    margin: 10px;
`
const MainContext = () =>{
    return (
        <Container>
            <StyledCard>
                <div>
                2020 06 20 TEST
                </div>
                <div>chart</div>
            </StyledCard>
        </Container>
    )
}

export default MainContext;