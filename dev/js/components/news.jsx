import React from 'react';
import _ from 'underscore'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {newsUpload} from '../actions/action-new-upload'

const News = ({socket, newsUpload, news}) => {
    socket.on('INITIAL_DATA', function(data){
        if(_.isUndefined(data.data)){
            console.log("data undefined")
        }
        else{
            newsUpload(data.data);
            console.log(data.data)
        }
    });

    return(
        <div>
            <h3>News</h3>
            {news.map(key => {
                return (
                    <p key={key.NewsID}>{key.Content}</p>
                )
            })}
        </div>
    )}

function mapStateToProps(state) {
    return {
        news:state.news,
        users: state.users
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({newsUpload: newsUpload}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(News);