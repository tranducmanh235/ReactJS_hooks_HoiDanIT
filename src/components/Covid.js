import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Covid = () => {
    const [dataCovid, setDataCovid] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    // componentDidMount
    useEffect(async () => {
        try {
            let res = await axios.get(
                "https://api.covid19api.com/country/vietnam/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z"
            );

            let data = res && res.data ? res.data : [];

            if (data && data.length > 0) {
                data.map((item) => {
                    item.Date = moment(item.Date).format("DD/MM/YYYY");
                    return item;
                });

                data = data.reverse(); // dao nguoc lai thu tu
            }

            setDataCovid(data);
            setIsLoading(false);
            setIsError(false);
        } catch (error) {
            setIsError(true);
            setIsLoading(false);
        }
    }, []);

    return (
        <div>
            <h3>Covid 19 tracking in Vietnam:</h3>

            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Lat</th>
                        <th>Lon</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {isError === false &&
                        isLoading === false &&
                        dataCovid &&
                        dataCovid.length > 0 &&
                        dataCovid.map((item) => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.Date}</td>
                                    <td>{item.Lat}</td>
                                    <td>{item.Lon}</td>
                                    <td>{item.Status}</td>
                                </tr>
                            );
                        })}
                    {isLoading === true && (
                        <tr>
                            <td colSpan="5" style={{ textAlign: "center" }}>
                                Loading...
                            </td>
                        </tr>
                    )}
                    {isError === true && (
                        <tr>
                            <td colSpan="5" style={{ textAlign: "center" }}>
                                Something wrong...
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Covid;
