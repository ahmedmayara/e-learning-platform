import React from "react";

import { cookies } from "next/headers";
import { Student } from "@/types";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { StickerIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { ChildProfileBox } from "@/components/child-profile-box";
import { AddChildForm } from "@/components/forms/add-child-form";

interface GetParentChildrenResponse {
  id: { timestamp: number; date: string };
  email: string;
  roles: [{ name: string }];
  children: Student[];
  firstname: string;
  lastname: string;
}

const getParentChildren = async (
  email: string | undefined,
): Promise<GetParentChildrenResponse> => {
  return axios
    .get<GetParentChildrenResponse>(
      `http://localhost:8080/api/parents/${email}`,
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export default async function ProfileSelectionPage() {
  const email = cookies().get("email")?.value;
  const parent = await getParentChildren(email);
  return (
    <div className="grid h-screen place-content-center bg-muted/40">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
        {parent.children.length > 0 &&
          parent.children.map((child) => (
            <ChildProfileBox
              key={child.id}
              title={`${child.firstname} ${child.lastname}`}
              href={`/learn/${child.firstname}`}
            />
          ))}
        {parent.children.length === 0 || parent.children.length < 5 ? (
          <div className="flex items-center justify-center">
            <AddChildForm />
          </div>
        ) : null}
      </div>
    </div>
  );
}
