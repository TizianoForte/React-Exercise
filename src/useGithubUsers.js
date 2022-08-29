import useSWR from "swr";

const fetcher = (url) => fetch(url).then((resp) => resp.json());

export const useGithubUser = (username) => {
  const { data, error } = useSWR(`https://api.github.com/users${username}`, fetcher);

  return {
    users: data,
    error,
    isLoading: !data && !error,
  };
};