import { Photograph } from "@/components/photograph"
import { SiteHeader } from "@/components/site-header"
import { fees, opening, photographer, photographs } from "@/lib/portfolio"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section
          id="introduction"
          className="mx-auto grid max-w-6xl scroll-mt-24 items-end gap-10 px-6 pt-16 pb-20 md:grid-cols-12 md:gap-12 md:pt-24 md:pb-28"
        >
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Photographer
            </p>
            <h1 className="mt-5 font-heading text-6xl leading-[0.92] font-medium tracking-tight md:text-7xl">
              {photographer.name}
            </h1>
            <p className="mt-8 max-w-sm text-base leading-relaxed">
              I photograph landscapes, interiors, and portraits, usually with
              the light already in the room.
            </p>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
              Most of the pictures are made on foot: weather over a coast, a
              table after a meal, a person standing where they were asked to
              stand. What follows is a short selection.
            </p>
          </div>
          <Photograph
            frame={opening}
            priority
            sizes="(min-width: 768px) 55vw, 100vw"
            className="md:col-span-7"
          />
        </section>

        <section id="work" className="scroll-mt-24 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="max-w-xl">
              <h2 className="font-heading text-4xl font-medium tracking-tight md:text-5xl">
                Selected work
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Eight frames from the same practice as the opening picture.
                Titles are only there so each one can be found again.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-12">
              {photographs.map((frame) => (
                <Photograph
                  key={frame.id}
                  frame={frame}
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-24 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-4">
                <h2 className="font-heading text-4xl font-medium tracking-tight md:text-5xl">
                  Fees
                </h2>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  A sitting is the time we spend and the edited photographs you
                  take home. Travel, prints, and licensing are agreed on their
                  own.
                </p>
              </div>
              <div className="md:col-span-8">
                <ul className="divide-y border-y border-border md:hidden">
                  {fees.map((fee) => (
                    <li key={fee.name} className="py-5">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-medium">{fee.name}</h3>
                        <p className="font-medium tabular-nums">{fee.fee}</p>
                      </div>
                      <p className="mt-2 text-muted-foreground">{fee.time}</p>
                      <p className="mt-1">{fee.photographs}</p>
                    </li>
                  ))}
                </ul>
                <div className="hidden md:block">
                  <table className="w-full text-left text-sm">
                    <caption className="sr-only">
                      Fees for portrait, half day, and day sittings
                    </caption>
                    <thead className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                      <tr>
                        <th scope="col" className="pb-4 font-normal">
                          Sitting
                        </th>
                        <th scope="col" className="pb-4 font-normal">
                          Time
                        </th>
                        <th scope="col" className="pb-4 font-normal">
                          What you receive
                        </th>
                        <th scope="col" className="pb-4 text-right font-normal">
                          Fee
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {fees.map((fee) => (
                        <tr key={fee.name} className="border-t border-border">
                          <th scope="row" className="py-5 pr-4 font-medium">
                            {fee.name}
                          </th>
                          <td className="py-5 pr-4 text-muted-foreground">
                            {fee.time}
                          </td>
                          <td className="py-5 pr-4">{fee.photographs}</td>
                          <td className="py-5 text-right font-medium tabular-nums">
                            {fee.fee}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Contact
            </p>
            <h2 className="mt-4 font-heading text-4xl font-medium tracking-tight md:text-5xl">
              Write to me
            </h2>
            <a
              href={`mailto:${photographer.email}`}
              className="mt-8 block font-heading text-3xl tracking-tight underline-offset-4 hover:underline md:text-5xl"
            >
              {photographer.email}
            </a>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Tell me the place, who will be there, and the week you have in
              mind.
            </p>
          </div>
        </section>
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6 text-xs text-muted-foreground">
          <p>{photographer.name}</p>
          <a
            href={`mailto:${photographer.email}`}
            className="underline-offset-4 hover:underline"
          >
            {photographer.email}
          </a>
        </div>
      </footer>
    </>
  )
}
