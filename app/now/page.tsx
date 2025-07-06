import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Now – Roy-André",
}

export default function NowPage() {
  return (
    <div className="min-h-screen bg-blue-50 -mx-6 -my-8 md:-mx-8 md:-my-12 px-6 py-8 md:px-8 md:py-12">
      <article className="prose prose-lg max-w-none">
        <h1>Now</h1>
        <p>
          Some of the stuff I am doing basically <strong>right now.</strong>
        </p>
        <h2>Work</h2>
        <ul>
          <li>
            <strong>Building up a few new companies, </strong>working mainly within the areas of commerce and outdoor
            events. CEO of Flow Retail, building and delivering world-class retail solutions like our own Flow Retail
            POS platform for physical retailers, plus building and delivering e-commerce sites on Shopware and Shopify
            to professional online retailers
          </li>
          <li>
            <strong>Various super-excited day to day tasks</strong> with a dozen of the startups I am heavily involved
            in, from planning, designing, short- and long-term strategy, discussing/working with developers, financials,
            etc.
          </li>
          <li>
            <Link href="/advisory">Assisting</Link> as a senior consultant towards technical/strategy tasks, towards
            both private-owned and state-owned/municipalities needing a strong "digital" hand to hold on to
          </li>
          <li>
            Leading <strong>Advisory Boards</strong> and member of <strong>Board of Directors</strong> in various
            tech-related companies. Also in the Board in <a href="https://www.norwaychess.com/">Norway Chess</a>, where
            I am also a shareholder
          </li>
          <li>
            Actively <strong>investing</strong> in <strong>tech companies</strong> making unique stuff
          </li>
        </ul>
        <h2>Studying & Learning</h2>
        <ul>
          <li>
            Currently working on <strong>AI</strong> and learning how to use AI with technology to build innovative
            products.
          </li>
          <li>
            Started <strong>studying</strong> online at Stanford, taking the{" "}
            <a
              href="https://scpd.stanford.edu/public/category/courseCategoryCertificateProfile.do?method=load&certificateId=14800052"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stanford Innovation and Entrepreneurship
            </a>{" "}
            graduate as a start
          </li>
          <li>
            <strong>Graduated</strong> to become a certified{" "}
            <a href="https://en.wikipedia.org/wiki/Association_football" target="_blank" rel="noopener noreferrer">
              football
            </a>{" "}
            coach for children (5-8 years) in Norway, becoming a better coach for my son (Jonathan, 5)'s team
          </li>
          <li>
            <strong>Taking</strong> professional <strong>piano class hours</strong> together with one of my daughters,
            personally to try to make my{" "}
            <a href="https://www.roland.com/no/products/fp_series/fp-90/" target="_blank" rel="noopener noreferrer">
              Roland FP-90
            </a>{" "}
            not be too embarrassed by its owner, and also that it is great to do stuff together with your own children
          </li>
          <li>Continuing taking MasterClass lectures</li>
          <li>
            Listening to{" "}
            <a href="https://www.youtube.com/c/lexfridman" target="_blank" rel="noopener noreferrer">
              Lex Fridman podcasts
            </a>{" "}
            for at least a few hours per week
          </li>
        </ul>
        <h2>Creativity</h2>
        <ul>
          <li>
            Working on my highly amateur'ish film career, learning all there is within the world of cinematography, from
            filming to lighting to sound and music to post-production. To see my film equipment, check out{" "}
            <Link href="/photo-filming">my photo & filming page</Link>
          </li>
          <li>Started on my first physical children book, about a little floppy disk and his friend</li>
          <li>Continuing writing on my various tech books due to be released when I feel its time</li>
        </ul>
        <h2>Personal</h2>
        <ul>
          <li>
            Doing fun stuff with my wife and three kids, from fishing to building things to just re-loading together
          </li>
          <li>
            Trying to run a few times per week, simply to keep me going for my goal of attending and surviving a couple
            of half-marathons per year
          </li>
          <li>
            Playing in the local <strong>squash</strong> league, where I've been playing for many years
          </li>
          <li>
            Playing <strong>football</strong> with a bunch of other "elderly" people like me
          </li>
          <li>Trying to watch at least one Netflix episode per month</li>
        </ul>
        <p>
          <strong>
            And as always, I still try to do{" "}
            <a
              href="https://www.youtube.com/watch?v=4lmW2tZP2kU&feature=youtu.be&t=30"
              target="_blank"
              rel="noopener noreferrer"
            >
              nothing
            </a>
            .
          </strong>
        </p>
        <p>
          <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">
            Hey, what is a "Now" page?
          </a>
        </p>
      </article>
    </div>
  )
}
