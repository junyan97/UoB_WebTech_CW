import React from 'react';
import {Spinner} from 'react-bootstrap';

const LoadingAnimation = () => {
    return(
        <Spinner animation="border" role="status" variant="primary">
            <span className="sr-only">Loading...</span>
        </Spinner>
    )
}

export default LoadingAnimation;