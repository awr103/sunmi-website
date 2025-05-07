import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
      
      <div className="prose prose-lg">
        <p className="text-gray-700 mb-6">
          Hi, my name is Earthworm. I live in Vietnam and I have a big garden. 
          My garden has many types of plants like moss, grass, water lily, mango, 
          papaya, and more—but I like moss the most!
        </p>

        <p className="text-gray-700 mb-6">
          I catch many insects and small creatures in my garden. I'm a big fan of 
          isopods, fish, beetles, leopard geckos, knob-tailed geckos, and tokay geckos.
        </p>

        <p className="text-gray-700 mb-6">
          I also love amphibians.
        </p>

        <p className="text-gray-700 mb-6">
          Right now, I'm learning English and French!
        </p>

        {/* Profile Image - smaller and centered */}
        <div className="mt-12 flex justify-center">
          <Image
            src="/images/Sonmi.jpg"
            alt="Sunmi's profile picture"
            width={320}
            height={240}
            className="object-cover rounded-lg mx-auto"
          />
        </div>
      </div>
    </div>
  )
} 