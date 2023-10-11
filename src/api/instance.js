import { Octokit } from "octokit";

const KEY = process.env.GITHUB_ACCESS_KEY;

export const octokitInstance = new Octokit({
  auth: KEY,
});
