import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthState, setAuthState } from '@/store/features/auth';
import Header from '@/components/header';

export default function Home() {
  const authState = useSelector(selectAuthState);

  return (
    <main className=" w-full min-h-screen ">
      <Header />
      <div className="p-5">
        <p>Home</p>
      </div>
    </main>
  );
}
