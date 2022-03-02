import { createContext, useState } from 'react';

export const MessageContext = createContext();

export const MessageContextProvider = ({ children }) => {
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');

    const handleMessage = (mensaje, severidad) => {
        
        setMessage(mensaje);
        setSeverity(severidad);

        setTimeout(() => {
            setMessage('');
        }, 3000);
    };

    return (
        <MessageContext.Provider value={{ message, severity, handleMessage }}>
            {children}
        </MessageContext.Provider>
    );
};
