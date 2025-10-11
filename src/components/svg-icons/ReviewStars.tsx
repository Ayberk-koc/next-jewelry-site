import { cn } from "@/lib/utils";

function RewievStar({
  fill = true,
  className,
}: {
  fill?: boolean;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="border-black"
    >
      <path
        d="M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779 20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944 8.90983H9.75486L12 2Z"
        className={cn(
          "stroke-current stroke-1 [vector-effect:non-scaling-stroke]",
          fill ? "fill-current" : "fill-transparent",
          "transition-colors duration-300 ease-in-out",
          className
        )}
      />
    </svg>
  );
}

export { RewievStar };
