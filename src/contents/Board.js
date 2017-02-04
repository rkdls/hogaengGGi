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
                            <FadeLoader color="#34239f"
                                        size="16px"
                                        margin="4px"
                            />
                        }

                        {
                            this.props.recentBoard &&
                            this.props.recentBoard.map((val, i) => {
                                return <li
                                    className="InnerRecentBoardList"
                                    key={val.title.toString()}
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
