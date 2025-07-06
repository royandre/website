"use client"

import Image from "next/image"

export default function PhotoFilmingPage() {
  const handleImageClick = (imageSrc: string) => {
    window.open(imageSrc, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-purple-50 -mx-6 -my-8 md:-mx-8 md:-my-12 px-6 py-8 md:px-8 md:py-12">
      <article className="prose prose-lg max-w-none">
        <h1>Photography & Filming</h1>
        <p>I do take some jobs on photography and filming every now and then.</p>
        <h3>
          <strong>Photography</strong>
        </h3>
        <ul>
          <li>Portraits (people and animals)</li>
          <li>Sports (indoor and outdoor)</li>
          <li>Interior and architecture</li>
          <li>Various</li>
          <li>Drone photography</li>
        </ul>
        <h3>
          <strong>Filming</strong>
        </h3>
        <ul>
          <li>Interviews</li>
          <li>Ads</li>
          <li>Case studies</li>
          <li>Factories & production</li>
          <li>Various</li>
          <li>Air drone filming</li>
          <li>Underwater drone filming</li>
        </ul>
        <h2>Price</h2>
        <p>
          <strong>Photographing</strong>, for example a sports match, normally requires 5-10 hours in total, including
          some preparations and post-production.
        </p>
        <p>
          <strong>Filming</strong>, for example an interview, normally requires 15-30 hours, including preparations,
          setup and post-production of the film and voice/sound.
        </p>
        <p>
          <strong>The hourly rate</strong> ranges from around NOK 500 for not-for-profit organizations, to between NOK
          1000-1500 for companies, depending on the amount of equipment required. Travel expenses and any other type of
          expenses are added to the tap.
        </p>
        <h2>Equipment</h2>
        <p>This is the main equipment I use when producing films and stuff.</p>
        <ul>
          <li>
            <strong>Cameras</strong>
            <ul>
              <li>2x Blackmagic Pocket Cinema 6K Pro, for filming</li>
              <li>1x Canon R5, for photography and filming</li>
            </ul>
          </li>
          <li>
            <strong>Lenses</strong>
            <ul>
              <li>Canon RF 70-200 f/4 IS USM</li>
              <li>Canon RF 100-500 f/4.5-7.1L IS USM</li>
              <li>Sigma 70-200mm f/2.8</li>
              <li>Sigma 18-35mm f/1.8</li>
              <li>Sigma 14-24mm f/2,8 wide angel lens</li>
              <li>Canon EF-S 10-18 lens</li>
            </ul>
          </li>
          <li>
            <strong>Drones</strong>
            <ul>
              <li>DJI Mini 3 Pro</li>
              <li>Blueeye Pioneer underwater drone</li>
            </ul>
          </li>
          <li>
            <strong>Various</strong>
            <ul>
              <li>RS 3 Pro gimbal</li>
              <li>Nucleus Nano focus</li>
            </ul>
          </li>
          <li>
            <strong>Sound</strong>
            <ul>
              <li>Sennheiser MKE600 mic</li>
              <li>RØDE Wireless GO2 mics</li>
            </ul>
          </li>
          <li>
            <strong>Lights</strong>
            <ul>
              <li>Various lights in all shapes and literally all colors</li>
            </ul>
          </li>
          <li>
            <strong>Software for post-production</strong>
            <ul>
              <li>DaVinci Resolve</li>
            </ul>
          </li>
        </ul>
        <h2>Examples</h2>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=uJZitUulUcc" target="_blank" rel="noopener noreferrer">
              Example interview film / case study
            </a>
          </li>
          <li>
            <a href="https://photos.app.goo.gl/5kR4afYwyCgXwDJe8" target="_blank" rel="noopener noreferrer">
              Example photography samples
            </a>
          </li>
        </ul>
        <h2>Behind the Scenes</h2>
        <p>Here are some photos from recent filming projects, showing the equipment and setups in action.</p>
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="space-y-2">
            <button
              onClick={() => handleImageClick("/images/filming/roy-andre-filming.jpeg")}
              className="block w-full text-left"
            >
              <Image
                src="/images/filming/roy-andre-filming.jpeg"
                alt="Roy-André on set with professional filming equipment"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-64 cursor-pointer hover:opacity-90 transition-opacity"
              />
            </button>
            <p className="text-sm text-neutral-600">On set with professional camera setup</p>
          </div>
          <div className="space-y-2">
            <button
              onClick={() => handleImageClick("/images/filming/camera-equipment.jpeg")}
              className="block w-full text-left"
            >
              <Image
                src="/images/filming/camera-equipment.jpeg"
                alt="Professional camera equipment setup in office environment"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-64 cursor-pointer hover:opacity-90 transition-opacity"
              />
            </button>
            <p className="text-sm text-neutral-600">Professional camera rig with large lens setup</p>
          </div>
          <div className="space-y-2">
            <button
              onClick={() => handleImageClick("/images/filming/blackmagic-setup.avif")}
              className="block w-full text-left"
            >
              <Image
                src="/images/filming/blackmagic-setup.avif"
                alt="Blackmagic camera setup showing live filming"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-64 cursor-pointer hover:opacity-90 transition-opacity"
              />
            </button>
            <p className="text-sm text-neutral-600">Blackmagic camera in action during interview</p>
          </div>
          <div className="space-y-2">
            <button
              onClick={() => handleImageClick("/images/filming/interview-setup.jpeg")}
              className="block w-full text-left"
            >
              <Image
                src="/images/filming/interview-setup.jpeg"
                alt="Professional interview filming setup"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-64 cursor-pointer hover:opacity-90 transition-opacity"
              />
            </button>
            <p className="text-sm text-neutral-600">Interview setup with professional lighting and camera</p>
          </div>
          <div className="space-y-2">
            <button
              onClick={() => handleImageClick("/images/filming/technical-filming.jpeg")}
              className="block w-full text-left"
            >
              <Image
                src="/images/filming/technical-filming.jpeg"
                alt="Filming technical work in laboratory setting"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-64 cursor-pointer hover:opacity-90 transition-opacity"
              />
            </button>
            <p className="text-sm text-neutral-600">Documenting technical work and processes</p>
          </div>
          <div className="space-y-2">
            <button
              onClick={() => handleImageClick("/images/filming/behind-scenes-office.jpeg")}
              className="block w-full text-left"
            >
              <Image
                src="/images/filming/behind-scenes-office.jpeg"
                alt="Behind the scenes filming in office environment"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-64 cursor-pointer hover:opacity-90 transition-opacity"
              />
            </button>
            <p className="text-sm text-neutral-600">Behind the scenes setup in professional office</p>
          </div>
        </div>
      </article>
    </div>
  )
}
