import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BatteryFull({
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
          d="M3.75 4.25H13.75C14.8546 4.25 15.75 5.14543 15.75 6.25V11.75C15.75 12.8546 14.8546 13.75 13.75 13.75H3.75C2.64543 13.75 1.75 12.8546 1.75 11.75V6.25C1.75 5.14543 2.64543 4.25 3.75 4.25ZM4.67172 7.16125V10.6889H12.7531V7.16125H4.67172Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M13.75 4.25H3.75C2.64543 4.25 1.75 5.14543 1.75 6.25V11.75C1.75 12.8546 2.64543 13.75 3.75 13.75H13.75C14.8546 13.75 15.75 12.8546 15.75 11.75V6.25C15.75 5.14543 14.8546 4.25 13.75 4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 7.75H15.75V10.25H17.25V7.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 10.75V7.25H12.75V10.75H4.75Z"
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

export default BatteryFull;
