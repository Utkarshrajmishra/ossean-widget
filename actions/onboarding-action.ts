"use server";
import { z } from "zod";

export const initialProjectState = {
  name: "",
  url: "",
};

const schema = z.object({
  name: z.string().min(1, "Name is required."),
  url: z.string().min(1, "Website URL is required.").url("Invalid URL."),
});

interface FormState {
  message?: Record<string, string[]>;
  values?: {
    name: string;
    url: string;
  };
  success:boolean
}

export const formAction = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const dataToValidate = Object.fromEntries(formData.entries());
  const validation = schema.safeParse(dataToValidate);
if (!validation.success) {
    return {
      message: validation.error.flatten().fieldErrors,
      values: {
        name: String(dataToValidate.name || ""),
        url: String(dataToValidate.url || ""),
      },
      success:false
    };
  }

  
  const values = validation.data;

  return {
    message: undefined,
    values,
    success:true
  };
}

