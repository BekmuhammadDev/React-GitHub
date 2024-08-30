import React from 'react';
import "./style.scss";

export const Container = ({children,className,type}) => {
    if(type==="fluid"){
        return <div className={`container ${className && className}`}>{children}</div>
    }

    if(type === "center"){
       return(
        <div className={`container ${className && className}`}>
            {children}
        </div>
       )
    }

    return(
        <div className={` ${className && className}`}>{children}</div>
    )

   
};

