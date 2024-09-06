// app/actions.ts
'use server'

import { revalidatePath } from 'next/cache'
import axios from 'axios'

export async function deleteUserAction(id: string) {
  const url = "http://localhost:5000/users"
  const deleteUserUrl = `${url}/${id}`

  try {
    const response = await axios.delete(deleteUserUrl)
    if (response?.status === 200) {
      revalidatePath("/dashboard")
    }
    return { success: true, data: response.data }
  } catch (error) {
    console.error("Error deleting user:", error)
    return { success: false, error: 'Failed to delete user' }
  }
}