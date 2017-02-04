/**
 * Created by youngil on 2017-02-04.
 */
import React, {Component} from 'react';
import * as ajaxReq from '../actions/DB'

class Board extends Component {

    componentDidMount() {
        ajaxReq.recentBoardRequest()

    }

    render() {
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
                        <li
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
                            <span
                                className="recentNewsTitle"
                            >첫번째 타이틀</span>
                            <span
                                className="recentNewsDescription"
                            >
                                디스크립션
                            </span>
                        </li>
                        <li
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
                            <span
                                className="recentNewsTitle"
                            >첫번째 타이틀</span>
                            <span
                                className="recentNewsDescription"
                            >
                                디스크립션
                            </span>
                        </li><li
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
                            <span
                                className="recentNewsTitle"
                            >첫번째 타이틀</span>
                            <span
                                className="recentNewsDescription"
                            >
                                디스크립션
                            </span>
                        </li><li
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
                            <span
                                className="recentNewsTitle"
                            >첫번째 타이틀</span>
                            <span
                                className="recentNewsDescription"
                            >
                                디스크립션
                            </span>
                        </li><li
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
                            <span
                                className="recentNewsTitle"
                            >첫번째 타이틀</span>
                            <span
                                className="recentNewsDescription"
                            >
                                디스크립션
                            </span>
                        </li><li
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
                            <span
                                className="recentNewsTitle"
                            >첫번째 타이틀</span>
                            <span
                                className="recentNewsDescription"
                            >
                                디스크립션
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Board;
