import Image from 'next/image';
import SignIn from './components/SignIn';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="hero bg-base-200 flex min-h-screen items-center justify-center">
      <div className="hero-content flex-col items-center">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form className="card-body">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={'/mylogo.svg'}
                className="animate-rotate-center mb-5"
                alt="My Logo"
                width={100}
                height={100}
                priority
              />
              <SignIn />
            </div>
          </form>
        </div>
        <ul className="menu bg-base-200 w-56 rounded-box">
          <li>
            <Link
              href={'/protect'}
              className="bg-clip-text hover:text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
            >
              認証後に見れるページ
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
