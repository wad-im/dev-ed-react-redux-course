import React from 'react'
// animations
import {motion} from 'framer-motion'
import {pageAnimation, titleAnim} from '../animation'
import styled from 'styled-components'

const ContactUs = ()=>{
    return (
        <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{ background: "#fff" }}>
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                <Social variants={titleAnim}>
                <Circle></Circle>
                    <h2>Send us a message</h2>
                
                </Social>
                </Hide>
                <Hide>
                <Social variants={titleAnim}>
                <Circle></Circle>
                    <h2>Send us a message</h2>
                
                </Social>
                </Hide>
                <Hide>
                <Social variants={titleAnim}>
                <Circle></Circle>
                    <h2>Send us a message</h2>
                
                </Social>
                </Hide>
            </div>

        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    min-height: 90vh;
    color: #353535;
    @media screen and (max-width: 1300px){
      padding: 2rem;
      font-size: 1rem;
    }
`

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media screen and (max-width: 1300px){
        margin-top: 5rem;
    }
`

const Hide = styled.div`
    overflow: -moz-hidden-unscrollable;
`

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
    }
`

export default ContactUs