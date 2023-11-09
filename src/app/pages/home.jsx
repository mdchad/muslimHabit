import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Overview } from "@/components/overview"
import { HabitList } from "@/components/habit-list"
import {Button} from "@/components/ui/button";
import {Dialog, DialogClose, DialogTrigger} from "@radix-ui/react-dialog";
import {DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useMutation} from "@tanstack/react-query";
import { ID } from "appwrite";
import {databases} from "@/lib/database";
import {useState} from "react";

export default function Home() {
  const [value, setValue] = useState()

  const mutation = useMutation({
    onSuccess: (data) => {
      console.log(data)
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
    <div className="hidden flex-col md:flex">
      {/*<div className="border-b">*/}
      {/*  <div className="flex h-16 items-center px-4">*/}
      {/*    <TeamSwitcher />*/}
      {/*    <MainNav className="mx-6" />*/}
      {/*    <div className="ml-auto flex items-center space-x-4">*/}
      {/*      <Search />*/}
      {/*      <UserNav />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="flex-1 space-y-4 p-8 pt-6">
        {/*<div className="flex items-center justify-between space-y-2">*/}
        {/*  <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>*/}
        {/*  <div className="flex items-center space-x-2">*/}
        {/*    <CalendarDateRangePicker />*/}
        {/*    <Button>Download</Button>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <Tabs defaultValue="overview" className="space-y-4">
          {/*<TabsList>*/}
          {/*  <TabsTrigger value="overview">Overview</TabsTrigger>*/}
          {/*  <TabsTrigger value="analytics" disabled>*/}
          {/*    Analytics*/}
          {/*  </TabsTrigger>*/}
          {/*  <TabsTrigger value="reports" disabled>*/}
          {/*    Reports*/}
          {/*  </TabsTrigger>*/}
          {/*  <TabsTrigger value="notifications" disabled>*/}
          {/*    Notifications*/}
          {/*  </TabsTrigger>*/}
          {/*</TabsList>*/}
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Streak
                  </CardTitle>
                  {/*<svg*/}
                  {/*  xmlns="http://www.w3.org/2000/svg"*/}
                  {/*  viewBox="0 0 24 24"*/}
                  {/*  fill="none"*/}
                  {/*  stroke="currentColor"*/}
                  {/*  strokeLinecap="round"*/}
                  {/*  strokeLinejoin="round"*/}
                  {/*  strokeWidth="2"*/}
                  {/*  className="h-4 w-4 text-muted-foreground"*/}
                  {/*>*/}
                  {/*  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />*/}
                  {/*</svg>*/}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7 days</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              {/*<Card>*/}
              {/*  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">*/}
              {/*    <CardTitle className="text-sm font-medium">*/}
              {/*      Subscriptions*/}
              {/*    </CardTitle>*/}
              {/*    <svg*/}
              {/*      xmlns="http://www.w3.org/2000/svg"*/}
              {/*      viewBox="0 0 24 24"*/}
              {/*      fill="none"*/}
              {/*      stroke="currentColor"*/}
              {/*      strokeLinecap="round"*/}
              {/*      strokeLinejoin="round"*/}
              {/*      strokeWidth="2"*/}
              {/*      className="h-4 w-4 text-muted-foreground"*/}
              {/*    >*/}
              {/*      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />*/}
              {/*      <circle cx="9" cy="7" r="4" />*/}
              {/*      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />*/}
              {/*    </svg>*/}
              {/*  </CardHeader>*/}
              {/*  <CardContent>*/}
              {/*    <div className="text-2xl font-bold">+2350</div>*/}
              {/*    <p className="text-xs text-muted-foreground">*/}
              {/*      +180.1% from last month*/}
              {/*    </p>*/}
              {/*  </CardContent>*/}
              {/*</Card>*/}
              {/*<Card>*/}
              {/*  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">*/}
              {/*    <CardTitle className="text-sm font-medium">Sales</CardTitle>*/}
              {/*    <svg*/}
              {/*      xmlns="http://www.w3.org/2000/svg"*/}
              {/*      viewBox="0 0 24 24"*/}
              {/*      fill="none"*/}
              {/*      stroke="currentColor"*/}
              {/*      strokeLinecap="round"*/}
              {/*      strokeLinejoin="round"*/}
              {/*      strokeWidth="2"*/}
              {/*      className="h-4 w-4 text-muted-foreground"*/}
              {/*    >*/}
              {/*      <rect width="20" height="14" x="2" y="5" rx="2" />*/}
              {/*      <path d="M2 10h20" />*/}
              {/*    </svg>*/}
              {/*  </CardHeader>*/}
              {/*  <CardContent>*/}
              {/*    <div className="text-2xl font-bold">+12,234</div>*/}
              {/*    <p className="text-xs text-muted-foreground">*/}
              {/*      +19% from last month*/}
              {/*    </p>*/}
              {/*  </CardContent>*/}
              {/*</Card>*/}
              {/*<Card>*/}
              {/*  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">*/}
              {/*    <CardTitle className="text-sm font-medium">*/}
              {/*      Active Now*/}
              {/*    </CardTitle>*/}
              {/*    <svg*/}
              {/*      xmlns="http://www.w3.org/2000/svg"*/}
              {/*      viewBox="0 0 24 24"*/}
              {/*      fill="none"*/}
              {/*      stroke="currentColor"*/}
              {/*      strokeLinecap="round"*/}
              {/*      strokeLinejoin="round"*/}
              {/*      strokeWidth="2"*/}
              {/*      className="h-4 w-4 text-muted-foreground"*/}
              {/*    >*/}
              {/*      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />*/}
              {/*    </svg>*/}
              {/*  </CardHeader>*/}
              {/*  <CardContent>*/}
              {/*    <div className="text-2xl font-bold">+573</div>*/}
              {/*    <p className="text-xs text-muted-foreground">*/}
              {/*      +201 since last hour*/}
              {/*    </p>*/}
              {/*  </CardContent>*/}
              {/*</Card>*/}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              {/*<Card className="col-span-4">*/}
              {/*  <CardHeader>*/}
              {/*    <CardTitle>Overview</CardTitle>*/}
              {/*  </CardHeader>*/}
              {/*  <CardContent className="pl-2">*/}
              {/*    <Overview />*/}
              {/*  </CardContent>*/}
              {/*</Card>*/}
              <Card className="col-span-3 border-0">
                <CardHeader>
                  <CardTitle>Today's habit</CardTitle>
                  <CardDescription className="flex justify-between">
                    Finish your habit!
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
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <HabitList />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
