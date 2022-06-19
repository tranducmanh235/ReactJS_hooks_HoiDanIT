import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";

const Covid = () => {
    const {
        data: dataCovid,
        isLoading,
        isError,
    } = useFetch(
        "https://api.covid19api.com/country/vietnam/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z"
    );

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
