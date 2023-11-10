import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useState} from "react";
import {account} from "@/lib/database";
import {useNavigate} from "@tanstack/react-router";

export function LoginForm() {
  const navigate = useNavigate()
  const [value, setValue] = useState({})

  function handleEmail(e) {
    setValue({ ...value, email: e.target.value })
  }

  function handlePassword(e) {
    setValue({ ...value, password: e.target.value })
  }
  async function handleSignIn(e) {
    e.preventDefault()
    try {
      const res = await account.createEmailSession(value.email, value.password);
      await navigate({ to: '/app' })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Card className="rounded-3xl border-transparent shadow-lg px-11 py-12">
      <CardHeader className="space-y-1 p-0 pb-6">
        <CardTitle className="text-3xl font-medium text-gray-700">Log in</CardTitle>
        <CardDescription>
          Sign in if you already have an account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 py-6 px-0">
        {/*<div className="grid grid-cols-2 gap-6">*/}
          {/*<Button variant="outline">*/}
          {/*  <Icons.gitHub className="mr-2 h-4 w-4" />*/}
          {/*  Github*/}
          {/*</Button>*/}
          {/*<Button variant="outline">*/}
          {/*  <Icons.google className="mr-2 h-4 w-4" />*/}
          {/*  Google*/}
          {/*</Button>*/}
        {/*</div>*/}
        {/*<div className="relative">*/}
        {/*  <div className="absolute inset-0 flex items-center">*/}
        {/*    <span className="w-full border-t" />*/}
        {/*  </div>*/}
        {/*  <div className="relative flex justify-center text-xs uppercase">*/}
        {/*    <span className="bg-background px-2 text-muted-foreground">*/}
        {/*      Or continue with*/}
        {/*    </span>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="grid gap-2">
          {/*<Label htmlFor="email">Email</Label>*/}
          <Input className="placeholder-gray-300 text-md font-normal" id="email" type="email" placeholder="Email" onChange={(e) => handleEmail(e)}/>
        </div>
        <div className="grid gap-2">
          {/*<Label htmlFor="password">Password</Label>*/}
          <Input className="placeholder-gray-300" id="password" type="password" placeholder="Password" onChange={(e) => handlePassword(e)}/>
        </div>
      </CardContent>
      <CardFooter className="py-6 px-0">
        <Button className="w-full" onClick={(e) => handleSignIn(e)}>Sign in</Button>
      </CardFooter>
    </Card>
  )
}