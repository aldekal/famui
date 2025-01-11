"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  const { isSignedIn } = useUser(); // Clerk-Hook, um den Anmeldestatus zu prüfen
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      // Weiterleitung zum Dashboard, wenn der Benutzer angemeldet ist
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <header className="flex justify-between items-center w-full p-4">
        <div className="flex items-center gap-4">
          <Image
            src="/family-tree-logo.webp"
            alt="Family Tree App Logo"
            width={50}
            height={50}
            priority
          />
          <h1 className="text-2xl font-bold">Family Tree App</h1>
        </div>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton>
              <button className="rounded-full bg-blue-600 text-white hover:bg-blue-700 transition px-4 py-2 text-sm font-medium shadow-md">
                Login
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition px-4 py-2 text-sm font-medium shadow-md">
                Signup
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
            <SignOutButton>
              <button className="rounded-full bg-red-600 text-white hover:bg-red-700 transition px-4 py-2 text-sm font-medium shadow-md">
                Logout
              </button>
            </SignOutButton>
          </SignedIn>
        </div>
      </header>

      <main className="flex flex-col items-center gap-8">
        <header className="flex flex-col items-center gap-4">
          <Image
            src="/family-tree-logo.webp"
            alt="Family Tree App Logo"
            width={150}
            height={150}
            priority
          />
          <h1 className="text-3xl font-bold text-center">Welcome to the family tree app</h1>
          <p className="text-lg text-center max-w-xl">
            Create, edit and share your family tree with your family. Manage important events and discover your family history.
          </p>
        </header>

        <section className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col items-center">
            <Image
              src="/tree.webp"
              alt="Stammbaum Visualisierung"
              width={200}
              height={200}
            />
            <h2 className="text-xl font-semibold mt-4">Intuitive family tree creation</h2>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Draw and organise your family structure with ease.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/calendar.webp"
              alt="Kalender mit Ereignissen"
              width={200}
              height={200}
            />
            <h2 className="text-xl font-semibold mt-4">Calendar of events</h2>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Manage birthdays, anniversaries and other important family events.
            </p>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center gap-4 text-center text-sm">
        <p>&copy; 2025 Family Tree App. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
