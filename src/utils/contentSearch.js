import { getRepoContents } from "../api/requests";

export default async function contentSearch(path) {
  // 반환할 배열
  const contentsArr = [];

  // recursiveSearch 로직 작성
  const recursiveSearch = async (path) => {
    try {
      const res = await getRepoContents(path);
      console.log(res.data);
      const files = res.data;

      // for이 map보다 async/await이 깊어지지 않음
      // 하단 주석 참고
      for (const file of files) {
        if (file.type === "file") {
          contentsArr.push(file);
        } else if (file.type === "dir") {
          // 폴더 형식의 경우 재귀함수 실행
          const newPath = file.name;
          // 재귀가 다 돌 때까지 기다림
          await recursiveSearch(newPath);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  await recursiveSearch(path);
  return contentsArr;
}

// map을 사용할 경우 async/await이 더 깊어짐
// const filePromises = files.map(async (file) => {
//   if (file.type === "file") {
//     contentsArr.push(file);
//   } else if (file.type === "dir") {
//     // 폴더 형식의 경우 재귀함수 실행
//     const newPath = file.name;
//     await recursiveSearch(newPath);
//   }
// });
