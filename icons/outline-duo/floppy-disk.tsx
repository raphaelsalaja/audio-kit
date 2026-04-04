import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FloppyDisk({
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
          d="M5.25 15.75H4.41C3.217 15.75 2.25 14.783 2.25 13.59V4.41C2.25 3.217 3.217 2.25 4.41 2.25H5.25V5.25C5.25 5.802 5.698 6.25 6.25 6.25H9.75C10.302 6.25 10.75 5.802 10.75 5.25V2.25H11.836C12.101 2.25 12.356 2.355 12.543 2.543L15.457 5.457C15.645 5.645 15.75 5.899 15.75 6.164V13.59C15.75 14.783 14.783 15.75 13.59 15.75H12.75V10.75C12.75 10.198 12.302 9.75 11.75 9.75H6.25C5.698 9.75 5.25 10.198 5.25 10.75V15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M10.75 2.25V5.25C10.75 5.802 10.302 6.25 9.75 6.25H6.25C5.698 6.25 5.25 5.802 5.25 5.25V2.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 15.75V10.75C5.25 10.198 5.698 9.75 6.25 9.75H11.75C12.302 9.75 12.75 10.198 12.75 10.75V15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.59 15.75H4.41C3.217 15.75 2.25 14.783 2.25 13.59V4.41C2.25 3.217 3.217 2.25 4.41 2.25H11.836C12.101 2.25 12.356 2.355 12.543 2.543L15.457 5.457C15.645 5.645 15.75 5.899 15.75 6.164V13.59C15.75 14.783 14.783 15.75 13.59 15.75Z"
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

export default FloppyDisk;
