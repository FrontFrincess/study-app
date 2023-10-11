import { octokitInstance } from "./instance";
import { GITHUB_API_INFO } from "../constants";

export const getRepoFolders = async (path) => {
  const res = octokitInstance.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      owner: GITHUB_API_INFO.OWNER,
      repo: GITHUB_API_INFO.REPO_NAME,
      path: path,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  return res;
};
