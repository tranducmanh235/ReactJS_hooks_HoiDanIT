import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Covid = () => {
    const [dataCovid, setDataCovid] = useState([]);
    const [loading, setLoading] = useState(true);

    // componentDidMount
    useEffect(async () => {
        setTimeout(async () => {
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
            setLoading(false);
        }, 3000);
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
                    {loading === false &&
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
                    {loading === true && (
                        <tr>
                            <td colspan="5" style={{ textAlign: "center" }}>
                                Loading...
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Covid;
