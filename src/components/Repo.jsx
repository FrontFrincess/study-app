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
    console.log(paths);
  }, []);

  return (
    <div className="repo-container">
      <div className="folder-list">
        {paths.map((path) => (
          <a href={`/${path.path}`} key={path.name}>
            {path.path}
          </a>
        ))}
      </div>
    </div>
  );
}
