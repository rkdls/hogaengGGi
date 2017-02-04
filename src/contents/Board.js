/**
 * Created by youngil on 2017-02-04.
 */
import React, {Component} from 'react';


class Board extends Component {
    render() {
        return (
            <div
                className="boardContents"
            >
                <div
                    className="popularBoard"
                >
                    인기글 목록
                </div>
                <div
                    className="recentBoard"
                >
                    최신글 목록
                </div>
            </div>
        );
    }
}

export default Board;
