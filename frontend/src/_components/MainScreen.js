import React from 'react';
import { connect } from 'react-redux';

var mapStateToProps = (state) => {
    return {
    }
}

var mapDispatchToProps = (dispatch) => {
    return {
    }
}
class MainScreen extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                Under Construction
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);