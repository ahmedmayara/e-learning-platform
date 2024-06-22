"use client";

import React from "react";

import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

interface Props {
  id: string;
}

function ActivateAcount({ id }: Props) {
  const router = useRouter();
  const subscribe = async () => {
    await axios.put(`http://localhost:8080/api/parents/${id}/upgrade`);
    toast.success("تم الاشتراك بنجاح");
    router.refresh();
  };
  return (
    <Button variant={"primary"} onClick={subscribe}>
      الاشتراك الآن
    </Button>
  );
}

export default ActivateAcount;
