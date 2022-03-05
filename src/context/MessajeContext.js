import { createContext, useState } from 'react';

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
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
        <MessageProvider value={{ message, severity, handleMessage }}>
            {children}
        </MessageProvider>
    );
};
