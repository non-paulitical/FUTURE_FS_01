import React from 'react'

const Alert = (props) => {
    const handleClick = () => {
        return;
    }

    return (
        <div className={`${props.alert.bgColor} border ${props.alert.borderColor} ${props.alert.textColor} px-4 py-3 rounded relative`} role="alert">
            <strong className="font-bold">{props.alert.boldText}</strong>
            <span className="mx-1 inline">{props.alert.text}</span>
            <span  className="absolute top-0 bottom-0 right-0 px-4 py-3 ">
                <svg onClick={() => props.onClose()} className={`fill-current h-6 w-6 ${props.alert.iconColor} cursor-pointer`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
            </span>
        </div>
    )
}

const EmailAlert = (props) => {
    const successAlert = {
        boldText: 'Oh yeah!',
        text: 'Email Sent',
        bgColor: 'text-green-100',
        borderColor: 'text-green-400',
        textColor: 'text-green-700',
        iconColor: 'text-green-500',
    }

    const failAlert = {
        boldText: 'Holy smokes!',
        text: 'Email Failed',
        bgColor: 'text-red-100',
        borderColor: 'text-red-400',
        textColor: 'text-red-700',
        iconColor: 'text-red-500',
    }

    return (
        <>
            {props.status === 200 && <Alert alert={successAlert} onClose={props.onClose} />}
            {props.status === 500 && <Alert alert={failAlert} onClose={props.onClose} />}
        </>
    )
}

export default EmailAlert