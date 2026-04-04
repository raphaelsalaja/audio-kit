import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderContent({
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
          d="M8.12399 7.75H13.75C14.8546 7.75 15.75 8.6454 15.75 9.75V13.25C15.75 14.3546 14.8546 15.25 13.75 15.25H4.25C3.1454 15.25 2.25 14.3546 2.25 13.25C2.25 13.25 2.25001 8.3923 2.25021 6.2475C2.25021 5.6952 2.69791 5.25 3.25021 5.25H6.35379C6.74749 5.25 7.10459 5.48101 7.26599 5.84021L8.12399 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 2.25H14.2272L14.25 4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.12399 7.75H13.75C14.8546 7.75 15.75 8.6454 15.75 9.75V13.25C15.75 14.3546 14.8546 15.25 13.75 15.25H4.25C3.1454 15.25 2.25 14.3546 2.25 13.25C2.25 13.25 2.25001 8.3923 2.25021 6.2475C2.25021 5.6952 2.69791 5.25 3.25021 5.25H6.35379C6.74749 5.25 7.10459 5.48101 7.26599 5.84021L8.12399 7.75Z"
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

export default FolderContent;
