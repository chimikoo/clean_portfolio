export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 py-6">
      <div className="w-full px-4 md:px-6 h-1 flex items-center justify-between mx-auto">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Per-Emil Johansson. All rights reserved.</p>
        <p className="text-sm text-gray-400">Designed & Built with ❤️</p>
      </div>
    </footer>
  );
}