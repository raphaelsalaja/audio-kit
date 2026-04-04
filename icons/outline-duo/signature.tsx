import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Signature({
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
          d="M2.75 5V12.5C2.75 14.5 4.5 16.25 4.5 16.25C4.5 16.25 6.25 14.5 6.25 12.5V5H2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.75 5.25H7.75C8.302 5.25 8.75 5.698 8.75 6.25V10"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.995 16.25C9.909 12.852 10.928 11.976 11.486 12.151C12.381 12.43 12.121 15.426 13.069 15.601C13.768 15.73 14.387 14.191 15.139 14.383C15.746 14.538 15.709 15.632 16.397 15.844C16.673 15.929 16.971 15.844 17.25 15.688"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 12.5C6.25 14.5 4.5 16.25 4.5 16.25C4.5 16.25 2.75 14.5 2.75 12.5V3.5C2.75 2.534 3.534 1.75 4.5 1.75C5.466 1.75 6.25 2.534 6.25 3.5V12.5Z"
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

export default Signature;
