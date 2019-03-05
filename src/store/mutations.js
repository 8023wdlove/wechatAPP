/* commit Mutation to change state */
import * as types from './mutation-types'
const matations = {
  [types.SETADDRESS] (state, obj) {
    state.SETADDRESS.longitude = obj.longitude
    state.SETADDRESS.latitude = obj.latitude
  }

}

export default matations
