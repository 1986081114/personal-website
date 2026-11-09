import Image from "next/image"

import { frameSrc, type Frame } from "@/lib/portfolio"
import { cn } from "@/lib/utils"

export function Photograph({
  frame,
  priority = false,
  sizes,
  className,
}: {
  frame: Frame
  priority?: boolean
  sizes: string
  className?: string
}) {
  return (
    <figure className={cn(frame.span, className)}>
      <div className={cn("relative overflow-hidden bg-muted", frame.aspect)}>
        <Image
          src={frameSrc(frame)}
          alt={frame.alt}
          fill
          priority={priority}
          sizes={sizes}
          unoptimized
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 text-xs tracking-wide text-muted-foreground">
        {frame.title}
      </figcaption>
    </figure>
  )
}
