import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-around p-4 fixed backdrop-blur-md shadow-md">
      <div>icon</div>
      <Button>Hello</Button>
    </div>
  );
}
