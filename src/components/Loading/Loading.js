import React from 'react';

function Loading(components) {

    return function LoadingAnyComponents({ isloading, data }) {
        if (isloading) {
            return (
                <p>Loading.....</p>
            )
        } else {
            return (
                components({data})
            )
        }
    }

}

export default Loading;