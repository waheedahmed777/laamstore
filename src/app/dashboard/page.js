'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(null); // null = loading
  const [mounted, setMounted] = useState(false); // client mounted flag

  useEffect(() => {
    setMounted(true); // client mounted
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const logged = localStorage.getItem('isLoggedIn');
    if (logged === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      router.replace('/login'); // redirect immediately
    }
  }, [mounted, router]);

  if (!mounted || isLoggedIn === null) {
    // wait until client mounted and login checked
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) return null; // not logged in, redirect triggered

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
}
