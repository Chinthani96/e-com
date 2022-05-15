import axios from "axios";
import { BASE_URL } from './shared/config';

const instance : any = axios.create({
    baseURL: BASE_URL,
});

export default instance;