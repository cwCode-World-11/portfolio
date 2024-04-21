import { useEffect } from "react";
import React from "react";
import * as IE from "./importAndExports";

const NotFound = () => {
  const data = IE.useDataContext();

  useEffect(() => {
    const favicon = document.querySelector("#favIcon");
    favicon.href = data.favicon;
    document.title = "404 Not Found";
  }, [data]);

  return (
    <div>
      <h1>404 Error</h1>NotFound
    </div>
  );
};

export default NotFound;
