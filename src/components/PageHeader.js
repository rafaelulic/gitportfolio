import React from 'react';

const PageHeader = (props) => {
    return (
        <div className="pageheader">
            <h2>{props.title}</h2>
        </div>
    );
}

export default PageHeader;