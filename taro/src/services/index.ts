import request from "@/utils/request";

export const getAsyncData = (param?) => {
  console.log("param", param);
  return request.get("https://jsonplaceholder.typicode.com/users", param);
};
