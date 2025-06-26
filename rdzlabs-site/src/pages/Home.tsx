import LeftSection from "@/components/home/LeftSection"
import MiddleSection from "@/components/home/MiddleSection"
import RightSection from "@/components/home/RightSection"

export default function Home() {
  return (
    <div className="grid grid-cols-3 h-screen w-full">
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </div>
  )
}
