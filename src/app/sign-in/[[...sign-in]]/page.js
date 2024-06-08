import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center md:pt-20 pt-10">
      <SignIn />
    </div>
  );
}