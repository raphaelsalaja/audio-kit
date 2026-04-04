import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LockOpen2({
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
          d="M13.25 8.25H5.75C4.64543 8.25 3.75 9.14543 3.75 10.25V14.25C3.75 15.3546 4.64543 16.25 5.75 16.25H13.25C14.3546 16.25 15.25 15.3546 15.25 14.25V10.25C15.25 9.14543 14.3546 8.25 13.25 8.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.25 8.25V5C7.25 3.205 5.795 1.75 4 1.75C2.205 1.75 0.75 3.205 0.75 5V6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.5 11.75V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 8.25H5.75C4.64543 8.25 3.75 9.14543 3.75 10.25V14.25C3.75 15.3546 4.64543 16.25 5.75 16.25H13.25C14.3546 16.25 15.25 15.3546 15.25 14.25V10.25C15.25 9.14543 14.3546 8.25 13.25 8.25Z"
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

export default LockOpen2;
