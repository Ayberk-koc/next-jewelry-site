import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CustomInput({
  scale,
  disabled = false,
  className,
  type = "text",
  isError = false,
  showLabel = true,
  label,
  labelClass,
  ...props
}: {
  scale?: "xs" | "sm" | "md" | "lg" | "xl2";
  disabled?: boolean;
  className?: string;
  type?: string;
  isError?: boolean;
  labelClass?: string;
  showLabel?: boolean;
  label?: string;
}) {
  return (
    <div className="flex flex-col gap-gap-5">
      {showLabel && (
        <Label className={labelClass} disabled={disabled} scale={scale}>
          {label}
        </Label>
      )}
      <Input
        isError={isError}
        type={type}
        className={className}
        disabled={disabled}
        scale={scale}
        {...props}
      ></Input>
    </div>
  );
}
