/**
 * Created by youngil on 2017-02-04.
 */
import $ from 'jquery';
import * as actions from './index';

export const recentBoardRequest = (...args) => {
    console.log('recentBoardRequest');

    return function (dispatch) {
        dispatch(actions.Loading())

    }
};

export const Search = (...args) => {
    console.log('recentBoardRequest');

    return function (dispatch) {
        dispatch(actions.Loading())

    }
};