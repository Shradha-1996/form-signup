"use server";

import axios from "axios";

const getUser = async () => {
  const url = "http://localhost:5000/users";

  const response = await axios.get(url); // Post new user
  console.log(response.data);
  return response;
  // Handle the response
};

export default getUser;
