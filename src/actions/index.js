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
        type:'RecentBoardRequest',
        // descriptions:res.description,
        // link:res.link,
        // originallink:res.originallink,
        // pubDate:res.pubDate,
        // title:res.title
        recentBoard:res
    }
};
export const RecentBoardRequestFail = (res) => {
    return {
        type:'RecentBoardRequestFail',
    }
};
export const SearchLoading = (res) =>{
    return{
        type:'SearchLoading'
    }
};
export const SearchRes = (res) => {
    return {
        type:'SearchRes',
        SearchRes:res
    }
};
export const SearchResFail = () =>{
    return {
        type:'SearchResFail',
        SearchRes:'검색 실패하였습니다 다시 입력해주세요'
    }
};