import React, {Component} from 'react';
import Board from './contents/Board'
import SearchBar from './search/SearchBar'
import {Route} from 'react-router-dom';
class App extends Component {
    render() {
        return (
            <div className="App">
                <SearchBar/>
                <div
                    className="mainContents"
                >
                    <Route exact path={'/'} component={Board}/>


                </div>
            </div>
        );
    }
}

export default App;
