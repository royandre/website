import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Articles – Roy-André",
}

const articles = [
  // Please provide your articles here in this format:
  // { title: "My Awesome Article", url: "https://medium.com/...", source: "Medium", date: "July 2025" },
  {
    title: "Parenting: Don't let your kids become a product of today's tech companies",
    url: "https://royandre.medium.com/my-kids-love-tiktok-and-faceapp-should-i-care-eb5cdafbda49",
    source: "Medium",
    date: "Jan 2019",
  },
  {
    title: "Startups: Roofshot vs Moonshot",
    url: "https://medium.com/swlh/roofshot-and-moonshot-how-to-successfully-run-a-truly-innovative-company-9f85eb312f46",
    source: "Medium",
    date: "June 2019",
  },
  {
    title: "Life: Fear of the unknown (Norwegian)",
    url: "https://royandre.medium.com/frykten-for-det-ukjente-951b77a5cf8c",
    source: "Medium",
    date: "Aug 2024",
  },
  {
    title: "Tech: Goodbye, Adobe",
    url: "https://royandre.medium.com/goodbye-adobe-4f26fa48e28a",
    source: "Medium",
    date: "Oct 2021",
  },
  {
    title: "Business: The Meeting Rules of Engagement",
    url: "https://royandre.medium.com/the-meeting-rules-of-engagement-bd2548a036dc",
    source: "Medium",
    date: "Jun 2024",
  },
  {
    title: "Life: The Car Rental Queue Nightmare",
    url: "https://royandre.medium.com/solving-one-of-the-greatest-mysteries-of-our-time-the-car-rental-queue-pickup-nightmare-ab0494ad2c40",
    source: "Medium",
    date: "July 2019",
  },
  {
    title: "Tech: How we found products in Magento 2 just disappeared",
    url: "https://royandre.medium.com/how-we-reduced-the-magento-2-price-reindex-process-from-hours-to-minutes-and-how-you-can-too-51744c6571b4",
    source: "Medium",
    date: "May 2019",
  },
]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-rose-50 -mx-6 -my-8 md:-mx-8 md:-my-12 px-6 py-8 md:px-8 md:py-12">
      <div className="space-y-8">
        <div className="prose prose-lg max-w-none">
          <h1>Articles</h1>
          <p>I occasionally write about technology, business, and life. Here are some of my articles.</p>
        </div>
        <div className="space-y-6">
          {articles.map((article) => (
            <div key={article.title}>
              <h2 className="text-xl font-semibold">
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {article.title}
                </a>
              </h2>
              <p className="text-neutral-600">
                {article.source} &middot; {article.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
