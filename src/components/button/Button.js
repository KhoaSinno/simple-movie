import React from 'react';

const Button = ({ onClickId, type = 'button', bgColor = 'primary', className, children, full, ...prop }) => {
    let bgClassName = 'bg-primary'
    let bgHover = 'hover:bg-pink-700'
    switch (bgColor) {
        case 'primary':
            bgClassName = 'bg-primary'
            bgHover = 'hover:bg-pink-700'
            break;
        case 'secondary':
            bgClassName = 'bg-secondary'
            bgHover = 'hover:bg-purple-700'
            break;
        default:
            bgClassName = ''
            bgHover = ''
            break;
    }
    return (
        <button
            type={type}
            className={`py-3 px-6 rounded-lg capitalize transition-all font-bold tracking-wide mt-auto ${full ? 'w-full' : 'w-auto'} 
            ${bgClassName} ${bgHover} ${className}`}
            onClick={onClickId}
            {...prop}
        >{children}</button>
    );
};

export default Button;