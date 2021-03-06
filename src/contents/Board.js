/**
 * Created by youngil on 2017-02-04.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as ajaxReq from '../actions/DB'
import {FadeLoader} from 'halogen'

class Board extends Component {

    componentDidMount() {
        this.props.recentBoardRequest()
    }

    render() {
        console.log('status', this.props.recentBoard);
        console.log('Loading', this.props.Loading);
        return (
            <div
                className="boardContents"
            >
                <div
                    className="recentBoard"
                >
                    <h3 className="news_title"><span>Today News</span></h3>
                    <ul
                        className="recentBoardList"
                    >
                        {

                            this.props.Loading == 'Loading' &&
                            <FadeLoader color="#C1363D"
                                        className="mainSpinner"
                            />
                        }

                        {


                            this.props.recentBoard &&
                            this.props.recentBoard.map((val, i) => {
                                var re = /<b>/g;
                                var re2 = /<\/b>/g;
                                const parsedTitle = val.title.replace(re, '').replace(re2, '').replace('&quot','');
                                const parsedBody = val.description.replace(re, '').replace(re2, '').replace('&quot','');

                                console.log('parsedTitle', parsedTitle);
                                return <a
                                href={val.link}
                                key={val.title.toString()}
                                ><li
                                    className="InnerRecentBoardList"
                                >
                                    <div
                                        className="ImageWrap"
                                    >
                                        <img
                                            className="recentNewsImg"
                                            alt="뉴스이미지"
                                            src={val.imgurl}
                                        />
                                    </div>
                                    <span className="recentNewsTitle"
                                    >{parsedTitle}</span>
                                    <span className="recentNewsDescription"
                                    >
                                        {parsedBody}
                                    </span>
                                </li></a>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        recentBoard: state.board.recentBoard,
        Loading: state.board.Loading,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        recentBoardRequest: () => {
            dispatch(ajaxReq.recentBoardRequest())
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Board);
