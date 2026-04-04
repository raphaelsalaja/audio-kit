import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CodeMerge({
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
          d="M4.75 6.25C5.99264 6.25 7 5.24264 7 4C7 2.75736 5.99264 1.75 4.75 1.75C3.50736 1.75 2.5 2.75736 2.5 4C2.5 5.24264 3.50736 6.25 4.75 6.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 14.75C14.4926 14.75 15.5 13.7426 15.5 12.5C15.5 11.2574 14.4926 10.25 13.25 10.25C12.0074 10.25 11 11.2574 11 12.5C11 13.7426 12.0074 14.75 13.25 14.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 6.25V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11 12.5C7.548 12.5 4.75 9.702 4.75 6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 6.25C5.99264 6.25 7 5.24264 7 4C7 2.75736 5.99264 1.75 4.75 1.75C3.50736 1.75 2.5 2.75736 2.5 4C2.5 5.24264 3.50736 6.25 4.75 6.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 14.75C14.4926 14.75 15.5 13.7426 15.5 12.5C15.5 11.2574 14.4926 10.25 13.25 10.25C12.0074 10.25 11 11.2574 11 12.5C11 13.7426 12.0074 14.75 13.25 14.75Z"
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

export default CodeMerge;
