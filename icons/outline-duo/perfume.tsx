import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Perfume({
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
          d="M6.43899 16.25H12.56C13.881 15.297 14.749 13.754 14.749 12C14.749 9.101 12.399 6.75 9.49899 6.75C6.59899 6.75 4.24899 9.101 4.24899 12C4.24899 13.754 5.11799 15.297 6.43899 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 4.5C14.6642 4.5 15 4.16421 15 3.75C15 3.33579 14.6642 3 14.25 3C13.8358 3 13.5 3.33579 13.5 3.75C13.5 4.16421 13.8358 4.5 14.25 4.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.75 3C17.1642 3 17.5 2.66421 17.5 2.25C17.5 1.83579 17.1642 1.5 16.75 1.5C16.3358 1.5 16 1.83579 16 2.25C16 2.66421 16.3358 3 16.75 3Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.75 6C17.1642 6 17.5 5.66421 17.5 5.25C17.5 4.83579 17.1642 4.5 16.75 4.5C16.3358 4.5 16 4.83579 16 5.25C16 5.66421 16.3358 6 16.75 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.75 6.969V2.75C7.75 2.198 8.198 1.75 8.75 1.75H10.25C10.802 1.75 11.25 2.198 11.25 2.75V6.969"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.43899 16.25H12.56C13.881 15.297 14.749 13.754 14.749 12C14.749 9.101 12.399 6.75 9.49899 6.75C6.59899 6.75 4.24899 9.101 4.24899 12C4.24899 13.754 5.11799 15.297 6.43899 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 11.75H14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.815 9.00001C2.811 6.45801 5.033 4.52601 7.75 3.93701"
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

export default Perfume;
