import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 -mx-6 -my-8 md:-mx-8 md:-my-12 px-6 py-8 md:px-8 md:py-12">
      <div className="space-y-16">
        <section>
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Roy-André</h1>
          <div className="space-y-4 text-lg text-neutral-700">
            <p>
              I'm a technologist, entrepreneur, and investor based in Sandnes, Norway. I enjoy building products and
              companies that solve real-world problems, using technology.
            </p>
            <p>This website is a collection of my thoughts, projects, and things I'm currently exploring.</p>
            <p>
              In my day-to-day life I'm the CEO of Flow Retail, building and delivering world-class commerce solutions
              for both physical retail and online e-commerce.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Highlights</h2>
            <p className="text-neutral-600">A few things I'm proud of or currently working on.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">
                <Link href="/advisory" className="hover:underline">
                  Advisory Services
                </Link>
              </h3>
              <p className="text-neutral-600">Helping companies with strategy and technology.</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">
                <Link href="/investments" className="hover:underline">
                  Investing
                </Link>
              </h3>
              <p className="text-neutral-600">
                Supporting exciting companies with capital and mentorship.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">
                <Link href="/articles" className="hover:underline">
                  Writing
                </Link>
              </h3>
              <p className="text-neutral-600">Sharing my thoughts on technology, business, and life.</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">
                <Link href="/photo-filming" className="hover:underline">
                  Photography
                </Link>
              </h3>
              <p className="text-neutral-600">Capturing moments and stories through my lenses.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
