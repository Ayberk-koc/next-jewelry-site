import { cn } from "@/lib/utils";

function RadioButtonIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={cn(className)}
    >
      <rect x="4.5" y="4.5" width="15" height="15" rx="7.5" stroke="#0C0A09" />
      <rect
        x="7"
        y="7"
        width="10"
        height="10"
        rx="5"
        fill="#0C0A09"
        className="fill-transparent group-data-[state=open]:fill-gray-950"
      />
    </svg>
  );
}

export { RadioButtonIcon };
