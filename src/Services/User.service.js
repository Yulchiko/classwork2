import {urls} from "../Config/url";
import {axiosServices} from "./AxiosServices";

export  const userService ={
    getAll: () => axiosServices.get(urls.users).then(value => value.data)
}