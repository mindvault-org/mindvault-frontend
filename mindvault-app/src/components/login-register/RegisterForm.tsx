export default function RegisterForm() {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Prénom"
        className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="text"
        placeholder="Nom"
        className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="email"
        placeholder="Adresse e-mail"
        className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="password"
        placeholder="Mot de passe"
        className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-tr from-[#D56434] to-[#6D66E7] text-white py-2 rounded-lg font-medium hover:opacity-90 transition-all"
      >
        Register
      </button>
    </form>
  );
}
