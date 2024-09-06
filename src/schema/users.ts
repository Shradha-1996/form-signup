// {
//     id: '45d2',
//     name: 'Divyasimha 2',
//     email: 'divineleo20@gmail.com',
//     dateOfBirth: '2001-05-18',
//     phoneNumber: '9012902192',
//     country: 'India',
//     city: 'Bangalore',
//     password: 'password'
//   }
import { z } from "zod";

const UsersDataParams = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  dateOfBirth: z.string(),
  phoneNumber: z.string(),
  country: z.string(),
  city: z.string(),
  password: z.string(),
});

export type UsersData = z.infer<typeof UsersDataParams>;

const createUsersDataParams = UsersDataParams.omit({
  id: true,
});

export type createUsersData = z.infer<typeof createUsersDataParams>;
