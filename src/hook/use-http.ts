import React, { useState } from "react";
import { makeHttpRequest } from "./api";

const useHttp = () => {
  const base = "https://abdulshakoor-001-site1.gtempurl.com";
  const endpointTitles = "/api/Generator/Titles";
  const endpointDescription = "/api/Generator/Description";
  const endpointTags = "/api/Generator/Tags";

  const searchTitles = (param: any, successCB: any, failCB: any) => {
    makeHttpRequest(base, endpointTitles, param)
      .then((responseData) => {
        if (successCB) successCB(responseData);
      })
      .catch((error) => {
        console.error("Error in HTTP request:", { error });
        if (error && failCB) failCB(error);
      });
  };
  const searchDescription = (param: any, successCB: any, failCB: any) => {
    makeHttpRequest(base, endpointDescription, param)
      .then((responseData) => {
        if (successCB) successCB(responseData);
      })
      .catch((error) => {
        console.error("Error in HTTP request:", { error });
        if (error && failCB) failCB(error);
      });
  };
  const searchTags = (param: any, successCB: any, failCB: any) => {
    makeHttpRequest(base, endpointTags, param)
      .then((responseData) => {
        if (successCB) successCB(responseData);
      })
      .catch((error) => {
        console.error("Error in HTTP request:", { error });
        if (error && failCB) failCB(error);
      });
  };

  return {
    searchTitles,
    searchDescription,
    searchTags,
  };
};

export default useHttp;
