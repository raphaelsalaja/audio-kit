import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Patches({
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
          d="M11.652 11.652L15.165 8.13899C15.946 7.35799 15.946 6.09199 15.165 5.31099L12.69 2.83599C11.909 2.05499 10.643 2.05499 9.86199 2.83599L6.34899 6.34899L2.83599 9.86199C2.05499 10.643 2.05499 11.909 2.83599 12.69L5.31099 15.165C6.09199 15.946 7.35799 15.946 8.13899 15.165L11.652 11.652Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.99999 3.69699L8.13899 2.83599C7.35799 2.05499 6.09199 2.05499 5.31099 2.83599L2.83599 5.31099C2.05499 6.09199 2.05499 7.35799 2.83599 8.13899L3.69699 8.99999"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.303 9L15.164 9.861C15.945 10.642 15.945 11.908 15.164 12.689L12.689 15.164C11.908 15.945 10.642 15.945 9.861 15.164L9 14.303"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.652 11.652L15.165 8.13899C15.946 7.35799 15.946 6.09199 15.165 5.31099L12.69 2.83599C11.909 2.05499 10.643 2.05499 9.86199 2.83599L6.34899 6.34899L2.83599 9.86199C2.05499 10.643 2.05499 11.909 2.83599 12.69L5.31099 15.165C6.09199 15.946 7.35799 15.946 8.13899 15.165L11.652 11.652Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25 7.5C9.66421 7.5 10 7.16421 10 6.75C10 6.33579 9.66421 6 9.25 6C8.83579 6 8.5 6.33579 8.5 6.75C8.5 7.16421 8.83579 7.5 9.25 7.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.25 9.5C11.6642 9.5 12 9.16421 12 8.75C12 8.33579 11.6642 8 11.25 8C10.8358 8 10.5 8.33579 10.5 8.75C10.5 9.16421 10.8358 9.5 11.25 9.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.75 10C7.16421 10 7.5 9.66421 7.5 9.25C7.5 8.83579 7.16421 8.5 6.75 8.5C6.33579 8.5 6 8.83579 6 9.25C6 9.66421 6.33579 10 6.75 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8.75 12C9.16421 12 9.5 11.6642 9.5 11.25C9.5 10.8358 9.16421 10.5 8.75 10.5C8.33579 10.5 8 10.8358 8 11.25C8 11.6642 8.33579 12 8.75 12Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 9.75C9.41421 9.75 9.75 9.41421 9.75 9C9.75 8.58579 9.41421 8.25 9 8.25C8.58579 8.25 8.25 8.58579 8.25 9C8.25 9.41421 8.58579 9.75 9 9.75Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Patches;
