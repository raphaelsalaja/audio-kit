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
          d="M6.836 10.914C7.226 10.908 9.23 10.831 10.117 9.94401L15.367 4.694C16.21 3.85 16.21 2.477 15.367 1.633C14.548 0.816005 13.122 0.817005 12.306 1.633L7.056 6.884C6.169 7.77 6.093 9.762 6.086 10.152C6.083 10.355 6.162 10.551 6.306 10.694C6.447 10.835 6.638 10.914 6.836 10.914Z"
          fill={fill}
        />
        <path
          d="M1 11.75C1 10.5078 2.00779 9.5 3.25 9.5H3.83549C4.2497 9.5 4.58549 9.83579 4.58549 10.25C4.58549 10.6642 4.2497 11 3.83549 11H3.25C2.83621 11 2.5 11.3362 2.5 11.75C2.5 12.1638 2.83621 12.5 3.25 12.5H14.75C15.9922 12.5 17 13.5078 17 14.75C17 15.9922 15.9922 17 14.75 17H12.75C12.3358 17 12 16.6642 12 16.25C12 15.8358 12.3358 15.5 12.75 15.5H14.75C15.1638 15.5 15.5 15.1638 15.5 14.75C15.5 14.3362 15.1638 14 14.75 14H3.25C2.00779 14 1 12.9922 1 11.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PenWriting4;
