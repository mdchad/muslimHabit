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
import {HabitDialog} from "@/components/habit-dialog";


export default function Home({ useRouteContext }) {
  return (
    <div className="flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Streak
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7 days</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-3 border-0">
                <CardHeader>
                  <CardTitle className="font-nanum text-3xl">Today's habit</CardTitle>
                  <CardDescription className="flex justify-between">
                    Finish your habit!
                    <HabitDialog />
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <HabitList useRouteContext={useRouteContext}/>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
