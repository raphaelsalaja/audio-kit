import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TabletMobile({
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
          d="M15.25 14.75V9.25C15.25 8.42 14.578 7.75 13.75 7.75H11.25C10.422 7.75 9.75 8.42 9.75 9.25V14.75C9.75 15.58 10.422 16.25 11.25 16.25H13.75C14.578 16.25 15.25 15.58 15.25 14.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 14.25H4.75C3.645 14.25 2.75 13.36 2.75 12.25V3.75C2.75 2.64 3.645 1.75 4.75 1.75H11.25C12.355 1.75 13.25 2.64 13.25 3.75V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 14.75V9.25C15.25 8.42 14.578 7.75 13.75 7.75H11.25C10.422 7.75 9.75 8.42 9.75 9.25V14.75C9.75 15.58 10.422 16.25 11.25 16.25H13.75C14.578 16.25 15.25 15.58 15.25 14.75Z"
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

export default TabletMobile;
