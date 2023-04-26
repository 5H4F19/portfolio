import { Headline } from "@/components/Headline";
import { c } from "@/utils/c";
import { eudo_sans } from "@/utils/font";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { IProjects } from ".";

type Props = {
  projects: IProjects[],
  setHeight: (h: number) => void
}

export default function Projects(props: Props) {
  const { projects, setHeight } = props
  console.log("projects", projects)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    window.addEventListener("scroll", () => { setHeight(Number(ref?.current?.offsetTop) - Number(window.pageYOffset)) })
  }, [])
  return (
    <div className="w-[90vw] mt-44">
      <div ref={ref} className="m-0 p-0">
        <Headline l={{ title: "Projects", tagline: "Transforming visions into reality" }} />
      </div>
      <div className="space-y-20">
        {projects?.map((x, idx) => (
          <Project key={x._id} index={idx} item={x} direction={idx % 2 == 0 ? "left" : "right"} />
        ))}
      </div>
    </div>
  )
}


export const Project = ({ item, index, direction = "left" }: { item: IProjects, index: number, direction?: "left" | "right" }) => {
  const d = direction
  return (
    <div className={c(d === "right" ? "md:flex-row-reverse" : "md:flex-row", "flex flex-col max-w-6xl mx-auto justify-between")}>
      <div className={c(d === "right" ? "md:items-end" : "md:items-start", "w-full md:w-4/12 space-y-2 flex flex-col")}>
        <div style={eudo_sans.style} className="text-4xl md:text-7xl font-semibold text-[#434B70]/30">0{index + 1}</div>
        <div style={eudo_sans.style} className="text-3xl md:text-5xl font-semibold text-white -mt-10 capitalize">{item.title}</div>
        <div style={eudo_sans.style} className={c(d === "right" ? "md:text-right" : "md:text-left", "text-md md:text-xl font-medium text-[#7A83A8]/50")}>
          {item.desc}
        </div>
      </div>
      <a href={item.href}>
        <div style={{ width: 656, height: 369 }}
          className="cursor-pointer md:scale-105 md:hover:scale-100 hover:drop-shadow-2xl shadow-[#46518A] transition-all duration-500 mt-20
        rounded-3xl overflow-hidden">
          <div className="absolute group overflow-hidden flex items-end bg-gradient-to-b from-black/0 to-black border border-[#46518A] rounded-3xl "
            style={{ width: 656, height: 369 }}>
            <div className="space-y-3 m-6">
              <Image className="ml-0" src="/view.svg" width={50} height={50} alt="" />
              <div style={eudo_sans.style} className="ml-2 text-2xl text-white capitalize">{item.title}</div>
            </div>
          </div>
          <Image src={item.url}
            width={656} height={369} alt="img" />
        </div>
      </a>
    </div>
  )
}
