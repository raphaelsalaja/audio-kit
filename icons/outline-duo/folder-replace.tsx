import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderReplace({
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
          d="M11.874 10.75H14.75C15.578 10.75 16.25 11.422 16.25 12.25V14.75C16.25 15.578 15.578 16.25 14.75 16.25H8.75C7.922 16.25 7.25 15.578 7.25 14.75V9.75C7.25 9.198 7.698 8.75 8.25 8.75H9.774C10.075 8.75 10.361 8.886 10.55 9.12L11.874 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.874 10.75H14.75C15.578 10.75 16.25 11.422 16.25 12.25V14.75C16.25 15.578 15.578 16.25 14.75 16.25H8.75C7.922 16.25 7.25 15.578 7.25 14.75V9.75C7.25 9.198 7.698 8.75 8.25 8.75H9.774C10.075 8.75 10.361 8.886 10.55 9.12L11.874 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 6.25V5.25C10.75 4.422 10.078 3.75 9.24998 3.75H6.37398L5.05098 2.12C4.86098 1.886 4.57598 1.75 4.27498 1.75H2.75098C2.19898 1.75 1.75098 2.198 1.75098 2.75V7.75C1.75098 8.578 2.42298 9.25 3.25098 9.25H4.75098"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.745 14.708C3.329 14.468 2.25 13.235 2.25 11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.255 5.29199C14.671 5.53199 15.75 6.76499 15.75 8.24999"
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

export default FolderReplace;
