import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TabsPlus({
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
          d="M4.25 2.75H6.75V6.25H15.75V9.31409C15.75 9.50629 15.5881 9.65555 15.5034 9.62585C15.2679 9.54325 15.0141 9.50012 14.75 9.50012C13.507 9.50012 12.5 10.5101 12.5 11.7501V12.0001H12.25C11.007 12.0001 10 13.0101 10 14.2501C10 14.5134 10.0449 14.7661 10.1278 15.0002C10.1582 15.0861 10.0176 15.2501 9.84711 15.2501H4.25C3.145 15.2501 2.25 14.3501 2.25 13.2501V4.75012C2.25 3.65012 3.145 2.75 4.25 2.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 2.75H13.75C14.855 2.75 15.75 3.64 15.75 4.75V6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 2.75V6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 11.75V16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 14.25H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 8.92297V6.25H6.75V2.75H4.25C3.145 2.75 2.25 3.64 2.25 4.75V13.25C2.25 14.36 3.145 15.25 4.25 15.25H9.42281"
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

export default TabsPlus;
