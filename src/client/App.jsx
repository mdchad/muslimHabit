import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {Account, Client} from 'appwrite';
import { v4 as uuidv4 } from 'uuid'
import "./App.css";
import {Button} from "@/components/ui/button";

const client = new Client();

const account = new Account(client);

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('65389bd4e61d5ac674fa');

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState({})

  function handleEmail(e) {
    setValue({ ...value, email: e.target.value })
  }

  function handlePassword(e) {
    setValue({ ...value, password: e.target.value })
  }

  async function submitForm(e) {
    e.preventDefault()
    try {
      const res = await account.create(uuidv4(), value.email, value.password);
      console.log(res)
    } catch (err) {
      console.log('errr', err)
    }
  }

  return (
    <div className="App">
      <Button>Submit</Button>
    </div>
  );
}

export default App;
