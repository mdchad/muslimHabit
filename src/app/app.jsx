import { useState } from "react";
import {Button} from "@/components/ui/button";
import {Link} from "@tanstack/react-router";

function App() {
  return (
    <div className="min-h-screen gap-1 flex flex-col items-center justify-center">
      <p className="text-4xl font-nanum">Coming Soon</p>
      <p className="text-gray-400 mb-8">Muslim Habit</p>
      <Button className="bg-yellow-400 hover:bg-yellow-600">
        <Link to="/login">Log In</Link>
      </Button>
    </div>
  );
}

export default App;
