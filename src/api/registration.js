import fakeApi from "@/helpers/axios";

export function registration (options) {
  return fakeApi.post('/api/register', options).then(({ data }) => {
    return data;
  })
}