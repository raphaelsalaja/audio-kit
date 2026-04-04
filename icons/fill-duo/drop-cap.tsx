import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DropCap({
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
          d="M2 14.75C2 14.3358 2.33579 14 2.75 14H15.25C15.6642 14 16 14.3358 16 14.75C16 15.1642 15.6642 15.5 15.25 15.5H2.75C2.33579 15.5 2 15.1642 2 14.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 11.25C2 10.8358 2.33579 10.5 2.75 10.5H15.25C15.6642 10.5 16 10.8358 16 11.25C16 11.6642 15.6642 12 15.25 12H2.75C2.33579 12 2 11.6642 2 11.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10 7.75C10 7.33579 10.3358 7 10.75 7H15.25C15.6642 7 16 7.33579 16 7.75C16 8.16421 15.6642 8.5 15.25 8.5H10.75C10.3358 8.5 10 8.16421 10 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10 4.25C10 3.83579 10.3358 3.5 10.75 3.5H15.25C15.6642 3.5 16 3.83579 16 4.25C16 4.66421 15.6642 5 15.25 5H10.75C10.3358 5 10 4.66421 10 4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.05501 1.5C4.74318 1.5 4.46388 1.69295 4.35354 1.98461L2.08355 7.98461C1.93698 8.37202 2.13222 8.8049 2.51963 8.95148C2.90705 9.09805 3.33993 8.9028 3.4865 8.51539L3.87065 7.5H6.86522L7.24959 8.51549C7.39622 8.90289 7.82913 9.09806 8.21652 8.95144C8.60391 8.80481 8.79909 8.3719 8.65246 7.98451L6.38145 1.98451C6.27108 1.6929 5.99181 1.5 5.68001 1.5H5.05501ZM6.29747 6L5.3676 3.54329L4.43815 6H6.29747Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default DropCap;
