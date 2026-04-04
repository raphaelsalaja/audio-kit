import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseBolt({
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
          d="M10.7764 14.8301C10.3799 14.107 10.4112 13.2271 10.8575 12.5332L13.1075 9.0332C13.5245 8.3857 14.2325 8.00049 15.002 8.00049C15.3282 8.00049 15.6446 8.0698 15.9415 8.2066C16.0372 8.251 16.2287 8.09772 16.2501 8.03522V6.75C16.2501 5.645 15.3551 4.75 14.2501 4.75H3.75012C2.64512 4.75 1.75012 5.645 1.75012 6.75V13.25C1.75012 14.355 2.64512 15.25 3.75012 15.25H10.5939C10.7374 15.1922 10.8602 14.9829 10.7764 14.8301Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 4.75V2.25C6.25 1.698 6.698 1.25 7.25 1.25H10.75C11.302 1.25 11.75 1.698 11.75 2.25V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.52307V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V13.25C1.75 14.354 2.645 15.25 3.75 15.25H10.1525"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.417 13.75H12.75L15 10.25L14.083 13.25H16.75L14.5 16.75L15.417 13.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default SuitcaseBolt;
