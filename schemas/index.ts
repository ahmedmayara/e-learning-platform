import { ERole } from "@/types";
import * as z from "zod";

export const SignInSchema = z.object({
  email: z
    .string({
      required_error: "البريد الإلكتروني مطلوب",
      invalid_type_error: "يجب أن يكون البريد الإلكتروني نص",
    })
    .email({ message: "يجب أن يكون البريد الإلكتروني صحيحاً" }),
  password: z
    .string({
      required_error: "كلمة المرور مطلوبة",
      invalid_type_error: "يجب أن تكون كلمة المرور نص",
    })
    .min(8, { message: "يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل" }),
});

export const SignUpSchema = z.object({
  email: z
    .string({
      required_error: "البريد الإلكتروني مطلوب",
      invalid_type_error: "يجب أن يكون البريد الإلكتروني نص",
    })
    .email({ message: "يجب أن يكون البريد الإلكتروني صحيحاً" }),
  password: z
    .string({
      required_error: "كلمة المرور مطلوبة",
      invalid_type_error: "يجب أن تكون كلمة المرور نص",
    })
    .min(8, { message: "يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل" }),
  confirmPassword: z.string({
    required_error: "تأكيد كلمة المرور مطلوب",
    invalid_type_error: "يجب أن تكون تأكيد كلمة المرور نص",
  }),
  name: z
    .string({
      required_error: "الاسم مطلوب",
      invalid_type_error: "يجب أن يكون الاسم نص",
    })
    .min(2, { message: "يجب أن يحتوي الاسم على حرفين على الأقل" }),
  role: z.nativeEnum(ERole, {
    required_error: "الدور مطلوب",
    invalid_type_error: "الدور غير صحيح",
  }),
});

export type SignInValues = z.infer<typeof SignInSchema>;
export type SignUpValues = z.infer<typeof SignUpSchema>;
