/**
 * Created by youngil on 2017-02-04.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as ajaxReq from '../actions/DB'

class Board extends Component {

    componentDidMount() {
        this.props.recentBoardRequest()
    }

    render() {
        console.log('status', this.props.recentBoard);
        return (
            <div
                className="boardContents"
            >
                <div
                    className="recentBoard"
                >
                    최신글 목록
                    <ul
                        className="recentBoardList"
                    >
                        {

                            this.props.recentBoard &&
                            this.props.recentBoard.map((val, i) => {
                                return <li
                                    className="InnerRecentBoardList"
                                >
                                    <div
                                        className="ImageWrap"
                                    >
                                        <image
                                            className="recentNewsImg"
                                            alt="뉴스이미지"
                                        />
                                    </div>
                                    <span className="recentNewsTitle"
                                    >{val.title}</span>
                                    <span className="recentNewsDescription"
                                    >
                                        {val.description}
                                    </span>
                                </li>
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
