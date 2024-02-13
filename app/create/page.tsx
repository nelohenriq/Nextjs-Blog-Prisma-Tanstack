"use client";
import { FormInputPost } from "@/types";
import FormPost from "../components/FormPost";
import { SubmitHandler } from "react-hook-form";
import BackButton from "../components/BackButton";

const CreatePage = () => {
  const handleCreatePost: SubmitHandler<FormInputPost> = async (data) => {
    try {
      const response = await fetch("/api/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Error while creating post");

      const result = await response.json();

      // Handle the response, e.g. by updating the state or redirecting the
    } catch (error) {
      console.log("Failed to create post:", error);
    }
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
