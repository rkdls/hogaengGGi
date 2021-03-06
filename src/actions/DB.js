/**
 * Created by youngil on 2017-02-04.
 */
import $ from 'jquery';
import * as actions from './index';

export const recentBoardRequest = (...args) => {
    console.log('recentBoardRequest');
    console.log('ajax start');
    return (dispatch)=> {
        dispatch(actions.Loading());
        $.ajax({

            url: 'https://localhost:3000/news.json',
            success: function (res) {
                console.log('받아온값 @@@', res);
                dispatch(actions.RecentBoardRequest(res))
            },
            error: function (status, res) {
                console.log('연동실패..', status, res);
                dispatch(actions.RecentBoardRequestFail(res))
            }
        })
    }
};

export const Search = (...args) => {
    console.log('recentBoardRequest');
    console.log('SearchArgs', args);
    return function (dispatch) {
        const urltitle = 'https://localhost:3000/news/'+args[0]+'.json';
        console.log('wwwwf', urltitle);
        dispatch(actions.SearchLoading());
        $.ajax({
            url: urltitle,
            type: 'GET',
            // data: {'comic': comic, 'subtitle': subtitle},
            success: function (res) {
                console.log('comment res', res);
                //빈결과일경우도 찾아봐야함
                dispatch(actions.SearchRes(res));
            },
            error: function (res,status) {
                console.log('2실패..', res, status);
                console.log('시작');
                dispatch(actions.SearchResFail());
            }
        });
    }
};