/**
 * Created by youngil on 2017-02-04.
 */
import $ from 'jquery';
import * as actions from './index';
import React from 'react';

export const recentBoardRequest = (...args) => {
    console.log('recentBoardRequest');
    console.log('ajax start');
    return (dispatch)=> {
        dispatch(actions.Loading());
        $.ajax({
            url: 'https://railsapi2-sghiroo.c9users.io/pokemons.json',
            success: function (res) {
                console.log('받아온값 @@@', res);
                dispatch(actions.RecentBoardRequest(res))
            },
            error: function (status, res) {
                console.log('연동실패..', status, res);
            }
        })
    }
};
export const Search = (...args) => {
    console.log('recentBoardRequest');
    console.log('SearchArgs', args);
    return function (dispatch) {
        const urltitle = 'https://railsapi2-sghiroo.c9users.io/pokemons/'+args[0]+'.json';
        console.log('wwwwf', urltitle);
        dispatch(actions.Loading());
        $.ajax({
            url: urltitle,
            type: 'GET',
            // data: {'comic': comic, 'subtitle': subtitle},
            success: function (res) {
                console.log('comment res', res);
                // dispatch(actions.comment(res.comment));
            },
            error: function (status, res) {
                console.log('2실패..', status, res);
                // dispatch(actions.comment(' '));
            }
        });
    }
};