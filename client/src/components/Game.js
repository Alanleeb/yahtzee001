import React from 'react'
import {
    Grid 
} from 'semantic-ui-react'
import styled from 'styled-components'
import Board from './Board'
import ScoreCard from './ScoreCard'

const Game = () => (
<Grid>
    <Grid.Row>
        <BoardColumn width={10}>
            <Board />
        </BoardColumn>
        <ScoreColumn width={6}>
            <ScoreCard />
        </ScoreColumn>
    </Grid.Row>
</Grid>
)

const FullHeight = styled(Grid.Column)`
height: 100vh
`
const BoardColumn = FullHeight.extend`
background-color: #AAFFAA;
`
const ScoreColumn = FullHeight.extend`
background-color: #9370DB;
`

export default Game;