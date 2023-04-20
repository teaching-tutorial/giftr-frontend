import { useQuery } from "react-query";
import useToken from "../context/TokenContext";

const useDeletePeople = (id) => {
  const { token } = useToken();
  const {
    data: people,
    refetch,
    error,
    isLoading,
  } = useQuery("deletePeople", () => deletePeopleQuery(token, id), {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  return { people, refetch, error, isLoading };
};

export default useDeletePeople;

const deletePeopleQuery = async (token, id) => {
  const url = `http://localhost:3001/api/people/${id}`;
  const request = new Request(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });
  const response = await fetch(request);
  const json = await response.json();
  const { data: people } = json;
  console.log(people);
  return people;
};
