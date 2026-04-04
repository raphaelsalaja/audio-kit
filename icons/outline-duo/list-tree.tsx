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
          d="M13.25 2.75H10.75C10.1977 2.75 9.75 3.19772 9.75 3.75V6.25C9.75 6.80228 10.1977 7.25 10.75 7.25H13.25C13.8023 7.25 14.25 6.80228 14.25 6.25V3.75C14.25 3.19772 13.8023 2.75 13.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 10.75H10.75C10.1977 10.75 9.75 11.1977 9.75 11.75V14.25C9.75 14.8023 10.1977 15.25 10.75 15.25H13.25C13.8023 15.25 14.25 14.8023 14.25 14.25V11.75C14.25 11.1977 13.8023 10.75 13.25 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 2.75H10.75C10.1977 2.75 9.75 3.19772 9.75 3.75V6.25C9.75 6.80228 10.1977 7.25 10.75 7.25H13.25C13.8023 7.25 14.25 6.80228 14.25 6.25V3.75C14.25 3.19772 13.8023 2.75 13.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 10.75H10.75C10.1977 10.75 9.75 11.1977 9.75 11.75V14.25C9.75 14.8023 10.1977 15.25 10.75 15.25H13.25C13.8023 15.25 14.25 14.8023 14.25 14.25V11.75C14.25 11.1977 13.8023 10.75 13.25 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 5.25H5.25C4.422 5.25 3.75 4.578 3.75 3.75V1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 13.25H5.25C4.422 13.25 3.75 12.578 3.75 11.75V3.5"
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

export default ListTree;
