import Image from 'next/image';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="relative h-96 w-full">
            <Image
              src="/images/blog/lostgecko.jpg"
              alt="Lost Gecko"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Content Section */}
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              My Gecko&apos;s New Home
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                Hi! I have some news today: my gecko has escaped! UGH… so I have to look for her under the chairs, tables and I see nothing. Yes, I&apos;m a master of finding and catching geckos but I can&apos;t find her! WHY? Because she is an even bigger master of disguise!
              </p>
              
              <p className="text-xl leading-relaxed">
                So, I will look for that ninja everywhere in my house… It will be a bit difficult to find in the morning so I will look for her at night. I think she will be under the stairs, behind my bookshelf or on the wall.
              </p>
              
              <p className="text-xl leading-relaxed">
                Hmm… If I find her, I will teach her not to escape anymore! Oh I forget that geckos can&apos;t understand humans! Okay, if I find her, I will make a terrarium that will be enormous for her to play in and… it will have a door!
              </p>
            </div>
            
            {/* Post Metadata */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-sm text-gray-500">
                    Posted on {new Date().toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                    Gecko Stories
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    Pet Adventures
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 