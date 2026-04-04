import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaperPlane4({
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
          d="M15.472 9.458L4.00499 15.412C3.60099 15.622 3.14199 15.244 3.27199 14.807L4.99299 9L3.27199 3.193C3.14299 2.756 3.60099 2.378 4.00499 2.588L15.471 8.542C15.842 8.735 15.842 9.266 15.471 9.459L15.472 9.458Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.38601 9H4.99301"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.472 9.458L4.00499 15.412C3.60099 15.622 3.14199 15.244 3.27199 14.807L4.99299 9L3.27199 3.193C3.14299 2.756 3.60099 2.378 4.00499 2.588L15.471 8.542C15.842 8.735 15.842 9.266 15.471 9.459L15.472 9.458Z"
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

export default PaperPlane4;
