import axios from "axios";

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
});
