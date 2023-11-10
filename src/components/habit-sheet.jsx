import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'
import { useNavigate } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'

export function HabitSheet({ useRouteContext }) {
  const navigate = useNavigate({ from: '/app' })
  const { queryOptions } = useRouteContext()
  const { isLoading, isError, data, error } = useQuery(queryOptions)

  async function onChange(s) {
    if (s === false) {
      await navigate({ to: '/app' })
    }
  }

  return (
    <Sheet defaultOpen={true} onOpenChange={onChange}>
      {/*<SheetTrigger asChild>*/}
      {/*  <Button variant="outline">Open</Button>*/}
      {/*</SheetTrigger>*/}
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue={data?.name} className="col-span-3" />
          </div>
          {/*<div className="grid grid-cols-4 items-center gap-4">*/}
          {/*  <Label htmlFor="username" className="text-right">*/}
          {/*    Username*/}
          {/*  </Label>*/}
          {/*  <Input id="username" className="col-span-3" />*/}
          {/*</div>*/}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
