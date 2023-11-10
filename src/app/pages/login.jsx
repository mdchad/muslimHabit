import {Button} from "@/components/ui/button";
import {Link} from "@tanstack/react-router";


import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { LoginForm } from "@/components/login-form"

export default function AuthenticationPage() {
  return (
    <div className="min-h-screen gap-1 flex flex-col items-center justify-center bg-gradient-to-r from-cyan-100 to-blue-100">
      <div className="max-w-[400px] w-full">
        <LoginForm />
      </div>
    </div>
  )
}