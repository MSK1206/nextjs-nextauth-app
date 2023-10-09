import Image from 'next/image';
import SignIn from './api/SignIn';

export default function Home() {
  return (
    <main className="hero bg-base-200 flex min-h-screen items-center justify-center">
      <div className="hero-content flex-col items-center">
        <div className="text-center">
          <Image
            src={'/mylogo.svg'}
            className="animate-rotate-center"
            alt="My Logo"
            width={150}
            height={150}
            priority
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <SignIn />
        </div>
      </div>
    </main>
  );
}
