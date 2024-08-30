
import "./style.scss";
export const Button = ({text,className,eventFun,type}) => {
    return (
        <button onClick={()=>eventFun ? eventFun : null} className={className ? className : null} type={type ? type : 'button'}>
            {text ? text : 'button'}
        </button>
    );
};

