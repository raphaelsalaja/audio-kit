import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Album2({
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
          d="M5 1.25C5 0.835786 5.33579 0.5 5.75 0.5H12.25C12.6642 0.5 13 0.835786 13 1.25C13 1.66421 12.6642 2 12.25 2H5.75C5.33579 2 5 1.66421 5 1.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3 4.25C3 3.83579 3.33579 3.5 3.75 3.5H14.25C14.6642 3.5 15 3.83579 15 4.25C15 4.66421 14.6642 5 14.25 5H3.75C3.33579 5 3 4.66421 3 4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.37937 8.71869C1.0697 7.60396 1.90788 6.5 3.06602 6.5H14.934C16.0904 6.5 16.9304 7.60219 16.6207 8.7185L14.6768 15.7183C14.4663 16.477 13.7759 17 12.99 17H5.01001C4.22346 17 3.53519 16.4749 3.32381 15.7203L3.32337 15.7187L1.37937 8.71869Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Album2;
