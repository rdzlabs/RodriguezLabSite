import LeftSection from "@/components/home/LeftSection"
import MiddleSection from "@/components/home/MiddleSection"
import RightSection from "@/components/home/RightSection"
import AnimatedTitle from "@/components/ui/animated-title"

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full">
      {/* Hero Section */}
      <div className="text-center py-4">
        <h1 className="text-5xl font-bold">
          <AnimatedTitle from="My lab. My code. My legacy." to="RdzLabs.CO" />
        </h1>
        {/* <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg px-4">
          <AnimatedTitle
            from=""
            to="RdzLabs is the digital lab of Christian Rodriguez"
          />
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg px-4">
          <AnimatedTitle
            from=""
            to="This site is a blend of personal portfolio and engineering showcase, where code meets creativity, and ideas turn into solutions."
          />
        </p> */}
        
      </div>

      {/* Main Sections */}
      <div className="grid grid-cols-3 flex-grow">
        <LeftSection />
        <MiddleSection />
        <RightSection />
      </div>
    </div>
  )
}


