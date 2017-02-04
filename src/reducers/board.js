/**
 * Created by youngil on 2017-02-04.
 */
import update from 'react-addons-update'
const initialstate = {
    Loading: 'INIT',
    // recentBoard: {
    //     descriptions: '',
    //     link: '',
    //     originallink: '',
    //     pubDate: '',
    //     title: ''
    // }
    recentBoard:[],
};


const board = (state = initialstate, action) => {
    console.log('Loading in reducer', action);
    switch (action.type) {
        case 'Loading':
            return update(state, {
                Loading: {$set: 'Loading'}
            });
        case 'RecentBoardRequest':
            return update(state, {
                Loading: {$set: 'Done'},
                // recentBoard: {
                //     descriptions: {$set: action.descriptions},
                //     link: {$set: action.link},
                //     originallink: {$set: action.originallink},
                //     pubDate: {$set: action.pubDate},
                //     title: {$set: action.title},
                // }
                recentBoard:{$set:action.recentBoard}
            });
        case 'RecentBoardRequestFail':
            return update(state, {
                Loading: {$set: 'Done_But_Fail'},
            });
        default:
            return state
    }
};
export default board