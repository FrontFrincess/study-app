import React, { useEffect, useState } from "react";
import { getRepoContents } from "../api/requests";
import contentSearch from "../utils/contentSearch";

export default function Repo() {
  const path = "";
  const [isLoading, setIsLoading] = useState(false);
  const [endFiles, setEndFiles] = useState([]);

  // 전체 보기를 원할 시
  // 폴더 구조가 깊어질 때
  // 더 이상 file type이 dir가 없을 때까지 탐색해야 함

  const seeAll = async () => {
    setIsLoading(true);
    const result = await contentSearch(path);
    console.log(result, "완");
    setEndFiles(result);
    setIsLoading(false);
  };

  return (
    <div className="repo-container">
      <button type="button" onClick={seeAll}>
        전체보기
      </button>
      {isLoading === true && <p>로딩중...</p>}
      {!isLoading === true && <p>전체 글:{endFiles.length}개</p>}
      {!isLoading &&
        endFiles.map((endFile) => <div key={endFile.name}>{endFile.path}</div>)}
    </div>
  );
}
