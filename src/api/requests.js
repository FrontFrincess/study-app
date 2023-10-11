import { octokitInstance } from "./instance";
// import { GITHUB_API_INFO } from "../constants";

const baseURL = `/repos/FrontFrincess/study/contents/`;

export const getRepo = async (path) => {
  const res = await octokitInstance.request(`GET ${baseURL}${path}`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return res;
};

export const getAllRepo = async (path) => {
  const res = octokitInstance.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      owner: "FrontFrincess",
      repo: "study",
      path: path,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  return res;
};
