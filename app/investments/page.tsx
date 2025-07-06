import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Investments – Roy-André",
}

const investments = [
  {
    name: "Auk",
    url: "https://no.auk.eco/",
    description: "Building state of the art products for home gardening.",
  },
  {
    name: "Dintero",
    url: "https://www.dintero.com/",
    description: "Alternative payment platform.",
  },
  {
    name: "Justify",
    url: "https://www.justify.no/",
    description: "Do-it-yourself legal services provider, so that you do not need a lawyer for pretty standard tasks.",
  },
  {
    name: "Mylna",
    url: "https://www.mylnagruppen.no/",
    description: "Largest provider of gym/fitness products, with annual sales of around 500 million.",
  },
  {
    name: "Flow Solutions",
    url: "https://www.flowretail.no",
    description:
      "Commerce platform for professional retailers who simply wants the best solution for their physical store- or stores if they are a retail chain.",
  },
  {
    name: "Enjoy!",
    url: "https://www.enjoy.ly/no",
    description:
      "Marketplace (OTA) for activities and events, alongside SaaS platform for organizers to publish, promote and receive bookings - alongside building the most user-friendly activities booking-platform worldwide.",
    model: "SaaS + Online Marketplace (OTA)",
  },
  {
    name: "Norselab",
    url: "https://norselab.com/",
    description: "Investment in multiple companies in various areas.",
    model: "SaaS",
  },
  {
    name: "Bikefinder",
    url: "https://bikefinder.com/",
    description:
      "Live tracking of any bicycle, with theft-guaranteed insurance included. More tracking devices planned.",
    model: "Physical device + SaaS",
  },
  {
    name: "Avensia",
    url: "https://www.avensia.com/",
    description: "e-commerce core services.",
    model: "Digital services",
  },
  {
    name: "Sanity",
    url: "https://www.sanity.io/",
    description: "Flexible, headless CMS for all the more complex needs when creating websites.",
    model: "SaaS",
  },
  {
    name: "TicketCo",
    url: "https://ticketco.events/",
    description: "World-class ticketing platform.",
    model: "SaaS",
  },
  {
    name: "NoFence",
    url: "https://nofence.no/en/",
    description: "Virtual fence service for gracing animals.",
    model: "SaaS",
  },
  {
    name: "DigiLEAN",
    url: "https://digilean.tools/",
    description:
      "Online lean platform to plan for- and to take action upon any process or change within the company or organization.",
    model: "SaaS",
  },
  {
    name: "Insp",
    url: "https://insp.love/",
    description: "Social platform to publish, share and discuss fashion, and to revolutionize modern retail.",
    model: "SaaS",
  },
  {
    name: "SecureNOK",
    url: "https://www.securenok.com/",
    description:
      "Security services towards industries with critical components, covering espionage, sabotage, malwarenents and more.",
    model: "SaaS",
  },
  {
    name: "Select",
    url: "https://www.select.no/",
    description: "eCommerce.",
    model: "Physical products + subscriptions",
  },
  {
    name: "Visma",
    url: "https://www.visma.com/",
    description: "Any type of mission-critical software for businesses and corporations.",
    model: "SaaS",
  },
  {
    name: "mCASH / Settle",
    url: "https://settle.eu/",
    description:
      "Alternative payment solution. I embrace entrepreneurs who wants to make better solutions, and mCASH was one of them. Today mCASH is history. Or, as I like to say it, its the origins of Vipps and MobilePay, and has later transformed into Auka, the new international payment platform.",
    model: "SaaS",
  },
]

export default function InvestmentsPage() {
  return (
    <div className="min-h-screen bg-emerald-50 -mx-6 -my-8 md:-mx-8 md:-my-12 px-6 py-8 md:px-8 md:py-12">
      <div className="space-y-12">
        <div className="prose prose-lg max-w-none">
          <h1>Investments</h1>
          <p>
            Troll Ventures invest mainly in companies with passionate down-to-earth entrepreneurs which builds
            rock-solid long-lasting services to improve our well-being and surroundings.
          </p>
          <p>
            <strong>For the record: </strong>My integrity between being an advisor and investor is 100%, and I neither
            have (over the last 20 years) or will (in the coming 20 years) recommend any company or service because of
            my investments. I only recommend what's imho is best for the one getting the recommendation. Period.
          </p>
          <h3>Key parameters</h3>
          <ul>
            <li>Experienced founder(s)</li>
            <li>CTO-role covered</li>
            <li>Passionate and efficient team in place</li>
            <li>Brings something new to the market</li>
            <li>Global ambitions</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8">A selection of direct investments</h2>
          <div className="space-y-10">
            {investments.map((investment) => (
              <div key={investment.name}>
                <h3 className="text-2xl font-semibold">
                  <a href={investment.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {investment.name}
                  </a>
                </h3>
                <p className="mt-1 text-neutral-700">{investment.description}</p>
                {investment.model && <p className="mt-2 text-sm text-neutral-500">Model: {investment.model}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h3>Wanting me as an investor?</h3>
          <p>
            I only invest in up to 1-2 companies annually, however feel free to send some details and I'll have a look.
          </p>
          <p>
            <Link href="/contact">Get in touch</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
