"use client";

import React from "react";

import { useRouter } from "next/navigation";
import axios from "axios";

import { Button } from "@/components/ui/button";

interface props {
  id: string;
}

function DeleteLive({ id }: props) {
  const router = useRouter();
  const handeldeletelivemeeting = async (id: string | undefined) => {
    return axios.delete("http://localhost:8080/meetings/" + id).then((res) => {
      console.log(res.data);
      router.refresh();
    });
  };
  return (
    <Button variant="destructive" onClick={() => handeldeletelivemeeting(id)}>
      حذف
    </Button>
  );
}

export default DeleteLive;
