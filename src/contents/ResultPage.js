/**
 * Created by youngil on 2017-02-04.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class ResultPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('this.props', this.props);
        console.log('this.SearchRes', this.props.SearchRes);
        return (
            <div
                className="SearchRes"
            >
                {
                    (this.props.SearchRes && this.props.SearchLoading==='Done')&&
                    this.props.SearchRes.map((val, i) => {
                        return <a href={val.link}
                        key={i}>
                        <li
                            className="InnerSearchBoardList"
                        >
                            <div
                                className="ImageSearchWrap"
                            >
                                <img
                                    className="recentSearchNewsImg"
                                    alt="상세 뉴스이미지"
                                    src={val.imgurl}
                                />
                            </div>
                            <span className="recentSearchNewsTitle"
                            >{val.title}</span>
                            <span className="recentSearchNewsDescription"
                            >
                                {val.description}
                            </span>
                        </li>
                        </a>
                    })
                }
                {
                    this.props.SearchLoading ==='Done_But_Fail' &&
                    <li>검색에 실패하였습니다 다시 시도해주세요~!</li>
                }
            </div>
        );
    }
}
const propTypes = {};
const defaultProps = {};
ResultPage.propTypes = propTypes;
ResultPage.defaultProps = defaultProps;

const mapStateToProps = (state, ownProps) => {
    return {
        SearchLoading: state.board.SearchLoading,
        SearchRes: state.board.SearchRes
    }
};
const mapDispatchToProps = (dispatch) => {
    return {}
};
export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
