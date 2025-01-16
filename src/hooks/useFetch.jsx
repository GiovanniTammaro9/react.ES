import { useState, useEffect } from "react";

const useFetch = (url) => {
    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); //per iniziare il caricamento
            setError(null); //resetta l'errore precedente se è presente

            try{
                const response = await fetch(url);
                if(!response.ok) {
                    throw new Error(`Errore nella risposta della rete`);
                }
                const result = await response.json();
                setData(result); //dati memorizzati
            } catch (err) {
                setError(err.message || `Errore sconosciuto`);
            }finally {
                setLoading(false); //caricamento terminato
            }
        };
        fetchData();
    }, [url]); //ogni volta che cambia url carica
    return {data: data || [], loading, error};
};

export default useFetch;