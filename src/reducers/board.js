/**
 * Created by youngil on 2017-02-04.
 */
import update from 'react-addons-update'
const initialstate = {
    Loading:'INIT',
};
const board = (state = initialstate, action) => {
    console.log('Loading in reducer', action);
    switch (action.type) {
        case 'Loading':
            return update(state, {
                Loading: {$set: 'Loading'}
            });
        default:
            return state
    }
};
export default board