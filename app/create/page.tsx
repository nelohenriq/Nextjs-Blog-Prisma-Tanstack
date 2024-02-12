"use client";
import { FormInputPost } from "@/types";
import FormPost from "../components/FormPost";
import { SubmitHandler } from "react-hook-form";
import BackButton from "../components/BackButton";

const CreatePage = () => {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <BackButton />
      <h1 className="text-2xl font-bold my-4 text-center">Add new post</h1>
      <FormPost submit={handleCreatePost} isEditing={false} />
    </div>
  );
};

export default CreatePage;
