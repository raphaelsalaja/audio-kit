import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ListTree({
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
          d="M13.25 2.75H10.75C10.198 2.75 9.75 3.198 9.75 3.75V6.25C9.75 6.802 10.198 7.25 10.75 7.25H13.25C13.802 7.25 14.25 6.802 14.25 6.25V3.75C14.25 3.198 13.802 2.75 13.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 10.75H10.75C10.198 10.75 9.75 11.198 9.75 11.75V14.25C9.75 14.802 10.198 15.25 10.75 15.25H13.25C13.802 15.25 14.25 14.802 14.25 14.25V11.75C14.25 11.198 13.802 10.75 13.25 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 5.25H5.25C4.422 5.25 3.75 4.578 3.75 3.75V1.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 13.25H5.25C4.422 13.25 3.75 12.578 3.75 11.75V3.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ListTree;
