const useAuth = () => {


}


const fetchAuth = async (token) => {
  //TODO move url to config
  const url = `http://localhost:3001/auth/google`;
  const queryString = new URLSearchParams({
    "redirect_url": "http://localhost:5173"
  })
  const request = new Request(`${url}?${queryString}`, {
    method: "GET",
  });
  const response = await fetch(request);
  const json = await response.json();
  return people;
  // return response.json().map(({ data }) => data);
  // console.log(response.json);
  // return response.json();
};