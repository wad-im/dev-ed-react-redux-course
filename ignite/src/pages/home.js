import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {loadGames} from '../actions/gamesAction'
import GameDetail from '../components/GameDetail'
import {useLocation} from 'react-router-dom'

// components
import Game from '../components/Game'
import styled from 'styled-components'
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion'
import {fadeIn} from '../animations'

const Home = () => {
    const location = useLocation()
    const pathID = location.pathname.split('/')[2]
    const dispatch = useDispatch()
    useEffect(()=> {
      dispatch(loadGames())
    }, [dispatch])
    const {popular, newGames, upcoming, searched} = useSelector(state => state.games)
      
    return (
        <Gamelist variants={fadeIn} initial="hidden" animate='show'>
            <AnimateSharedLayout>
            <AnimatePresence>
            {pathID && <GameDetail pathID={pathID}/>}</AnimatePresence>
            {searched.length ? <div className="searched">
            <h2>Searched Games</h2>
                <Games>
                    {searched.map(game => (
                        <Game name={game.name} released={game.released} id={game.id} 
                        image={game.background_image} key={game.id}/>
                    ))}
                </Games>
            </div> : ('')}
            <h2>Upcoming Games</h2>
                <Games>
                    {upcoming.map(game => (
                        <Game name={game.name} released={game.released} id={game.id} 
                        image={game.background_image} key={game.id}/>
                    ))}
                </Games>
            <h2>Popular Games</h2>
                <Games>
                    {popular.map(game => (
                        <Game name={game.name} released={game.released} id={game.id} 
                        image={game.background_image} key={game.id}/>
                    ))}
                </Games>
            <h2>New Games</h2>
                <Games>
                    {newGames.map(game => (
                        <Game name={game.name} released={game.released} id={game.id} 
                        image={game.background_image} key={game.id}/>
                    ))}
                </Games>
                </AnimateSharedLayout>
        </Gamelist>
    )
}

const Gamelist = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(460px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
`

export default Home