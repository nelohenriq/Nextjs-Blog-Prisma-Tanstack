"use client";
import { FormInputPost } from "@/types";
import FormPost from "@/app/components/FormPost";
import { SubmitHandler } from "react-hook-form";

const EditPage = () => {
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold my-4 text-center">Edit post</h1>
      <FormPost submit={handleEditPost} />
    </div>
  );
};

export default EditPage;
