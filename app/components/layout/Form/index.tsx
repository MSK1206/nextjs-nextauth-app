'use client';
import { DefaultSession } from 'next-auth';

type Props = {
  user: DefaultSession['user'];
};

export default function Form({ user }: Props) {
  return (
    <form className="card-body">
      <div>
        <p className="head text-center">Login User</p>
        <h5 className="card-title">{user?.name}</h5>
        <h5 className="card-title">{user?.email}</h5>
      </div>
    </form>
  );
}
