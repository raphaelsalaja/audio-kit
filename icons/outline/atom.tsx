import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Atom({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M9,13.145c-.737-.551-1.486-1.199-2.216-1.929C3.557,7.989,1.934,4.382,3.158,3.158c.654-.654,1.99-.495,3.584,.288"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9,4.855c.737,.551,1.486,1.199,2.216,1.929,3.227,3.227,4.85,6.834,3.626,8.058-.654,.654-1.99,.495-3.584-.288"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.855,9c.551-.737,1.199-1.486,1.929-2.216,3.227-3.227,6.834-4.85,8.058-3.626,.654,.654,.495,1.99-.288,3.584"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.145,9c-.551,.737-1.199,1.486-1.929,2.216-3.227,3.227-6.834,4.85-8.058,3.626-.654-.654-.495-1.99,.288-3.584"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="9" cy="9" fill={secondaryfill} r="1" stroke="none" />
      </g>
    </svg>
  );
}

export default Atom;
