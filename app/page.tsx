import { LINKS, IMAGES } from '../lib/constants';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 font-sans">
      <main className="flex flex-col items-center justify-center text-center px-6 py-12 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          AWFixer Games
        </h1>
        <p className="text-xl md:text-2xl text-blue-200 mb-2">
          by AWFixer and Friends
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-8">
          Coming Soon
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-lg">
          Get ready for an exciting collection of games crafted with passion and creativity.
          Stay tuned for updates and join our community!
        </p>
        <a
          href={LINKS.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Join Our Discord
        </a>
      </main>
    </div>
  );
}
