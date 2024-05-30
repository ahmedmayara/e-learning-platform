import { Course } from "@/types";
import axios from "axios";

import { Features } from "@/components/marketing/features";
import { Footer } from "@/components/marketing/footer";
import { Hero } from "@/components/marketing/hero";
import { Navbar } from "@/components/marketing/navbar";
import { SecondaryFeatures } from "@/components/marketing/secondary-features";

const getAllCourses = async (): Promise<Course[]> => {
  return axios
    .get("http://localhost:8080/api/courses/courses")
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export default async function Home() {
  const courses = await getAllCourses();
  return (
    <div className="flex h-full flex-col bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Features courses={courses} />
        <SecondaryFeatures />
        <Footer />
      </main>
    </div>
  );
}
