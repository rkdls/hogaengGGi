/**
 * Created by youngil on 2017-02-04.
 */

import {combineReducers} from 'redux';
import board from './board'

const comicApp = combineReducers({
    board
});

export default comicApp