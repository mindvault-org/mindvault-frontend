"use client";

export default function EditorHeader({
  title,
  tab,
  setTab,
}: {
  title: string;
  tab: "edit" | "preview";
  setTab: (tab: "edit" | "preview") => void;
}) {
  return (
    <header className="flex items-center border-b border-gray-300 px-14 py-3 bg-white">
      <h2 className="flex-1 text-xl font-semibold">{title}</h2>
      <nav className="flex space-x-4">
        <button
          onClick={() => setTab("edit")}
          className={`py-1 px-3 rounded ${
            tab === "edit"
              ? "bg-gradient-to-tr from-[#D56434] to-[#6D66E7] text-white py-2 rounded hover:opacity-90 transition cursor-pointer"
              : "hover:bg-indigo-100 text-gray-700 transition cursor-pointer"
          }`}
        >
          Edit
        </button>
        <button
          onClick={() => setTab("preview")}
          className={`py-1 px-3 rounded ${
            tab === "preview"
              ? "bg-gradient-to-tr from-[#D56434] to-[#6D66E7] text-white py-2 rounded hover:opacity-90 transition cursor-pointer"
              : "hover:bg-indigo-100 text-gray-700 transition cursor-pointer"
          }`}
        >
          Preview
        </button>
      </nav>
    </header>
  );
}
