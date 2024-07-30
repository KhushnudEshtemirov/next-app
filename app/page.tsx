"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import "./styles.scss";

const schema = z.object({
  email: z.string().email("Enter valid email address"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(15, { message: "Password must be less than 15 characters" }),
});

type FormFields = z.infer<typeof schema>;

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const handleFormSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <div className="p-5">
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="tutorial">
        <input {...register("email")} type="text" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input {...register("password")} type="password" />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
