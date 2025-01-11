import { useEffect } from "react";
import { useRouter } from "next/router";
import { SignedIn, SignedOut, useUser, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Dashboard() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!SignedIn) {
      router.push("/");
    }
  }, [router]);

  return (
    <SignedIn>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Header */}
        <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white dark:bg-gray-800">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Dashboard</h1>
          <div className="flex items-center gap-4">
            {/* User Information */}
            {user?.profileImageUrl && (
              <Image
                src={user.profileImageUrl}
                alt="User Avatar"
                className="rounded-full"
                width={40}
                height={40}
              />
            )}
            <div className="text-sm">
              <p className="font-medium">{user?.firstName} {user?.lastName}</p>
              <p className="text-gray-500">{user?.emailAddresses[0]?.emailAddress}</p>
            </div>
            {/* Logout Button */}
            <SignOutButton>
              <button className="rounded-full bg-red-600 text-white hover:bg-red-700 transition px-4 py-2 text-sm font-medium shadow-md">
                Logout
              </button>
            </SignOutButton>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <section className="col-span-1 md:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-2">Welcome, {user?.firstName}!</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Here's a quick overview of your family tree activity.
              </p>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-gray-800 p-4 text-center text-sm text-gray-600 dark:text-gray-400">
          &copy; 2025 Family Tree App. All rights reserved.
        </footer>
      </div>
    </SignedIn>
  );
}
