import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ObjAdd({
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
          d="M2.75101 11C3.16522 11 3.50101 11.3358 3.50101 11.75V13.25C3.50101 13.9408 4.06022 14.5 4.75101 14.5H13.251C13.9418 14.5 14.501 13.9408 14.501 13.25V11.75C14.501 11.3358 14.8368 11 15.251 11C15.6652 11 16.001 11.3358 16.001 11.75V13.25C16.001 14.7692 14.7702 16 13.251 16H4.75101C3.23179 16 2.00101 14.7692 2.00101 13.25V11.75C2.00101 11.3358 2.33679 11 2.75101 11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.75101 2.75C9.75101 2.33579 9.41522 2 9.00101 2C8.58679 2 8.25101 2.33579 8.25101 2.75V5.5H5.50101C5.08679 5.5 4.75101 5.83579 4.75101 6.25C4.75101 6.66421 5.08679 7 5.50101 7H8.25101V9.75C8.25101 10.1642 8.58679 10.5 9.00101 10.5C9.41522 10.5 9.75101 10.1642 9.75101 9.75V7H12.501C12.9152 7 13.251 6.66421 13.251 6.25C13.251 5.83579 12.9152 5.5 12.501 5.5H9.75101V2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ObjAdd;
