import React, {Component} from 'react';
import Board from './contents/Board'
import SearchBar from './search/SearchBar'
import {Route, Link} from 'react-router-dom';
import logo from './img/logo1.png'
import centerLogo from './img/center_logo.png'

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
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Recent News</Link></li>
                            <li><Link to="#community">Community</Link></li>
                        </ul>
                    </div>
                    <div className="navRight">
                        <p>right contents</p>
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
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12">
                        <article className="leftSide">
                            <section className="community">
                                <h3 className="community_title"><span>Community</span></h3>
                            </section>
                            <div className="slider">
                                <div className="row">
                                    <div className="col-md-4">
                                        <figure>
                                            <img src="" alt=""/>
                                            <figcaption>

                                            </figcaption>
                                        </figure>

                                    </div>
                                    <div className="col-md-4">
                                        <figure>
                                            <img src="" alt=""/>
                                            <figcaption>

                                            </figcaption>
                                        </figure>

                                    </div>
                                    <div className="col-md-4">
                                        <figure>
                                            <img src="" alt=""/>
                                            <figcaption>

                                            </figcaption>
                                        </figure>

                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
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
