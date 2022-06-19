import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Covid = () => {
    const [dataCovid, setDataCovid] = useState([]);
    // componentDidMount
    useEffect(async () => {
        let res = await axios.get(
            "https://api.covid19api.com/country/vietnam/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z"
        );

        let data = res && res.data ? res.data : [];
        if (data && data.length > 0) {
            data.map((item) => {
                item.Date = moment(item.Date).format("DD/MM/YYYY");
                return item;
            });
        }
        console.log("check set data: ", data);

        setDataCovid(data);
    }, []);

    return (
        <div>
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
                    {dataCovid &&
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
                </tbody>
            </table>
        </div>
    );
};

export default Covid;
