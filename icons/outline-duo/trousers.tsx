import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Trousers({
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
          d="M3.74999 4.62388L3.29299 15.208C3.26899 15.776 3.72299 16.25 4.29199 16.25H6.66999C7.15099 16.25 7.56399 15.907 7.65299 15.434L8.99999 8.25L10.347 15.434C10.436 15.907 10.849 16.25 11.33 16.25H13.708C14.276 16.25 14.731 15.776 14.707 15.208L14.25 4.62388H3.74999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7.25 1.75V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 1.75V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 4.75H3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 4.25L14.707 15.208C14.731 15.776 14.276 16.25 13.708 16.25H11.33C10.849 16.25 10.436 15.907 10.347 15.434L8.99999 8.25L7.65299 15.434C7.56399 15.907 7.15099 16.25 6.66999 16.25H4.292C3.723 16.25 3.26899 15.776 3.29299 15.208L3.74999 4.25V2.75C3.74999 2.198 4.19799 1.75 4.74999 1.75H13.25C13.802 1.75 14.25 2.198 14.25 2.75V4.25Z"
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

export default Trousers;
