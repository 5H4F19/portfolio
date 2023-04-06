import { RefObject } from "react";

export const handleScroll = (ref: RefObject<HTMLDivElement>) => {
  ref.current?.scrollIntoView({ behavior: 'smooth' });
}
export const scrollTo = (ref: RefObject<HTMLDivElement>) => {
  setTimeout(() => ref?.current?.scrollIntoView({ inline: 'center', behavior: 'smooth' }), 0)
}
