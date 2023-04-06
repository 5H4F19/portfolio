import { LegacyRef, RefObject } from "react";

export interface Ref {
  ref: LegacyRef<HTMLDivElement>
}

export interface Nav {
  name: string
  ref: RefObject<HTMLDivElement>
}

export interface Headline {
  title: string,
  tagline: string
}

export interface Tool {
  name: string,
  image: string
}

export interface Social extends Tool {
  url: string
}

export interface TechProps {
  title: string,
  image: {
    url: string,
    h: number,
    w: number
  }
  description: string,
  tools: Tool[]

}
