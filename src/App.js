import React, {Component} from 'react';
import Board from './contents/Board'
import SearchBar from './search/SearchBar'
import {Route, Link} from 'react-router-dom';
import logo from './img/logo1.png'
import centerLogo from './img/center_logo.png'
import FreeBoard from './contents/FreeBoard'
import ResultPage from './contents/ResultPage'
import About from './contents/About'

class App extends Component {
    render() {
        return (
            <div className="App">
            <header className="mainHeader">
                <nav className="mainNav navbar navbar-inverse">
                    <div className="navLeft">
                        <h1><Link to="/" className="navbar-brand">
                        <img
                            alt="로고"
                            src={ logo }
                        />
                        </Link></h1>
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="#">Recent News</Link></li>
                            <li><Link to="#community">Community</Link></li>
                        </ul>
                    </div>
                    <div className="navRight">
                    </div>
                </nav>
                <section className="mainSearchArea">
                    <div className="center_logo">
                        <img src={ centerLogo } alt="센터 이미지"/>
                    </div>
                    <SearchBar/>
                </section>
            </header>
            <section className="mainContents">
            <Route path={'/searchresult'} component={ResultPage}/>
            <Route path={'/about'} component={About}/>
                <div className="row">
                    <Route exact path={'/'} component={FreeBoard}/>
                    <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                        <article className="rightSide">
                            <Route exact path={'/'} component={Board}/>
                        </article>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default App;
