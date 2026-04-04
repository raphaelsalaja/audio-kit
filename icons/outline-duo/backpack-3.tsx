import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Backpack3({
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
          d="M14.75 9.5C14.75 6.324 12.176 3.75 9 3.75C5.824 3.75 3.25 6.324 3.25 9.5V14.25C3.25 15.355 4.145 16.25 5.25 16.25H6.25V10.5C6.25 8.9812 7.4812 7.75 9 7.75C10.5188 7.75 11.75 8.9812 11.75 10.5V16.25H12.75C13.855 16.25 14.75 15.355 14.75 14.25V9.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 11.25H11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 3.957V2.25C6.75 1.4216 7.4216 0.75 8.25 0.75H9.75C10.5784 0.75 11.25 1.4216 11.25 2.25V3.957"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 3.75C12.176 3.75 14.75 6.324 14.75 9.5V14.25C14.75 15.355 13.855 16.25 12.75 16.25H5.25C4.145 16.25 3.25 15.355 3.25 14.25V9.5C3.25 6.324 5.824 3.75 9 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 16.25V10.5C6.25 8.9812 7.4812 7.75 9 7.75C10.5188 7.75 11.75 8.9812 11.75 10.5V16.25"
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

export default Backpack3;
