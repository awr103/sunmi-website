import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to my world of gardens, geckos, and bugs!
        </h1>
        <p className="text-xl text-gray-600">
          Scroll down or click the menu to learn more about me and my favorite animals.
        </p>
      </div>

      {/* Hero Image - gecko3.jpg */}
      <div className="mb-12 flex items-center justify-center">
        <Image
          src="/images/gecko3.jpg"
          alt="A beautiful tokay gecko"
          width={400}
          height={240}
          className="object-cover rounded-lg mx-auto"
          priority
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">My Garden</h2>
          <p className="text-gray-600">
            Discover my beautiful garden filled with moss, water lilies, mango trees, 
            and many other fascinating plants.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">My Pets</h2>
          <p className="text-gray-600">
            Meet my wonderful pets including my baby tokay gecko, fish, and isopods.
          </p>
        </div>
      </div>
    </div>
  );
}
