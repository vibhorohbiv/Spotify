import Head from "next/head";

// Components
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main>
        {/* Sidebar */}
        <Sidebar />
        {/* Content */}
      </main>

      <div>{/* Bottom Player */}</div>
    </div>
  );
}
