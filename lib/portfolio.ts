export type Frame = {
  id: string
  title: string
  alt: string
  unsplashId: string
  width: number
  height: number
  aspect: string
  span: string
  replaceWith: string
}

export type Fee = {
  name: string
  time: string
  photographs: string
  fee: string
}

export const photographer = {
  name: "Zhao Ji",
  email: "zhaoji@guanghe.tv",
}

export function frameSrc(
  frame: Pick<Frame, "unsplashId" | "width" | "height">
) {
  const query = new URLSearchParams({
    auto: "format",
    fit: "crop",
    w: String(frame.width),
    h: String(frame.height),
    q: "80",
  })

  return `https://images.unsplash.com/photo-${frame.unsplashId}?${query}`
}

export const opening: Frame = {
  id: "ridge",
  title: "Ridge",
  alt: "Sunlight falling across a dark forested ridge",
  unsplashId: "1469474968028-56623f02e42e",
  width: 1600,
  height: 2000,
  aspect: "aspect-[4/5]",
  span: "",
  replaceWith:
    "The photograph you want seen first. A wide view of weather, coast, or open land works here.",
}

export const photographs: Frame[] = [
  {
    id: "path",
    title: "Path",
    alt: "A narrow path through tall green trees",
    unsplashId: "1441974231531-c6227db76b6e",
    width: 1800,
    height: 1200,
    aspect: "aspect-[3/2]",
    span: "md:col-span-7",
    replaceWith: "A landscape you made on foot.",
  },
  {
    id: "window",
    title: "Window",
    alt: "A person standing beside a bright window",
    unsplashId: "1531746020798-e6953c6e8e04",
    width: 1200,
    height: 1500,
    aspect: "aspect-[4/5]",
    span: "md:col-span-5",
    replaceWith: "A portrait, preferably in available light.",
  },
  {
    id: "headland",
    title: "Headland",
    alt: "A rocky coast under a pale sky",
    unsplashId: "1475924156734-496f6cac6ec1",
    width: 1200,
    height: 1500,
    aspect: "aspect-[4/5]",
    span: "md:col-span-5",
    replaceWith: "A coast, field, or other picture about weather.",
  },
  {
    id: "room",
    title: "Room",
    alt: "An empty bedroom with soft daylight",
    unsplashId: "1505691938895-1758d7feb511",
    width: 1800,
    height: 1200,
    aspect: "aspect-[3/2]",
    span: "md:col-span-7",
    replaceWith: "An interior. A room after someone has left is enough.",
  },
  {
    id: "high-ground",
    title: "High ground",
    alt: "A mountain ridge above a layer of cloud",
    unsplashId: "1464822759023-fed622ff2c3b",
    width: 2000,
    height: 1000,
    aspect: "aspect-[2/1]",
    span: "md:col-span-12",
    replaceWith:
      "A long, quiet view. This frame runs the full width of the page.",
  },
  {
    id: "sitting",
    title: "Sitting",
    alt: "A close portrait of a person looking just off camera",
    unsplashId: "1534528741775-53994a69daeb",
    width: 1200,
    height: 1500,
    aspect: "aspect-[4/5]",
    span: "md:col-span-4",
    replaceWith: "A second portrait, different from Window.",
  },
  {
    id: "road",
    title: "Road",
    alt: "An empty road crossing dry open land",
    unsplashId: "1500530855697-b586d89ba3ee",
    width: 1400,
    height: 1400,
    aspect: "aspect-square",
    span: "md:col-span-4",
    replaceWith: "A travel frame, or any picture with a lot of ground in it.",
  },
  {
    id: "night",
    title: "Night",
    alt: "A dark mountain under a sky full of stars",
    unsplashId: "1519681393784-d120267933ba",
    width: 1200,
    height: 1500,
    aspect: "aspect-[4/5]",
    span: "md:col-span-4",
    replaceWith:
      "A darker photograph, if you make them. Otherwise another portrait.",
  },
]

export const fees: Fee[] = [
  {
    name: "Portrait",
    time: "1 hour, one place",
    photographs: "12 edited photographs",
    fee: "¥1,800",
  },
  {
    name: "Half day",
    time: "Up to 4 hours",
    photographs: "25 edited photographs",
    fee: "¥4,200",
  },
  {
    name: "Day",
    time: "A full day on location",
    photographs: "40 edited photographs",
    fee: "¥7,600",
  },
]
