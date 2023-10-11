import React, { useEffect, useState } from "react";
import { getRepo, getAllRepo } from "./api/requests";

export default function Repo() {
  const path = "";
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    getAllRepo().then((res) => {
      console.log(res);
      setPaths(res.data);
    });
  }, []);
  return (
    <div>
      {paths.map((path) => (
        <button key={path.name}>{path.path}</button>
      ))}
    </div>
  );
}
