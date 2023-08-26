import { useAuth, useUser } from "@/context/authCtx";
import Link from "next/link";

export function Header() {
  const { logout } = useAuth();
  const { username } = useUser();

  return (
    <header className="flex items-center justify-between p-4 text-white bg-green-500">
      <div className="text-left">
        <p className="text-base font-semibold">
          Welcome {username} {"  "}
        </p>
      </div>
      <h1 className="text-3xl font-extrabold font-serif">Cookie Stand Admin</h1>
      <button
        onClick={logout}
        className="px-3 py-1 font-bold text-white bg-green-600 rounded hover:bg-green-800"
      >
        Sign Out
      </button>
    </header>
  );
}
