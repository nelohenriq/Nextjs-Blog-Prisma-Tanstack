"use client";
import { FormInputPost } from "@/types";
import FormPost from "../components/FormPost";
import { SubmitHandler } from "react-hook-form";

const CreatePage = () => {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold my-4 text-center">Add new post</h1>
      <FormPost submit={handleCreatePost} />
    </div>
  );
};

export default CreatePage;
