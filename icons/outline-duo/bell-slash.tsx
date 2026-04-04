import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BellSlash({
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
          d="M15.75 12.7889L9.05928 12.7889L8.92902 12.2529L13.2036 7.97832L13.75 8.26798V11.25C13.75 12.355 14.645 12.7889 15.75 12.7889Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.3683 4.63164C12.6425 2.93728 10.9597 1.75 9 1.75C6.377 1.75 4.25 3.877 4.25 6.5V10.7472C4.25 11.8522 3.355 12.7472 2.25 12.7472H5.29251L13.3683 4.63164Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M13.3767 4.6512C12.6555 2.9464 10.9673 1.75 9 1.75C6.377 1.75 4.25 3.877 4.25 6.5V10.75C4.25 11.855 3.355 12.75 2.25 12.75H5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.49219 12.75H15.75C14.645 12.75 13.75 11.855 13.75 10.75V8.4922"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.5 15.3843C10.2005 15.9018 9.6409 16.25 9 16.25C8.3591 16.25 7.7995 15.9018 7.5 15.3843"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
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

export default BellSlash;
