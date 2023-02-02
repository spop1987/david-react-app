import React from 'react'

const SubHeading = ({title, id}) =>{
    return(
        <div id={id} style={{marginBottom: '1rem'}}>
            <p className="p__cormorant">{title}</p>
        </div>
    );
};

export default SubHeading;