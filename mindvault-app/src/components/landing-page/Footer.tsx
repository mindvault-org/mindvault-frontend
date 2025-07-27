export default function Footer() {
  return (
    <footer className="py-10 px-6 sm:px-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
      <div className="max-w-4xl mx-auto">
        <p>&copy; {new Date().getFullYear()} MindVault. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-6 text-zinc-400">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
