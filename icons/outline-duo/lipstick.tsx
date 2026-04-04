import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Lipstick({
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
          d="M7.25 7.75001V3.29001C7.25 3.11101 7.346 2.94501 7.502 2.85601L10.002 1.42701C10.335 1.23701 10.75 1.47701 10.75 1.86101V7.75001"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 10.75H12.25C12.802 10.75 13.25 11.198 13.25 11.75V14.25C13.25 15.354 12.354 16.25 11.25 16.25H6.75C5.646 16.25 4.75 15.354 4.75 14.25V11.75C4.75 11.198 5.198 10.75 5.75 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.25 7.75001V3.29001C7.25 3.11101 7.346 2.94501 7.502 2.85601L10.002 1.42701C10.335 1.23701 10.75 1.47701 10.75 1.86101V7.75001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 10.75V8.75C5.75 8.198 6.198 7.75 6.75 7.75H11.25C11.802 7.75 12.25 8.198 12.25 8.75V10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 10.75H12.25C12.802 10.75 13.25 11.198 13.25 11.75V14.25C13.25 15.354 12.354 16.25 11.25 16.25H6.75C5.646 16.25 4.75 15.354 4.75 14.25V11.75C4.75 11.198 5.198 10.75 5.75 10.75Z"
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

export default Lipstick;
