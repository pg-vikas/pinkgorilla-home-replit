import { cn } from "@/lib/utils";

interface GeometricShapeProps {
  className?: string;
  type?: "circle" | "square" | "pill" | "triangle" | "hexagon";
  color?: "primary" | "secondary" | "accent" | "white";
  variant?: "solid" | "outline" | "glass" | "glow";
  size?: string; // Tailwind class like w-20 h-20
}

export function GeometricShape({
  className,
  type = "circle",
  color = "primary",
  variant = "glass",
  size = "w-20 h-20",
}: GeometricShapeProps) {
  const colorMap = {
    primary: "text-primary border-primary bg-primary",
    secondary: "text-secondary border-secondary bg-secondary",
    accent: "text-accent border-accent bg-accent",
    white: "text-white border-white bg-white",
  };

  const baseStyles = cn(size, "transition-all duration-500");

  let shapeStyles = "";
  if (type === "circle") shapeStyles = "rounded-full";
  if (type === "square") shapeStyles = "rounded-2xl";
  if (type === "pill") shapeStyles = "rounded-full aspect-[2/1]";

  let visualStyles = "";
  // Opacity handling is done via opacity utility classes in usage or here
  if (variant === "solid") {
    visualStyles = cn(colorMap[color].split(" ").find(c => c.startsWith("bg-")) || "", "bg-opacity-20 backdrop-blur-md");
  } else if (variant === "outline") {
    visualStyles = "border-2 bg-transparent";
  } else if (variant === "glass") {
    visualStyles = "bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl";
  } else if (variant === "glow") {
    visualStyles = cn(colorMap[color].split(" ").find(c => c.startsWith("bg-")) || "", "blur-[40px] opacity-40");
  }

  // Color application for border/text if needed
  const borderColor = colorMap[color].split(" ").find(c => c.startsWith("border-"));
  
  return (
    <div className={cn(baseStyles, shapeStyles, visualStyles, borderColor, className)}>
      {type === "triangle" && (
        <svg viewBox="0 0 100 100" className={cn("w-full h-full fill-current opacity-20", colorMap[color].split(" ").find(c => c.startsWith("text-")))}>
          <path d="M50 15 L90 85 L10 85 Z" />
        </svg>
      )}
      {type === "hexagon" && (
         <svg viewBox="0 0 100 100" className={cn("w-full h-full fill-current opacity-20", colorMap[color].split(" ").find(c => c.startsWith("text-")))}>
          <path d="M25 5 L75 5 L100 50 L75 95 L25 95 L0 50 Z" />
        </svg>
      )}
    </div>
  );
}
