import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact – Roy-André",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-indigo-50 -mx-6 -my-8 md:-mx-8 md:-my-12 px-6 py-8 md:px-8 md:py-12">
      <article className="prose prose-lg max-w-none">
        <h1>Get in touch</h1>
        <p>I am always super-happy when some one gets in touch, so please do!</p>
        <p>
          Though keep in mind I do get a bunch of different types of requests, and normally filter out the bad ones from
          the good ones quite fast. So, as a rule of thumb, if you don't hear back from me within a couple of days or
          maximum a week as I am often on the go, then I've most likely unfortunately tagged the request as "a bad one",
          though please retry should my spamfilter fail :)
        </p>
        <h2>Variant 1: Just wanna say hi?</h2>
        <p>
          If you want to ship over some pros or cons on my articles, have an idea you think I could benefit from, or
          have something else in mind, simply drop me a line at{" "}
          <a href="mailto:royandre@gmail.com">royandre@gmail.com</a>. I love feedback and will do my best to get back to
          you.
        </p>
        <h2>Variant 2: Wanna rent me?</h2>
        <p>
          Be sure to <Link href="/advisory">read the important details</Link> first.
        </p>
        <p>
          Next up, drop me an email at <a href="mailto:royandre@gmail.com">royandre@gmail.com</a> with some more
          details, and I'll get in touch.
        </p>
        <p>
          You can also text me at +47 900 20 820 (note that I never respond to phone calls from foreign numbers, so
          please send a heads up prior to reaching out over voice call).
        </p>
        <h2>Variant 3: Wanna discuss investments?</h2>
        <p>
          If you are a startup (or simply just have a brilliant idea you cannot get out of your head) or a company that
          has come to the sales-phase, and are looking at getting me as an investor, feel free to drop me an email at{" "}
          <a href="mailto:royandre@gmail.com">royandre@gmail.com</a> with some details you find important. Be sure to be
          very brief.
        </p>
        <p>
          If you are an <strong>investor</strong>- or part of an <strong>investment group</strong>, and would like for
          me to potentially join the group, also feel free to drop me an email with more details.
        </p>
      </article>
    </div>
  )
}
