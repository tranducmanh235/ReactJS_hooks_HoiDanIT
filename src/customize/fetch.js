import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    // componentDidMount
    useEffect(() => {
        try {
            async function fetchData() {
                let res = await axios.get(url);

                let data = res && res.data ? res.data : [];

                if (data && data.length > 0) {
                    data.map((item) => {
                        item.Date = moment(item.Date).format("DD/MM/YYYY");
                        return item;
                    });

                    data = data.reverse(); // dao nguoc lai thu tu
                }

                setData(data);
                setIsLoading(false);
                setIsError(false);
            }
            fetchData();
        } catch (error) {
            setIsError(true);
            setIsLoading(false);
        }
    }, []);

    return { data, isLoading, isError };
};

export default useFetch;
