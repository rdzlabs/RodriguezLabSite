import { Button } from "../ui/button";

export default function MiddleSection() {
  return (
    <div className="w-full h-full border-r p-4 flex flex-col items-center gap-6">

      {/* Top title */}
      <h1 className="text-3xl font-bold">rdzlabs.co</h1>

      {/* Profile picture and bio */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-32 h-32 rounded-full bg-gray-300" /> {/* Placeholder for profile pic */}
        <p className="text-center text-sm text-muted-foreground max-w-md">
          Short bio goes here about you and what you do.
        </p>
      </div>

      {/* Navigation buttons */}
      <div className="flex flex-col gap-2 w-full max-w-xs">
        <Button>Button</Button>
      </div>

    </div>
  )
}
