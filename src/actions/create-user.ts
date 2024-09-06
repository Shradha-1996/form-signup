"use server";

import { createUsersData, UsersData } from "@/schema/users";
import axios from "axios";
import { revalidatePath } from "next/cache";

// const createUser = async (userData: any) => {

//   const url = "http://localhost:5000/users"
//   try {
//     const response = await axios.post(
//       url, userData
//     ); // Post new user
//     console.log(response.data); // Handle the response
//   } catch (error) {
//     console.error('Error creating user:', error); // Handle error
//   }
// };

// export default createUser

export async function createUserAction(userData: createUsersData) {
  const url = "http://localhost:5000/users";

  try {
    const response = await axios.post(url, userData);

    console.log(response);
    if (response.status === 201) {
      revalidatePath("/dashboard");
    }

    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, error: "Failed to create user" };
  }
}
