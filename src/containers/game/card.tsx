import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { startGame } from 'store/game/actions'
import { RootState } from 'store'
import Card from 'components/game/card'

const mapStateToProps = (state: RootState) => ({
    resource: state.game.setup.resource
})

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card)