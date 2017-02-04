/**
 * Created by youngil on 2017-02-05.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import aboutOne from '../img/about01.png'
import aboutTwo from '../img/about02.png'
import aboutThree from '../img/about03.png'

class About extends Component {


    render() {

        return (
            <div className="about">
                <div className="row">
                    <div className="col-sm-4 text-center">
                        <div className="img_wrap">
                            <img src={ aboutOne } alt=""/>
                            <p>정돈된 검색</p>
                        </div>
                    </div>
                    <div className="col-sm-4 text-center">
                        <div className="img_wrap">
                            <img src={ aboutTwo } alt=""/>
                            <p>선택에 현명한 소비를</p>
                        </div>
                    </div>
                    <div className="col-sm-4 text-center">
                        <div className="img_wrap">
                            <img src={ aboutThree } alt=""/>
                            <p>의견공유</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const propTypes = {};
const defaultProps = {};
About.propTypes = propTypes;
About.defaultProps = defaultProps;

const mapStateToProps = (state, ownProps) => {
    return {}
};
const mapDispatchToProps = (dispatch) => {
    return {}
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
