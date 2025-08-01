"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PlusIcon } from "lucide-react";

import Sidebar from "@/components/dashboard/Sidebar";
import EditorHeader from "@/components/dashboard/EditorHeader";
import EditorArea from "@/components/dashboard/EditorArea";

type Note = {
  id: number;
  title: string;
  content: string;
};

const initialNotes: Note[] = [
  {
    id: 1,
    title: "Welcome note",
    content: "# Welcome!\nStart editing or create a new note.",
  },
];

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login-register?mode=login");
    }
  }, [router]);

  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null);
  const [tab, setTab] = useState<"edit" | "preview">("edit");

  const selectedNote = notes.find((n) => n.id === selectedNoteId);

  const handleCreateNote = () => {
    const newNote: Note = {
      id: Date.now(),
      title: `New Note ${notes.length + 1}`,
      content: "",
    };
    setNotes([newNote, ...notes]);
    setSelectedNoteId(newNote.id);
    setTab("edit");
  };

  const handleSelectNote = (id: number) => {
    setSelectedNoteId(id);
    setTab("edit");
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedContent = e.target.value;
    setNotes((prev) =>
      prev.map((note) =>
        note.id === selectedNoteId ? { ...note, content: updatedContent } : note
      )
    );
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      <Sidebar
        notes={notes}
        selectedNoteId={selectedNoteId}
        onSelectNote={handleSelectNote}
        onCreateNote={handleCreateNote}
      />

      <main className="flex-1 flex flex-col">
        {!selectedNote ? (
          <div className="flex flex-col items-center justify-center flex-1 px-6">
            <h2 className="text-3xl font-semibold mb-4">
              Open a note or create one
            </h2>
            <button
              onClick={handleCreateNote}
              className="rounded bg-green-600 text-white px-6 py-3 hover:bg-green-700 transition cursor-pointer flex items-center"
            >
              <PlusIcon className="mr-2 w-5" />
              Create a new note
            </button>
          </div>
        ) : (
          <>
            <EditorHeader
              title={selectedNote.title}
              tab={tab}
              setTab={setTab}
            />
            <EditorArea
              tab={tab}
              content={selectedNote.content}
              onChange={handleContentChange}
            />
          </>
        )}
      </main>
    </div>
  );
}
