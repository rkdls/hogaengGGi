/**
 * Created by youngil on 2017-02-04.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as AjaxReq from '../actions/DB'
import {FadeLoader} from 'halogen'
import {Redirect, Route} from 'react-router-dom';




class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.ajaxSearch = this.ajaxSearch.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    ajaxSearch(e) {
        console.log('ajaxSearch', this.state.search);
        this.props.Search(this.state.search);
    }

    handleKeyPress(e) {
        if (e.charCode === 13) {
            this.ajaxSearch(e)
        }
    }

    componentDidMount () {
        this.searchInput.focus();
    }

    render() {
        console.log('this.prosp', this.props);
        return (
            <div
                className="HeaderArea"
            >

                {
                    this.props.SearchLoading === 'Loading' &&
                    <FadeLoader color="#34239f"
                                size="44"
                                left="50%"
                                position="absolute"
                    />
                }
                {
                    ((this.props.SearchLoading === 'Done' || this.props.SearchLoading ==='Done_But_Fail') && this.props.SearchRes) &&
                    <Redirect push to="/searchresult"/>
                }
                {
                    this.props.SearchLoading !== 'Loading' &&
                    <div
                        className="SearchBar"
                    >
                        <input
                            placeholder="검색하실 기업을 입력하세요"
                            name="search"
                            type="TEXT"
                            onChange={this.handleChange}
                            value={this.state.search}
                            ref = { (input) => { this.searchInput = input } }
                            onKeyPress={this.handleKeyPress}
                        />
                        <button
                            onClick={(e) => {
                                this.ajaxSearch(e)
                            }}
                        >
                        <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                }
            </div>
        );
    }
}
const propTypes = {};
const defaultProps = {};
SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

const mapStateToProps = (state, ownProps) => {
    return {
        SearchLoading: state.board.SearchLoading,
        SearchRes: state.board.SearchRes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        Search: (val) => {
            dispatch(AjaxReq.Search(val))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
