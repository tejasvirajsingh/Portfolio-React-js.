import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[48px] w-full rounded-md border border-white/10 focus:border-red-500 font-light bg-black px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1  focus-visible:ring-red-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ",
        className
      )}
      {...props} />
  );
}

export { Textarea }
