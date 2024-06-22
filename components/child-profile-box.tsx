"use client";

import React from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Student } from "@/types";
import axios from "axios";
import { Edit, EditIcon, X } from "lucide-react";

import { EditChildForm } from "./ui/childprofileboxedit";

interface ProfileBoxProps {
  child: Student;
  href: string;
  parentemail: string;
}

export function ChildProfileBox({ child, href, parentemail }: ProfileBoxProps) {
  const router = useRouter();
  const deleteChild = async () => {
    await axios.delete(
      `http://localhost:8080/api/parents/${parentemail}/removeStudent/${child.id}`,
    );
    router.refresh();
  };

  const handelClick = () => {
    router.push(href);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center" onClick={handelClick}>
        <Link
          href={href}
          className="flex h-36 w-36 cursor-pointer items-center justify-center rounded-lg border bg-muted"
        >
          <p className="text-7xl font-bold">
            {child.firstname.charAt(0).toUpperCase()}
          </p>
        </Link>
      </div>
      <span className="flex items-center justify-between space-x-4">
        <h3 className="mt-4 text-lg font-semibold">{`${child.firstname} ${child.lastname}`}</h3>
        <X className=" text-red-500" onClick={deleteChild} />
        <EditChildForm child={child}  />
      </span>
    </div>
  );
}
