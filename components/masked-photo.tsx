import Image from "next/image"

type MaskedPhotoProps = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function MaskedPhoto({ src, alt, width, height, className = "" }: MaskedPhotoProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative overflow-hidden rounded-full">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="object-cover"
          priority
        />
        {/* Geometric mask overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Diagonal lines */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-600/20" />
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Animated diagonal stripes */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <div className="absolute top-1/4 -left-4 w-32 h-0.5 bg-blue-600 rotate-45 transform origin-left" />
              <div className="absolute top-1/2 -left-8 w-40 h-0.5 bg-blue-600 rotate-45 transform origin-left" />
              <div className="absolute top-3/4 -left-6 w-36 h-0.5 bg-blue-600 rotate-45 transform origin-left" />
            </div>
            {/* Corner accent */}
            <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-blue-600 opacity-60" />
            <div className="absolute bottom-6 right-6 w-4 h-4 bg-blue-600 opacity-40" />
          </div>
        </div>
      </div>
    </div>
  )
}
