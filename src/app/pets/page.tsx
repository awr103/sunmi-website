import Image from "next/image";

export default function PetsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About My Pets</h1>

      <div className="space-y-12">
        <section className="bg-white rounded-lg shadow-sm p-6">
          {/* Header gecko image */}
          <div className="flex justify-center mb-4">
            <Image
              src="/images/gecko1.png"
              alt="My baby tokay gecko header"
              width={240}
              height={144}
              className="object-cover rounded-lg mx-auto"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">My Baby Tokay Gecko</h2>
          <div className="prose prose-lg">
            <p className="text-gray-700 mb-4">
              My gecko is a female. She is small and has many colors like grey, white, and red.
              She is intelligent and active. She loves to eat mealworms and crickets.
            </p>
            <p className="text-gray-700 italic mb-2">
              Can you see her? She is a master of disguise!
            </p>
            {/* Hidden gecko image */}
            <div className="flex justify-center mb-4">
              <Image
                src="/images/gecko2.png"
                alt="Gecko hiding in a chair"
                width={240}
                height={144}
                className="object-cover rounded-lg mx-auto"
              />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">My Fish</h2>
          <p className="text-gray-700 mb-4">
            My fish like to eat fish food and sometimes even ants.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Image
              src="/images/fish1.jpg"
              alt="My fish"
              width={180}
              height={120}
              className="object-cover rounded-lg mx-auto"
            />
            <Image
              src="/images/fish2.jpg"
              alt="My fish"
              width={180}
              height={120}
              className="object-cover rounded-lg mx-auto"
            />
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">My Past Pets</h2>
          <div className="prose prose-lg">
            <p className="text-gray-700">
              A long time ago, when I was seven years old, I had some caterpillars. 
              They were soft and fat, and some had furs.
              If you touch their fur, you can feel very itchy!
              I fed them leaves.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 