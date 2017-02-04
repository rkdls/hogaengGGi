import React, {Component} from 'react';
import Board from './contents/Board'
import SearchBar from './search/SearchBar'
class App extends Component {
    render() {
        return (
            <div className="App">
                <SearchBar/>
                <div
                    className="mainContents"
                >

                    <Board/>
                </div>
            </div>
        );
    }
}

export default App;
