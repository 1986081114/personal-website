# Zhao Ji

A photography portfolio built on the shadcn Next.js template.

The page has four parts: an introduction, a short selection of photographs, a fee table, and an email address that stays in the header.

## Fonts

- Cormorant Garamond for the name and section titles
- Outfit for everything else

## Replace the photographs

Every picture is an Unsplash stand-in. Swap it for your own file, and keep the `alt` text honest. The source of each frame is `lib/portfolio.ts`.

| Where it appears                 | id            | Replace it with                                           |
| -------------------------------- | ------------- | --------------------------------------------------------- |
| Opening, beside the introduction | `ridge`       | The photograph you want seen first                        |
| Selected work                    | `path`        | A landscape you made on foot                              |
| Selected work                    | `window`      | A portrait in available light                             |
| Selected work                    | `headland`    | A coast, field, or other picture about weather            |
| Selected work                    | `room`        | An interior                                               |
| Selected work                    | `high-ground` | A long, quiet view for the full-width frame               |
| Selected work                    | `sitting`     | A second portrait, different from Window                  |
| Selected work                    | `road`        | A travel frame, or any picture with a lot of ground in it |
| Selected work                    | `night`       | A darker photograph, or another portrait                  |

The fee amounts in `fees` inside the same file are a draft. Change them before sharing the page.

## Scripts

```bash
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
```
