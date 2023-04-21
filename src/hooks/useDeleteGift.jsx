import { useQuery } from "react-query";
import useToken from "../context/TokenContext";

const useDeleteGift = (id, peopleId) => {
  const { token } = useToken();
  const {
    data: gift,
    refetch,
    error,
    isLoading,
  } = useQuery(
    ["deleteGift", peopleId],
    () => deleteGiftQuery(token, id, peopleId),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  return { gift, refetch, error, isLoading };
};

export default useDeleteGift;

const deleteGiftQuery = async (token, id, peopleId) => {
  const url = `http://localhost:3001/api/people/${peopleId}/gifts/${id}`;
  const request = new Request(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });
  const response = await fetch(request);
  const json = await response.json();
  const { data: gift } = json;
  return gift;
};
