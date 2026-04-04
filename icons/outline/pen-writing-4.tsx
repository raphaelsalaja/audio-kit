import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenWriting4({
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
          d="M3.83549 10.25H3.25C2.422 10.25 1.75 10.922 1.75 11.75C1.75 12.578 2.422 13.25 3.25 13.25H14.75C15.578 13.25 16.25 13.922 16.25 14.75C16.25 15.578 15.578 16.25 14.75 16.25H12.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 10.25C6.75 10.25 9.0838 10.1662 9.909 9.34101L14.784 4.46601C15.4053 3.84471 15.4053 2.83731 14.784 2.21601C14.1627 1.59471 13.1553 1.59471 12.534 2.21601L7.659 7.09101C6.8809 7.86911 6.75 10.25 6.75 10.25Z"
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

export default PenWriting4;
