import { useEffect } from "react";
import { PropertySignature } from "typescript";

type Props = {
    message: string;
}

function Hello({ message }: Props) {
    
    useEffect(() => {
    // cganada para a API para buscar
    }, []);
    
    return (
        <h1>Hello {message}!</h1>
    );
}

export default Hello;