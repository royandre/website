import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Advisory – Roy-André",
}

export default function AdvisoryPage() {
  return (
    <div className="min-h-screen">
      {/* Image positioned above and outside the Advisory section */}
      <div className="mb-12">
        <Image
          src="/images/advisory-photo.avif"
          alt="Roy-André in advisory meeting"
          width={800}
          height={400}
          className="rounded-lg object-cover w-full h-64"
        />
      </div>

      {/* Advisory section with background starts here */}
      <div className="bg-amber-50 -mx-6 -my-8 md:-mx-8 md:-my-12 px-6 py-8 md:px-8 md:py-12">
        <article className="prose prose-lg max-w-none">
          <h1>Advisory</h1>
          <p className="lead">
            <strong>Yes, you can buy me. At least for a short period of time.</strong>
          </p>
          <p>
            I am fairly respected in topics like internet in general, e-commerce, technology and entrepreneurship. I
            also know a few things on organization/culture.
          </p>
          <h2>Examples of how people use me</h2>
          <ul>
            <li>
              <strong>Leading Advisory Boards</strong>, tackling and successfully implement the necessary changes on
              most sort of issues within the organization, from production to technology to employee to strategy
            </li>
            <li>
              Executing <strong>technical due diligences</strong>
            </li>
            <li>
              Helping on <strong>CTO-related tasks</strong>
            </li>
            <li>
              <strong>Navigating companies </strong>through important<strong> technology choices</strong>, from internal
              systems like communication/colaboration to the more complex ones like e-commerce, ERP, PIM, and similar.
            </li>
            <li>
              <strong>Pushing through critical projects.</strong> I never take on me the project manager role any
              longer. Instead I take the role to make sure the project manager and its project team implements- and
              finalizes the project
            </li>
            <li>
              <strong>Specifications</strong> on new services and features, both <strong>written docs</strong> and{" "}
              <strong>UX sketches</strong>
            </li>
            <li>
              <strong>Building up tech/dev teams</strong>, assisting on job interviews, setting up teams etc
            </li>
            <li>
              General <strong>business advisory</strong> (e.g "How can we do this?" or "Should we proceed with this?")
            </li>
          </ul>
          <h2>My rates</h2>
          <p>
            I charge differently depending on the size of the companies I assist, based upon either the number of
            employees or the annual revenue, whichever comes first.
          </p>
          <p>
            The reason for the differentiated rate is simply because it gives different value to a small company
            compared to a larger enterprise, and also that the risk involved is much higher with the larger ones.
          </p>
          <p>
            So, these are my <strong>hourly rates</strong>:
          </p>
          <ul>
            <li>1-9 employees or &lt; 1MNOK in annual revenue: NOK 1337,-</li>
            <li>10+ employees or 1-100MNOK in annual revenue: NOK 1600,-</li>
            <li>
              100+ employees or &gt;100MNOK in annual revenue: <strong>NOK 2200,-</strong>
            </li>
          </ul>
          <p>
            Minimum charge is <strong>10 hours</strong>. No refund or anything.{" "}
            <a href="https://www.youtube.com/watch?v=essNmNOrQto" target="_blank" rel="noopener noreferrer">
              Just plain simple trust
            </a>
            .
          </p>
          <p>
            <strong>I also have a "one-day-all-you-can-eat-Roy" full-day price:</strong>
          </p>
          <ul>
            <li>For all types of companies: NOK 12.500.</li>
          </ul>
          <p>
            Travel costs, VAT and other relevant expenses are added to the tap according to official standard rates.
          </p>
          <p>
            My <strong>25+ years of experience</strong> and <strong>extensive network</strong> is always{" "}
            <strong>included</strong>.
          </p>
          <h2>Can we employ you?</h2>
          <p>Neh.</p>
          <h2>I need to enjoy working with your company</h2>
          <p>
            To be able to be truly useful and super-efficient in the work I do,{" "}
            <strong>I really have to enjoy the work I do</strong>. This means I only take assignments for clients I
            truly belive in and <em>which am confident I can have a positive impact for</em>.
          </p>
          <p>
            So, if you are selling sand in Sahara or you are selling listing classified ads on
            phone-number-lookup-portals, I will most likely turn the request gracefully down.
          </p>
          <h2>Disclaimer / EULA</h2>
          <p>
            In no way what-so-ever I will guarantee that my assistance will help you or your company succeed. In order
            for a good relationship there needs to be a perfect balance of trust between the client and the supplier.
            So, my disclaimer is simply the need for trust. Check out the below video to learn what I mean.
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=essNmNOrQto" target="_blank" rel="noopener noreferrer">
              https://www.youtube.com/watch?v=essNmNOrQto
            </a>
          </p>
          <p>
            And oh, in general I do not sign NDAs. Maybe, if Google or some of the other giants wanna hook me up for
            some tasks, I'll consider it. Everything is for sale, I guess.
          </p>
          <h2>Contact me</h2>
          <p>
            Simply drop me an email at <a href="mailto:royandre@gmail.com">royandre@gmail.com</a> and I'll get in touch
            shortly after.
          </p>
        </article>
      </div>
    </div>
  )
}
