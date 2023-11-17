// import { http } from "../http";

import axios from "axios";

export const get = async (location: string) => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_ROUTE}/weather?query=${location}`,
        {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                    "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            },
        }
    );

    if (Object.keys(response.data).includes("error")) {
        throw Error(
            `Request Error: ${response.data.error.info}`,
            response.data
        );
    }

    if (!response.data) {
        return null;
    }
    return response.data;
};
