/**
 * Created by youngil on 2017-02-04.
 */
import $ from 'jquery';
import * as actions from './index';

export const recentBoardRequest = (...args) => {
    console.log('recentBoardRequest');

    return function (dispatch) {
        dispatch(actions.Loading());
        $.ajax({
            url:'https://railsapi2-sghiroo.c9users.io/pokemons.json',
            success: function (res) {
                console.log('받아온값 @@@',res);
                dispatch(actions.RecentBoardRequest(res))
            },
            error: function (status, res) {
                console.log('연동실패..',status, res);
            }
        })
    }
};
export const Search = (...args) => {
    console.log('recentBoardRequest');

    return function (dispatch) {
        dispatch(actions.Loading());
        $.ajax({
            url: 'https://railsapi2-sghiroo.c9users.io/pokemons.json',
            type: 'GET',
            // data: {'comic': comic, 'subtitle': subtitle},
            success: function (res) {
                console.log('comment res',res);
                // console.log('res', res.comment);
                dispatch(actions.comment(res.comment));
            },
            error: function (status, res) {
                console.log('2실패..', status, res);
                dispatch(actions.comment(' '));
            }
        });
    }
};