import { useState, useEffect } from "react";

function useFetch(url, callback) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                let data = await response.json();
                if (callback) {
                    data = callback(data);
                }
                setData(data);
                if (data) {
                    setLoading(false);
                }
                setError(null);
            } catch (error) {
                setError(error);
            }
        }
        fetchData();
    }, [url]);

    return [data, loading, error];
}

export default useFetch;
