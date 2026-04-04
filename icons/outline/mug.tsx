import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Mug({
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
          d="M12.821,4.75h2.429c.552,0,1,.448,1,1v1.5c0,1.657-1.343,3-3,3h-.76"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8,15.25h3.993c.637,0,1.105-.585,.977-1.209-.287-1.398-.512-3.101-.512-5.041,0-1.356,.11-3.087,.514-5.051,.127-.618-.346-1.199-.976-1.199h-3.996s-3.996,0-3.996,0c-.631,0-1.103,.581-.976,1.199,.404,1.964,.514,3.695,.514,5.051,0,1.94-.225,3.643-.512,5.041-.128,.624,.34,1.209,.977,1.209h3.993Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Mug;
