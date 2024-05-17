import React from "react";

import { cookies } from "next/headers";
import { User } from "@/types";
import axios from "axios";

import { MediaRoom } from "@/components/media-room";

const getUserByEmail = async (email: string | undefined): Promise<User> => {
  return axios
    .get("http://localhost:8080/api/auth/user/" + email)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export default async function Room() {
  const email = cookies().get("email")?.value;
  const user = await getUserByEmail(email);
  console.log(user);
  return <MediaRoom user={user} />;
}
