import { useQuery } from "react-query";
import useToken from "../context/TokenContext";

const useEditPeople = (isEdit, body) => {
  const { token } = useToken();
  const {
    data: people,
    refetch,
    error,
    isLoading,
  } = useQuery("editPeople", () => editPeopleQuery(isEdit, token, body), {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  return { people, refetch, error, isLoading };
};

export default useEditPeople;

const editPeopleQuery = async (isEdit, token, body) => {
  let url = `http://localhost:3001/api/people`;
  let method = "POST";
  if (isEdit) {
    url += `/${body?._id}`;
    method = "PUT";
  }

  const request = new Request(url, {
    method: method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const response = await fetch(request);
  const json = await response.json();
  const { data: people } = json;
  console.log(people);
  return people;
};
