import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {smallImage} from '../util'
import playstation from '../img/playstation.svg'
import xbox from '../img/xbox.svg'
import steam from '../img/steam.svg'
import gamepad from '../img/gamepad.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg'
import starFull from '../img/star-full.png'
import starEmpty from '../img/star-empty.png'

const GameDetail = ({pathID})=>{
    const history = useHistory()
    const exitDetailHandler = (e) => {
        const element = e.target
        if (element.classList.contains('shadow')){
            history.push('/')
        }
    }

    const getStars = ()=>{
        const stars = []
        const rating = Math.floor(game.rating)
        for (let i = 1; i <= 5; i++ ){
            if (i <= rating){
                stars.push(<img alt="star" key={i} src={starFull}/>)
            } else {
                stars.push(<img alt="star" key={i} src={starEmpty}/>)
            }
        }
        return stars
    }

    const getPlatform = (platform)=>{
        switch(platform){
            case "Playstation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC": 
                return steam;
            case "Nintento":
                return nintendo;
            case "iOS":
                return  apple;
            default: 
                return gamepad
        }
    }

    // data
    const {screen, game, isLoading} = useSelector(state => state.detail)
        return (
            <>
            {!isLoading && (
            <CardShadow className="shadow" onClick={exitDetailHandler}>
                <Detail layoutId={pathID}>
                    <Stats>
                        <div className="rating">
                            <motion.h3 layoutId={`h3 ${pathID}`}>{game.name}</motion.h3>
                            <p>Rating: {game.rating}</p>
                            {getStars()}
                        </div>
                        <Info>
                            <h3>Platforms</h3>
                            <Platforms>
                                {game.platforms.map(data => (
                                    <img key={data.platform.id} src={getPlatform(data.platform.name)} alt="platform"/>
                                ))}
                            </Platforms>
                        </Info>
                    </Stats>
                    <Media>
                        <motion.img layoutId={`image ${pathID}`}src={smallImage(game.background_image, 1280)} alt={game.name}/>
                    </Media>
                    <Description>
                        <p>{game.description_raw}</p>
                    </Description>
                    <div className="gallery">
                        {screen.results.map(screen => (
                            <img src={smallImage(screen.image, 1280)} key={screen.id} alt="game"/>
                        ))}
                    </div>
                </Detail>
            </CardShadow>
            )}
            </>
            
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    &::-webkit-scrollbar {
        width: 0.5rem;
    };
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    };
    &::-webkit-scrollbar-track{
        background: white;
    }
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 4rem;
    background: white;
    position: absolute;
    left: 10%;
    z-index: 20;
    color: black;
    img {
        width: 100%;
    }
`

const Stats = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        width: 2rem;
        height: 2rem;
        display: inline;
    }
`

const Info = styled(motion.div)`
    text-align: center;
`
const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
        object-fit: cover;
    }
`

const Description = styled(motion.div)`
    margin: 5rem 5rem;
`


export default GameDetail