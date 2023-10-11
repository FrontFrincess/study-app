import React, { useEffect, useState } from "react";
import { getRepoFolders } from "../api/requests";

export default function Repo() {
  const path = "";
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    getRepoFolders(path).then((res) => {
      console.log(res);
      setPaths(res.data);
    });
  }, []);
  return (
    <div className="repo-container">
      <div className="folder-list">
        {paths.map((path) => (
          <button key={path.name}>{path.path}</button>
        ))}
      </div>
    </div>
  );
}
