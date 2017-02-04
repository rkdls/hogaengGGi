/**
 * Created by youngil on 2017-02-05.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class About extends Component {


    render() {

        return (
            <div
                className="About"
            >
                어바웃 페이지
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