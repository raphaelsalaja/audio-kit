import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DeleteLeft({
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
          d="M13.25 3.75H5.477C5.175 3.75 4.89 3.886 4.7 4.121L0.75 9L4.7 13.879C4.89 14.114 5.175 14.25 5.477 14.25H13.25C14.355 14.25 15.25 13.355 15.25 12.25V5.75C15.25 4.645 14.355 3.75 13.25 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 3.75H5.477C5.175 3.75 4.89 3.886 4.7 4.121L0.75 9L4.7 13.879C4.89 14.114 5.175 14.25 5.477 14.25H13.25C14.355 14.25 15.25 13.355 15.25 12.25V5.75C15.25 4.645 14.355 3.75 13.25 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 6.75L11.25 11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 6.75L6.75 11.25"
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

export default DeleteLeft;
