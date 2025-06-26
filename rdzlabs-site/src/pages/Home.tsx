import LeftSection from "@/components/home/LeftSection"
import MiddleSection from "@/components/home/MiddleSection"
import RightSection from "@/components/home/RightSection"

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full">
      {/* Top center name */}
      <div className="text-center py-4">
        <h1 className="text-3xl font-bold">rdzlabs.co</h1>
      </div>

      {/* Three-column layout */}
      <div className="grid grid-cols-3 flex-grow">
        <LeftSection />
        <MiddleSection />
        <RightSection />
      </div>
    </div>
  )
}

