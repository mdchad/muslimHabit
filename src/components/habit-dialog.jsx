import {Dialog, DialogClose, DialogTrigger} from "@radix-ui/react-dialog";
import {Button} from "@/components/ui/button";
import {DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useState} from "react";
import {databases} from "@/lib/database";
import {ID} from "appwrite";


export function HabitDialog() {
  const queryClient = useQueryClient()
  const [value, setValue] = useState()

  const mutation = useMutation({
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ['habits'],
      })
      // Handle success
    },
    onError: () => {
      // Handle error
    },
    onSettled: () => {
      // Handle completion
    },
    mutationFn: async (data) => {
      return await databases.createDocument(
        "654cc8ef00d04f595b07",
        "654cc905b7688e101eff",
        ID.unique(),
        data
      );
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Add new Habit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Habit</DialogTitle>
          <DialogDescription>
            Create new habit here. Click save when you're done
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Solat"
              className="col-span-3"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={() => mutation.mutate({ name: value })}>Submit</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}