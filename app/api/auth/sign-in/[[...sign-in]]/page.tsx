import { SignIn } from '@clerk/nextjs';

function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-4">
        <SignIn />
      </div>
    </div>
  );
}

export default Page;
