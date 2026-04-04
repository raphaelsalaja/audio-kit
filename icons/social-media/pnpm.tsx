import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pnpm({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "pnpm",
  ...props
}: IconProps) {
  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <rect x="0" y="0" width="78" height="78" rx="4" fill="#F9AD00" />
      <rect x="89" y="0" width="78" height="78" rx="4" fill="#F9AD00" />
      <rect x="178" y="0" width="78" height="78" rx="4" fill="#F9AD00" />
      <rect x="178" y="89" width="78" height="78" rx="4" fill="#F9AD00" />
      <rect x="0" y="178" width="78" height="78" rx="4" fill="#4E4E4E" />
      <rect x="89" y="178" width="78" height="78" rx="4" fill="#4E4E4E" />
      <rect x="178" y="178" width="78" height="78" rx="4" fill="#4E4E4E" />
      <rect x="89" y="89" width="78" height="78" rx="4" fill="#4E4E4E" />
    </svg>
  );
}

export default Pnpm;
