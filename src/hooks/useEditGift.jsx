import { useQuery } from "react-query";
import useToken from "../context/TokenContext";

const useEditGift = (peopleId, isEdit, body) => {
  const { token } = useToken();
  const {
    data: gift,
    refetch,
    error,
    isLoading,
  } = useQuery(
    ["editGift", peopleId, isEdit],
    () => editGiftQuery(peopleId, isEdit, token, body),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  return { gift, refetch, error, isLoading };
};

export default useEditGift;

const editGiftQuery = async (peopleId, isEdit, token, body) => {
  let url = `http://localhost:3001/api/people/${peopleId}/gifts`;
  let method = "POST";
  if (isEdit) {
    url += `/${body?._id}`;
    method = "PATCH";
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
  const { data: gift } = json;
  return gift;
};
