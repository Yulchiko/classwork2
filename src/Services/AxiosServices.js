import {urls} from "../Config/url";

import axios from "axios";

export const axiosServices = axios.create ({
    baseURL: urls
})
