import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">GB Caterers & Decorator</h1>
        <nav>
          <Link href="/" legacyBehavior>
            <a className="mx-4 text-gray-300 hover:text-white">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="mx-4 text-gray-300 hover:text-white">About</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="mx-4 text-gray-300 hover:text-white">Contact</a>
          </Link>
          <Link href="/menu" legacyBehavior>
            <a className="mx-4 text-gray-300 hover:text-white">Menu</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
