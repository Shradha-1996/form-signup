"use server"

import axios from "axios";

const createUser = async (userData: any) => {

  const url = "http://localhost:5000/users"
  try {
    const response = await axios.post(
      url, userData
    ); // Post new user
    console.log(response.data); // Handle the response
  } catch (error) {
    console.error('Error creating user:', error); // Handle error
  }
};

export default createUser