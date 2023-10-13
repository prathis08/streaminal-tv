import { useState, useEffect } from "react";

function useFetch(url, callback) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            if (!url) return;
            try {
                const response = await fetch(url);

                if (!response.ok || response.status !== 200) {
                    throw new Error("Network response was not ok");
                }

                const contentType = response.headers.get("content-type");

                if (contentType && contentType.includes("application/json")) {
                    let data = await response.json();
                    if (callback) {
                        data = callback(data);
                    }
                    setData(data);
                    if (data) {
                        setLoading(false);
                    }
                }
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return [data, loading, error];
}

export default useFetch;
