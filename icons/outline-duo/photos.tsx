import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Photos({
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
          d="M11.25 4C11.25 2.75736 10.2426 1.75 9 1.75C7.75736 1.75 6.75 2.75736 6.75 4V5.5C6.75 6.74264 7.75736 7.75 9 7.75C10.2426 7.75 11.25 6.74264 11.25 5.5V4Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14 11.25C15.2426 11.25 16.25 10.2426 16.25 9C16.25 7.75736 15.2426 6.75 14 6.75H12.5C11.2574 6.75 10.25 7.75736 10.25 9C10.25 10.2426 11.2574 11.25 12.5 11.25H14Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 14C6.75 15.2426 7.75736 16.25 9 16.25C10.2426 16.25 11.25 15.2426 11.25 14V12.5C11.25 11.2574 10.2426 10.25 9 10.25C7.75736 10.25 6.75 11.2574 6.75 12.5L6.75 14Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4 6.75C2.75736 6.75 1.75 7.75736 1.75 9C1.75 10.2426 2.75736 11.25 4 11.25H5.5C6.74264 11.25 7.75 10.2426 7.75 9C7.75 7.75736 6.74264 6.75 5.5 6.75H4Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.221 3.638C12.1 3.003 13.335 3.082 14.127 3.873C14.919 4.665 14.997 5.899 14.362 6.779"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.362 11.221C14.997 12.1 14.918 13.335 14.127 14.127C13.335 14.919 12.101 14.997 11.221 14.362"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.77899 14.362C5.89999 14.997 4.66499 14.918 3.87299 14.127C3.08099 13.335 3.00299 12.101 3.63799 11.221"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.638 6.779C3.003 5.9 3.082 4.665 3.873 3.873C4.665 3.081 5.899 3.003 6.779 3.638"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 4C11.25 2.75736 10.2426 1.75 9 1.75C7.75736 1.75 6.75 2.75736 6.75 4V5.5C6.75 6.74264 7.75736 7.75 9 7.75C10.2426 7.75 11.25 6.74264 11.25 5.5V4Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 11.25C15.2426 11.25 16.25 10.2426 16.25 9C16.25 7.75736 15.2426 6.75 14 6.75H12.5C11.2574 6.75 10.25 7.75736 10.25 9C10.25 10.2426 11.2574 11.25 12.5 11.25H14Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 14C6.75 15.2426 7.75736 16.25 9 16.25C10.2426 16.25 11.25 15.2426 11.25 14V12.5C11.25 11.2574 10.2426 10.25 9 10.25C7.75736 10.25 6.75 11.2574 6.75 12.5L6.75 14Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 6.75C2.75736 6.75 1.75 7.75736 1.75 9C1.75 10.2426 2.75736 11.25 4 11.25H5.5C6.74264 11.25 7.75 10.2426 7.75 9C7.75 7.75736 6.74264 6.75 5.5 6.75H4Z"
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

export default Photos;
