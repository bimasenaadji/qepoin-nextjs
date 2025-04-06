import { z } from "zod";

export const passwordSchema = z
  .string({ message: "Password wajib di isi" })
  .min(8, { message: "Password minimal 8 karakter" })
  .regex(/[a-z]/, { message: "Password minimal 1 huruf kecil" })
  .regex(/[A-Z]/, { message: "Password minimal 1 huruf besar" })
  .regex(/[0-9]/, { message: "Password minimal 1 angka" });

export const emailSchema = z
  .string({ message: "Email wajib di isi !" })
  .email({ message: "Format email salah" });
