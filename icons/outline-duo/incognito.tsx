import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Incognito({
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
          d="M11.883 1.75H6.117C5.619 1.75 5.197 2.116 5.127 2.609L4.75 5.25L1.75 8.25H16.25L13.25 5.25L12.873 2.609C12.803 2.116 12.381 1.75 11.883 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25 16.25C6.63071 16.25 7.75 15.1307 7.75 13.75C7.75 12.3693 6.63071 11.25 5.25 11.25C3.86929 11.25 2.75 12.3693 2.75 13.75C2.75 15.1307 3.86929 16.25 5.25 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 16.25C14.1307 16.25 15.25 15.1307 15.25 13.75C15.25 12.3693 14.1307 11.25 12.75 11.25C11.3693 11.25 10.25 12.3693 10.25 13.75C10.25 15.1307 11.3693 16.25 12.75 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.883 1.75H6.117C5.619 1.75 5.197 2.116 5.127 2.609L4.75 5.25L1.75 8.25H16.25L13.25 5.25L12.873 2.609C12.803 2.116 12.381 1.75 11.883 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 5.25H13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.58002 12.842C7.94202 12.477 8.44502 12.25 9.00002 12.25C9.55502 12.25 10.058 12.476 10.42 12.842"
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

export default Incognito;
