import Spinner from "@/components/Spinner/Spinner";
import Toast from "@/components/Toast/Toast";
import Login from "../components/Login/Login";

export default function Home() {
  return (
    <div>
      <Toast></Toast>
      <Spinner></Spinner>
      <Login></Login>
    </div>
  )
}
