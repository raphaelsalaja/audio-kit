import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Upload2({
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
          d="M13.148 3H13.926C15.072 3 16 3.93007 16 5.08997V12.9102C16 14.0701 15.072 15.0001 13.926 15.0001H4.07401C2.92801 15.0001 2 14.0701 2 12.9102V5.08997C2 3.93007 2.92801 3 4.07401 3H4.85201"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M13.2422 3.25H13.75C14.855 3.25 15.75 4.14 15.75 5.25V12.75C15.75 13.86 14.855 14.75 13.75 14.75H4.25C3.145 14.75 2.25 13.86 2.25 12.75V5.25C2.25 4.14 3.145 3.25 4.25 3.25H4.7578"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 6.25L9 3.25L12 6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 3.25V11.75"
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

export default Upload2;
