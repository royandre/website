import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About – Roy-André",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-green-50 -mx-6 -my-8 md:-mx-8 md:-my-12 px-6 py-8 md:px-8 md:py-12">
      <article className="prose prose-lg max-w-none">
        <h1>About</h1>
        <h2>Who are you?</h2>
        <p>
          Roy-Andre Tollefsen, born early 1980 in beautiful western Norway, from where I have worked within most
          diciplines related to technology for the past 25+ years or so. Sure thing, I started early on.
        </p>
        <p>
          As a professional nerd, I have been using computers since long before the internet (yes it is actually
          possible to use a computer without the internet).
        </p>
        <p>Later in life I became a relatively successful serial-entrepreneur, investor and advisor.</p>
        <h2>What do you do for a living?</h2>
        <p>
          I somewhat tried to retire at the age of 39. At least for a couple of mont... err, weeks.. err, days, after
          one of my most successful companies to date, <strong>Trollweb Solutions</strong>, got{" "}
          <a
            href="https://media.visma.no/pressreleases/visma-kjoeper-trollweb-og-styrker-satsingen-paa-loesninger-for-netthandel-1829691"
            target="_blank"
            rel="noopener noreferrer"
          >
            acquired by Visma, Europe's largest software company,
          </a>{" "}
          back in 2017.
        </p>
        <p>
          Trollweb became the leading e-commerce supplier for the Nordic region, with well over 500 e-commerce stores
          built and launched over a period of over 10 years, and where I was leading pretty much all the projects and
          naturally also the company up until the acquisition.
        </p>
        <p>
          I think my commerce- and especially e-commerce skills are relatively decent. At least lots of kind people
          around me tend to say so. And, oh, I am sitting in the jury of the Norwegian eCommerce Awards, as a proof.
          Kindoff.
        </p>
        <p>
          Today I build up new game-changing-services, alongside{" "}
          <Link href="/advisory">helping companies and organizations</Link> navigating and{" "}
          <strong>surviving on the technology super highway</strong> in various ways, from being on the{" "}
          <strong>board of directors</strong> or leading efficient <strong>advisory boards</strong> to simply being
          hired by the hour for <strong>short-term navy seal missions</strong>.
        </p>
        <h2>Entrepreneur at the core</h2>
        <p>
          I am a very passionate <strong>entrepreneur</strong>, inventing new exciting stuff for a better world.
        </p>
        <p>
          One of my next startups is nothing smaller than a potential Facebook-killer.{" "}
          <a href="https://www.enjoy.ly/no" target="_blank" rel="noopener noreferrer">
            Enjoy
          </a>
          , a platform that collects and structures tens of thousands of activities, ranging from concerts to mountain
          hiking to personal hangouts with friends, with the simple goal to get more people offline and out into the
          real world, plus to help organizers make their events and arrangements easier to find for everyone.{" "}
          <a
            href="https://www.dn.no/teknologi/mobil/medier/sosiale-medier/satser-millioner-pa-offline-app-jeg-har-hatt-den-planen-i-sikkert-ti-ar/2-1-332719"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launched in Norway in 2019
          </a>
          , the{" "}
          <a
            href="https://medium.com/offlinepal/offlinepal-alle-aktiviteter-p%C3%A5-ett-sted-1866d7f5529a"
            target="_blank"
            rel="noopener noreferrer"
          >
            masterplan is to conquer country-by-country
          </a>
          .
        </p>
        <p>
          I am also the CEO and CPO at{" "}
          <a href="https://www.flowretail.com" target="_blank" rel="noopener noreferrer">
            Flow Retail
          </a>
          , where we build a tech-savvy top modern commerce platform, Flow Retail POS Commerce, for professional
          retailers. We also have an e-commerce division in Flow Retail, where we delivery world-class e-commerce sites
          on both <a href="https://www.shopware.com/">Shopware</a> and <a href="https://www.shopify.com">Shopify</a>. I
          am also the Chairman of the Board, aaand the largest investor in the company.
        </p>
        <p>
          I am the e-commerce manager and major owner (alongside my wife, plus another great technologist) in{" "}
          <a href="https://www.sensegarn.no/">Sense Garn</a>, Norway's best e-commerce site within yarn and knitting.
          Sense Garn consists of both a beautiful and inspiring physical store in Sandnes (of course running{" "}
          <a href="https://www.flowretail.com/">Flow Retail POS</a>, alongside the Shopware-based e-commerce site.
        </p>
        <p>
          I am also heavily involved in <a href="https://www.norwaychess.com/">Norway Chess</a>, the world's most
          prestigiuos chess tournament, both as one of the owners, and as sitting in the Board of Directors. My skills
          in terms of playing chess is extremely limited even though I play a bit practically every day, and so for the
          most I focus on the technical parts of the tournament, plus strategy, etc.
        </p>
        <p>In general I do lots of advisory, both directly 1:1, to teams and through advisory boards.</p>
        <p>
          For companies like W3Schools we have developed and delivers their billing platform, which handles tens of
          thousands of users. Yet another "side-project".
        </p>
        <p>
          I am also a <strong>tech-investor</strong> through{" "}
          <Link href="/investments">my own investment company Troll Ventures</Link>, where I primarily invest in tech
          companies, from startups to companies moving over to the Series A/B/C funding rounds, all the way up to the
          lucky ones going for an IPO or already listed on a stock exchange somewhere.
        </p>
        <h2>Any education?</h2>
        <p>I'm a best-in-class examined computer engineer from the late 90s.</p>
        <p>
          My most important education however has been the school of life, where I have had long-time hands-on
          experience with tons of various complicated topics for hundreds of fantastic and demanding customers and
          partners.
        </p>
        <h2>Job positions you have covered?</h2>
        <p>
          As a serial-entrepreneur I have covered most positions; Leadership/Mangement. Strategy. R&amp;D. Development.
          Infrastructure. Consultancy. Advisory. Financials. Strategy. UX/UI/design. Sales. Customer service.
          Accounting. Heck, even some HR.
        </p>
        <p>
          I also have a touch for interior design and "cool" office spaces, and typically take the lead as "interior
          architect" in the companies I have control over. My only rule: Become friend with the CFO and make sure there
          is no budget.
        </p>
        <p>
          In my earlier days, I ran a few BBS'es (Bulletin Board System), where I semi-proudly served pira.. err,
          shareware and such. I also ran a Norwegian underground site back in the 90s, called Radikal, later Norsk
          Undergrunn, and later Root.no. For those old enough to remember those times - you're lucky!
        </p>
        <p>
          Naturally, I have also been a CEO for many years, CTO, plus had similar leadership roles over many years,
          though I like to lead small teams.
        </p>
        <p>
          My business card titles has been ranging from Systems Engineer to CEO to CTO to Head of R&amp;D to Troll in
          Chief, though I stopped wearning business cards long time ago,{" "}
          <a
            href="https://www.forbes.com/sites/forbesagencycouncil/2017/11/24/is-the-business-card-dead-16-experts-share-their-thoughts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            and so should you
          </a>
          .
        </p>
        <h2>Interests, business-wise?</h2>
        <p>
          Most definitely. One of my absolute favorites is <strong>conducting great and brilliant developers</strong>{" "}
          and designers to make amazing and useful products and services.
        </p>
        <p>
          I am also extremely curious, and love <strong>R&amp;D</strong>, deep-diving into the abyss of possibilities.
        </p>
        <p>
          I love usability and <strong>UX</strong>, and have my best periods when sitting in Figma or Sketch or some
          other UX/drawing software late at night, just being creative and drawing up useful stuff for massive amounts
          of users.
        </p>
        <p>
          I am also very much into topics like{" "}
          <a
            href="https://butikkeier.no/brightonseo-2019-september-edition-review-by-two-first-time-attendees-f25b9ed92cc5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Search Engine Optimization
          </a>
          , and I am working on writing an SEO book in-between.
        </p>
        <p>
          And so, I also love to <strong>write</strong>. All kinds of things, from{" "}
          <a
            href="https://medium.com/@royandre/the-meeting-rules-of-engagement-bd2548a036dc"
            target="_blank"
            rel="noopener noreferrer"
          >
            business-related meeting rules
          </a>{" "}
          to{" "}
          <a
            href="https://butikkeier.no/the-past-magento-2-3-and-the-future-581f79eff6ab"
            target="_blank"
            rel="noopener noreferrer"
          >
            technically-oriented
          </a>{" "}
          stuff, to{" "}
          <a
            href="https://medium.com/@royandre/my-kids-love-tiktok-and-faceapp-should-i-care-eb5cdafbda49"
            target="_blank"
            rel="noopener noreferrer"
          >
            reflections on social media
          </a>{" "}
          and{" "}
          <a
            href="https://medium.com/@royandre/frykten-for-det-ukjente-951b77a5cf8c"
            target="_blank"
            rel="noopener noreferrer"
          >
            fear
          </a>
          . I even have on my todo to write some fiction and children's books later in life (if you are great at drawing
          monsters and other crazy things, <Link href="/contact">please let me know</Link>).
        </p>
        <p>
          And, I am super-interested in <strong>improving</strong> everything related to <strong>business</strong>, both
          as a leader and not least as an employer (recommend all leaders- or upcoming leaders to take the{" "}
          <a
            href="https://www.masterclass.com/classes/bob-iger-teaches-business-strategy-and-leadership"
            target="_blank"
            rel="noopener noreferrer"
          >
            Masterclass with Bob Iger
          </a>
          , the CEO and Chairman of the Board of Disney). I also read pretty much all that comes to my direction from{" "}
          <a href="https://hbr.org/" target="_blank" rel="noopener noreferrer">
            Harvard Business Review
          </a>{" "}
          and obviously{" "}
          <a href="https://news.ycombinator.com/" target="_blank" rel="noopener noreferrer">
            Hackernews
          </a>{" "}
          every single day (if you too are a tech-nerdy be sure to download any top rated Hacker News aggretation app,
          and replace refreshing your national newspaper ten times a day with with one daily visit to Hackernews).
        </p>
        <p>
          I also listen to a few podcasts like{" "}
          <a href="https://www.lifespanpodcast.com/" target="_blank" rel="noopener noreferrer">
            Lifespan
          </a>{" "}
          and obviously{" "}
          <a href="https://www.youtube.com/channel/UCSHZKyawb77ixDdsGog4iWA" target="_blank" rel="noopener noreferrer">
            Lex Fridman
          </a>{" "}
          when queued up somewhere, mostly related to business, psychology and similar topics. I don't read physical
          books, though I have read (...) that I should.
        </p>
        <h2>And private hobbies?</h2>
        <p>Other than computer stuff? Uhm, a few, I guess.</p>
        <p>
          I am an{" "}
          <a href="https://www.instagram.com/p/Bsw9-hkHx_N/" target="_blank" rel="noopener noreferrer">
            <strong>airplane nerd</strong>
          </a>
          , and I'm most likely the only one on-board having a great time during rough turbulence (no,{" "}
          <a
            href="https://www.travelandleisure.com/travel-news/can-airplane-wings-snap-off"
            target="_blank"
            rel="noopener noreferrer"
          >
            the wings won't snap of
          </a>
          ).
        </p>
        <p>
          I am also a combined{" "}
          <a href="https://en.wikipedia.org/wiki/Don_Rosa" target="_blank" rel="noopener noreferrer">
            <strong>Don Rosa</strong>
          </a>
          - and Scrooge McDuck fan, having read all of his brilliant and into-the-details stories tons of times, with
          most of his books signed and all that. As part of being a Scrooge McDuck fan,{" "}
          <a href="https://www.instagram.com/p/BauHnYplzWm/" target="_blank" rel="noopener noreferrer">
            I too love <strong>money</strong>
          </a>
          . Not for the richness of it, but for the love for the actual, physical money. And so I too have tons (well,
          not as litterally as with Scrooge McDuck) of beautiful coins and notes.
        </p>
        <p>
          As for collecting stuff{" "}
          <a href="https://www.instagram.com/p/B0QQNeWi1pW/" target="_blank" rel="noopener noreferrer">
            I am also collecting beautiful <strong>retro tech stuff</strong>
          </a>
          , like old computers,{" "}
          <a href="https://www.instagram.com/p/Bs3YeDNn5N8/" target="_blank" rel="noopener noreferrer">
            old typewriters
          </a>
          ,{" "}
          <a href="https://www.instagram.com/p/BnwRDqLH6el/" target="_blank" rel="noopener noreferrer">
            pinball machines
          </a>
          , and other things which has been an important part of the incredible technology journey we as humans are in
          the middle of as we speak.
          <br />
          <strong>Ultimate goal: </strong>To get my hands on a real{" "}
          <a href="https://en.wikipedia.org/wiki/Enigma_machine" target="_blank" rel="noopener noreferrer">
            Enigma machine
          </a>{" "}
          (be sure to watch the{" "}
          <a href="https://www.youtube.com/watch?v=nuPZUUED5uk" target="_blank" rel="noopener noreferrer">
            Imitation Game
          </a>{" "}
          movie), eventually a replica, and to open a free of charge tech museum (work in progress).
        </p>
        <p>
          I also fell in love with video- and sound editing not long ago, and I am still stunned with all the fantastic
          things{" "}
          <a href="https://www.blackmagicdesign.com/products/davinciresolve/" target="_blank" rel="noopener noreferrer">
            DaVinci Resolve
          </a>{" "}
          can do for me. Mmhm, creativity gone wild! Yummy!
        </p>
        <p>
          I also try to do some physical stuff, like playing <strong>squash</strong> in a somewhat serious squash league
          (at least I pay for playing + someone maintains online results lists). I play <strong>football</strong> (with
          alike in the same physical condition). I try to survive running a few half-marathons per year. I am teaching
          myself playing piano, making music and stuff like that. I coach kids in football in the lcoal football club.{" "}
          <a href="https://www.instagram.com/p/ByLeLudirQg/" target="_blank" rel="noopener noreferrer">
            I enjoy working with wood
          </a>
          ,{" "}
          <a href="https://www.instagram.com/p/Bx5YCcrCFlc/" target="_blank" rel="noopener noreferrer">
            making all kinds of wood'ish things for our cabin
          </a>
          . I love travelling, visiting{" "}
          <a href="https://www.instagram.com/p/BicdR_FA7q1/" target="_blank" rel="noopener noreferrer">
            great places
          </a>{" "}
          around the world. And, most importantly, I love being with my family and our{" "}
          <a href="https://www.instagram.com/p/Bjf9hy_AgcP/" target="_blank" rel="noopener noreferrer">
            three super-cool kids
          </a>
          .
        </p>
        <h2>Any favorite movies? Music?</h2>
        <p>
          Movies like{" "}
          <a href="https://www.youtube.com/watch?v=dMIrlP61Z9s" target="_blank" rel="noopener noreferrer">
            Office Space
          </a>
          ,{" "}
          <a href="https://www.youtube.com/watch?v=ydXojYfCF3Is" target="_blank" rel="noopener noreferrer">
            Boondock Saints 1
          </a>
          ,{" "}
          <a href="https://www.youtube.com/watch?v=lwSysg9o7wE" target="_blank" rel="noopener noreferrer">
            Terminator 2
          </a>
          ,{" "}
          <a href="https://www.youtube.com/watch?v=34WIbmXkewU" target="_blank" rel="noopener noreferrer">
            The Intouchables
          </a>
          , and the Kingsman movies are favorites I would say. At least I have watched them so many times I have
          memorized all the quotes, which I guess is a good ranking factor for when something should be marked as
          "favorite".
        </p>
        <p>
          As for music I listen to most that comes around, from anything rock to Martin Garrix to Tchaikovsky to
          Ludovico Einaudi. Jazz, blues, country and those genres still doesn't sound natural to me, however that might
          evolve as I age.
        </p>
        <h2>How do you get the time for all you do?</h2>
        <p>
          It would be fun to say I am a super-talented multi-disiplin juggler with dozens of brains working
          simultaneously in parallell dimensions. Unfortunately, the{" "}
          <a href="https://en.wikipedia.org/wiki/Human_multitasking" target="_blank" rel="noopener noreferrer">
            human brain is terrible at multi-tasking
          </a>
          , and my brain is very much like yours, working for the most in one-thing-at-the-time{" "}
          <a href="https://en.wikipedia.org/wiki/Serial_communication" target="_blank" rel="noopener noreferrer">
            serial mode
          </a>
          .
        </p>
        <p>
          An important part of being able to do lots of stuff however is to <strong>prioritize</strong>, hard. For
          example, my hours of watching TV-related stuff (series, movies, news, etc) per week is really pathetic. Like,
          2-3 hours, I guess. My Netflix- and HBO backlog of series to watch is just.. <em>long</em>. And, I am not on
          time-wasting platforms like Facebook, where the most important feature is being a birthday notification
          calendar for far-out-people we barely know. I logged out of Facebook back sometime in 2020. Never missed it.
        </p>
        <p>
          Secondly, most of what I do I do because I <em>love</em> to, not because I <em>have</em> to, and I think we as
          humans are 20x more efficient when doing stuff we <em>love</em> to do. So, be sure your employees are working
          on tasks they love to do, and get to engage fully with.
        </p>
        <p>
          And lastly, my fantastic wife never hold me back from all my crazy never-ending endeavours, while at the same
          time doing a great job covering all the fields I myself am terrible at.
        </p>
        <h2>Do you give talks at conferences?</h2>
        <p>In general, no, though I have given a few talks on UX and e-commerce.</p>
        <h2>What are your limitations and weaknesses?</h2>
        <p>
          Unless you are insanely hungry, don't ever ask me to <strong>cook</strong> you dinner, as a first. Really.
        </p>
        <p>
          <strong>Left-side driving</strong> is also something that doesn't come natural to me.
        </p>
        <p>
          <strong>Overly dressed-up sales staff</strong> is also something my brain struggle hard to handle.
        </p>
        <p>
          And oh, yea,{" "}
          <a
            href="https://medium.com/@royandre/solving-one-of-the-greatest-mysteries-of-our-time-the-car-rental-queue-pickup-nightmare-ab0494ad2c40"
            target="_blank"
            rel="noopener noreferrer"
          >
            I have <strong>no patience</strong>
          </a>
          . Null. Nada. El zero.
        </p>
        <p>
          Being a experienced-tech-guy in general means I manage to tackle most tech-related issues that cross my- or my
          surrondings path, however <strong>bluetooth-pairing</strong> is something I still struggle big-time to master.
        </p>
        <p>
          And lastly, definitely do not invite me into meetings with no agenda pre-meeting, or no conclusions
          post-meeting (and be sure to read my{" "}
          <a
            href="https://medium.com/@royandre/the-meeting-rules-of-engagement-bd2548a036dc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meeting Rules of Engagement
          </a>
          ).
        </p>
        <h2>Have you ever been burned out?</h2>
        <p>Still waiting for it. Fasten the seatbelt. Guess it's gonna be a rough landing.</p>
        <h2>If there was no computers or internet, what would you do?</h2>
        <p>
          Most likely I'd continued my early days' endaveours on building gigantic cities or{" "}
          <a href="https://www.instagram.com/p/CRyzQjOnisy/" target="_blank" rel="noopener noreferrer">
            smaller objects of LEGO
          </a>
          , or finally having enough time on my hands to try to learn to actually master my piano.
        </p>
        <h2>Who is your role model?</h2>
        <p>
          It would be weird to say anyone else than <s>Elon Musk</s>*. Tesla. SpaceX. Starship. The Boring Company.
          Mars. Neuralink. Starlink. Solar City. Flame Throwers. All with a large portion of humor and fun. It can't be
          much better. Also both Bill- and Melinda Gates are pretty badass role models in my world, even though they are
          divorced now. More generally, I find people following their passion, being it building something great, or
          helping others, very impressive.
          <br />
          <br />* before he went relatively nuts back in mid-2024
        </p>
        <h2>Do you read?</h2>
        <p>A lot. Every day. Tech. Business. Politics. Strategy. Comics. Still no physical books though.</p>
        <p>Any fiction? Except Scrooge McDuck? Neeh.</p>
        <h2>How do you structure your days?</h2>
        <p>
          I would call it a semi-controlled chaos. Good thing I usually don't forget things, though some tasks might
          take months or even years to complete. And belive it or not, I use{" "}
          <a href="https://ugmonk.com/" target="_blank" rel="noopener noreferrer">
            a physical paper'ish thing
          </a>{" "}
          to keep track of my daily and weekly tasks.
        </p>
        <p>
          <strong>Any questions?</strong> Feel free to drop me a line and I'll see if I post it here.
        </p>
        <figure>
          <Image
            src="https://cdn.sanity.io/images/v52flahq/production/b388ea586fb0ab07ed8ea1d8bbe2f2246bf945d9-2000x2291.jpg"
            alt="Roy-Andre Tollefsen"
            width={675}
            height={773}
            className="rounded-lg"
          />
          <figcaption>Roy-André Tollefsen</figcaption>
        </figure>
      </article>
    </div>
  )
}
