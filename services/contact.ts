import { api } from "@/lib/api";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export const contactService = {
  sendMessage: (data: ContactFormData) => {
    return api.post("api/contact", data);
  },
};
