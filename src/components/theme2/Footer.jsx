export default function Footer() {
  return (
    <footer className="bg-indigo-800 text-white text-center py-6 mt-10">
      <p className="text-lg font-semibold">Made with 💖 by Kuldeep Singh Arya</p>
      <p className="text-sm mt-1">
        &copy; {new Date().getFullYear()} Kuldeep.dev — All rights reserved.
      </p>
    </footer>
  );
}
