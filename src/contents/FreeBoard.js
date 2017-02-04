
import React, {Component} from 'react';
import {connect} from 'react-redux';
import communityIcon from '../img/community_logo.png'

class FreeBoard extends Component {


    render() {

        return (
            <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12">
                <article className="leftSide">
                    <section className="community">
                        <h3 className="community_title"><span>Community</span></h3>

                        <article className="userboard_txt">
                            <div className="row">
                                <div className="col-md-2 col-sm-3 col-xs-4">
                                    <div className="img_wrap">
                                            <img src={ communityIcon } alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-10 col-sm-9 col-xs-8">
                                    <div className="txt_wrap">
                                        <h3 className="userboard_title">요즘 최순실 쩔지않냐?</h3>
                                        <p className="userboard_des">요최쩔<span className="writer">Sunsil</span></p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="userboard_txt">
                            <div className="row">
                                <div className="col-md-2 col-sm-3 col-xs-4">
                                    <div className="img_wrap">
                                            <img src={ communityIcon } alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-10 col-sm-9 col-xs-8">
                                    <div className="txt_wrap">
                                        <h3 className="userboard_title">옥시 별로인듯</h3>
                                        <p className="userboard_des">ㅇㅇ<span className="writer">옥시윽시</span></p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="userboard_txt">
                            <div className="row">
                                <div className="col-md-2 col-sm-3 col-xs-4">
                                    <div className="img_wrap">
                                            <img src={ communityIcon } alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-10 col-sm-9 col-xs-8">
                                    <div className="txt_wrap">
                                        <h3 className="userboard_title">제목 입니다</h3>
                                        <p className="userboard_des">내용 입니다<span className="writer">익명</span></p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="userboard_txt">
                            <div className="row">
                                <div className="col-md-2 col-sm-3 col-xs-4">
                                    <div className="img_wrap">
                                            <img src={ communityIcon } alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-10 col-sm-9 col-xs-8">
                                    <div className="txt_wrap">
                                        <h3 className="userboard_title">제목 입니다</h3>
                                        <p className="userboard_des">내용 입니다<span className="writer">익명</span></p>
                                    </div>
                                </div>
                            </div>
                        </article>

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
        );
    }
}

export default FreeBoard;
