import {Button} from "@/components/ui/button";
import {Link} from "@tanstack/react-router";


export default function Login() {
  return (
    <div className="min-h-screen gap-1 flex flex-col items-center justify-center">
      <p className="text-3xl">Coming Soon</p>
      <p className="text-gray-400 mb-8">Muslim Habit</p>
      <Button className="bg-yellow-400 hover:bg-yellow-600">
        <Link to="/dashboard">Go to Dashboard</Link>
      </Button>
    </div>
  )
}