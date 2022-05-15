import { getRequest } from './utils';
const BASE_URL = `v1/products`;

export const getAllProducts = () => getRequest(`${BASE_URL}`);