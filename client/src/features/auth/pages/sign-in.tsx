import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { signInSchema } from "../validator/auth";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: signInSchema,
    },
    onSubmit: async () => {},
  });
  return (
    <div className="w-full sm:max-w-md">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-center">Welcome back</h2>
        <p className="text-sm text-muted-foreground text-center">
          Enter your details to access your account.
        </p>
      </div>

      <div className="space-y-3 mb-4">
        <Button className="w-full" variant="custom">
          <span className="mr-2 size-8">
            <img src="/src/assets/google.svg" alt="Google" />
          </span>
          Continue with Google
        </Button>
        <Button className="w-full" variant="custom">
          <span className="mr-2 size-8">
            <img src="/src/assets/microsoft.svg" alt="Microsoft" />
          </span>
          Continue with Microsoft
        </Button>

        <div className="flex items-center gap-3">
          <hr className="flex-1" />
          <span className="text-xs uppercase text-muted-foreground">
            Or continue with
          </span>
          <hr className="flex-1" />
        </div>
      </div>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup>
          <form.Field
            name="email"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid} className="mb-4">
                  <FieldLabel htmlFor={field.name}>Email address</FieldLabel>
                  <Input
                    className="input"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="name@company.com"
                    autoComplete="email"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          <form.Field
            name="password"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid} className="mb-2">
                  <div className="flex items-center justify-between">
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  </div>
                  <div className="relative">
                    <Input
                      className="input pr-10"
                      id={field.name}
                      name={field.name}
                      type={showPassword ? "text" : "password"}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      aria-pressed={showPassword}
                      className="absolute inset-y-0 right-2 flex items-center justify-center p-1 text-primary-600"
                    >
                      {showPassword ? (
                        <EyeOff className="size-4" />
                      ) : (
                        <Eye className="size-4" />
                      )}
                    </button>
                  </div>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
        </FieldGroup>

        <div className="pt-2">
          <Button
            type="submit"
            variant="custom"
            className="w-full bg-indigo-700 text-white"
          >
            Sign in to Dashboard
          </Button>
        </div>
      </form>

      <div className="mt-4">
        <div className="w-full text-center mt-3 text-sm">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-primary-600">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
