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

export default function Learn() {
  return (
    <div className="hidden flex-col md:flex">
      <Card className="col-span-3 border-0">
        <CardHeader>
          <CardTitle className="font-nanum text-3xl">Learning hub will be here</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
