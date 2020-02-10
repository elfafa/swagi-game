import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import Setup from 'components/game/Setup'
import { startGame } from 'store/game/actions'

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onStartClick: (resource: string, players: number) => dispatch(startGame(resource, players)),
})

export default connect(
    null,
    mapDispatchToProps,
)(Setup)
