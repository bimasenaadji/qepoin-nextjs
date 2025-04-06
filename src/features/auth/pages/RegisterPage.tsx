import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PageContainer } from "~/components/layout/PageContainer";
import { SectionContainer } from "~/components/layout/SectionContainer";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { Form } from "~/components/ui/form";
import { type RegisterFormSchema, registerFormSchema } from "../forms/register";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import RegisterFormInner from "../components/RegisterFormInner";

const RegisterPage = () => {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleRegisterSubmit = (values: RegisterFormSchema) => {
    alert("Register !!!");
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <PageContainer>
      <SectionContainer
        padded
        className="flex min-h-[calc(100vh-144px)] w-full justify-center"
      >
        <Card className="max-w-[480px] self-center w-full">
          <CardHeader className="flex flex-col items-center justify-center">
            <h1 className="text-primary text-3xl font-bold">Buat Akun</h1>
            <p className="text-muted-foreground">Qepoin kreator favorit kamu</p>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <RegisterFormInner onRegisterSubmit={handleRegisterSubmit} />
            </Form>

            {/* Continue with google */}
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <div className="flex w-full items-center justify-between gap-x-3">
              <div className="h-[2px] w-full border-t" />
              <p className="text-foreground text-nowrap text-sm">
                Atau lanjut dengan
              </p>
              <div className="h-[2px] w-full border-t" />
            </div>

            <Button variant="secondary" className="w-full" size="lg">
              <FcGoogle />
              Buat akun dengan Google
            </Button>

            <p>
              Sudah punya akun ?
              <Link href="/login" className="font-bold text-purple-500">
                P, Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
};

export default RegisterPage;
