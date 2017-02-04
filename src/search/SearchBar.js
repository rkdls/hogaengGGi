/**
 * Created by youngil on 2017-02-04.
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as AjaxReq from '../actions/DB'

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

    render() {
        console.log('this.prosp', this.props);
        return (
            <div
                className="HeaderArea"
            >
                <div
                    className="SearchBar"
                >
                    <input
                        placeholder="검색"
                        name="search"
                        type="TEXT"
                        onChange={this.handleChange}
                        value={this.state.search}
                        onKeyPress={this.handleKeyPress}
                    />
                    <button
                        onClick={(e) => {
                            this.ajaxSearch(e)
                        }}
                    >
                        검색
                    </button>
                </div>
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

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        Search: (val) => {
            "use strict";
            dispatch(AjaxReq.Search(val))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);