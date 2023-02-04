import axios from 'axios';
import {BASE_URL} from '../env';

export const apiRepos = axios.create({
  baseURL: BASE_URL,
});
