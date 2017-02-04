/**
 * Created by youngil on 2017-02-04.
 */

import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState)
    }

    handleKeyPress(e) {
        console.log('handleKeyPress');
        if (e.charCode == 13) {
            console.log('key pressed');
            this.handleSearch();

        }
    }

    handleSearch() {
        console.log('handle Search start')
    }


    render() {
        return (
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
                    type="submit"
                    onClick={this.handleSearch}
                >
                    검색
                </button>

            </div>
        );
    }
}

export default SearchBar;
