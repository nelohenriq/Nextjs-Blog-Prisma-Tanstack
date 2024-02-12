"use client";
import { FormInputPost } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing?: boolean;
}

const FormPost: React.FC<FormPostProps> = ({ submit, isEditing }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputPost>();

  // Fetch tags
  const { data: dataTags, isLoading: isLoadingTags } = useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const res = await fetch("/api/tags");
      const data = await res.json();
      return data;
    },
  });
  console.log(dataTags);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
    >
      <input
        type="text"
        {...register("title", { required: true })}
        placeholder="Post title..."
        className="input input-bordered w-full max-w-lg"
      />
      <textarea
        {...register("content", { required: true })}
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Post content..."
      ></textarea>
      <select
        defaultValue={""}
        {...register("tags", { required: true })}
        className="select select-bordered w-full max-w-lg"
      >
        <option value="select tags">Select tags</option>
        <option value="public">Javascript</option>
        <option value="private">PHP</option>
        <option value="private">Python</option>
      </select>
      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormPost;
