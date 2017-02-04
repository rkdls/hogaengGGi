/**
 * Created by youngil on 2017-02-04.
 */


export const Loading = (res) =>{
    return{
        type: 'Loading',
    }
};

export const RecentBoardRequest = (res) => {
    console.log('reducer response ', res);
    return{
        type:'RecentBoardRequest'
    }
};