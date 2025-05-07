export default function TokayGeckosPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Tokay Geckos</h1>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Diet</h2>
            <p className="text-gray-700">
              Tokay geckos eat insects and sometimes even house lizards.
              Some enormous ones can even eat mice!
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Habitat</h2>
            <p className="text-gray-700 mb-4">
              They live in houses, forests, and jungles.
              You can see them in dark and a bit wet places, even inside air conditioners. 
              I once saw one in mine!
            </p>
            <p className="text-gray-700 mb-4">
              They don't like sunlight or cold weather.
              Their favorite place to hide is inside tree cavities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Size</h2>
            <p className="text-gray-700 mb-4">
              The adult length is about 27 centimeters:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Body: 15 cm</li>
              <li>Tail: 12 cm</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Reproduction</h2>
            <p className="text-gray-700 mb-4">
              Males are usually bigger than females.
              After mating, the female lays 2–4 eggs.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 