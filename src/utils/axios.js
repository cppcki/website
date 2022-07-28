import axios from "axios";

export const CKI_API = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});