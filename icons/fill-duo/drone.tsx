import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Drone({
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
          d="M1.5 7.5C1.5 6.11851 2.62007 5 4 5H14C15.3799 5 16.5 6.11851 16.5 7.5C16.5 8.88149 15.3799 10 14 10H12.6901L12.4974 12.3123H5.50259L5.3099 10H4C2.62007 10 1.5 8.88149 1.5 7.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.25 1C4.66421 1 5 1.33579 5 1.75V2H7.25C7.66421 2 8 2.33579 8 2.75C8 3.16421 7.66421 3.5 7.25 3.5H5V5H4C3.82879 5 3.66157 5.01722 3.5 5.05002V3.5H1.25C0.835786 3.5 0.5 3.16421 0.5 2.75C0.5 2.33579 0.835786 2 1.25 2H3.5V1.75C3.5 1.33579 3.83579 1 4.25 1Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.75 1C14.1642 1 14.5 1.33579 14.5 1.75V2H16.75C17.1642 2 17.5 2.33579 17.5 2.75C17.5 3.16421 17.1642 3.5 16.75 3.5H14.5V5.05002C14.3384 5.01722 14.1712 5 14 5H13V3.5H10.75C10.3358 3.5 10 3.16421 10 2.75C10 2.33579 10.3358 2 10.75 2H13V1.75C13 1.33579 13.3358 1 13.75 1Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 16.25C1.5 13.6268 3.62679 11.5 6.25 11.5H11.75C14.3732 11.5 16.5 13.6268 16.5 16.25C16.5 16.6642 16.1642 17 15.75 17C15.3358 17 15 16.6642 15 16.25C15 14.4552 13.5448 13 11.75 13H6.25C4.45521 13 3 14.4552 3 16.25C3 16.6642 2.66421 17 2.25 17C1.83579 17 1.5 16.6642 1.5 16.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 10C9.552 10 10 9.552 10 9C10 8.448 9.552 8 9 8C8.448 8 8 8.448 8 9C8 9.552 8.448 10 9 10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Drone;
