import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Engine({
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
          d="M13.25 7.75H11.75L10.55 6.15C10.361 5.898 10.065 5.75 9.75 5.75H5.75C5.435 5.75 5.139 5.898 4.95 6.15L3.75 7.75H2.75C2.198 7.75 1.75 8.198 1.75 8.75V11.25C1.75 11.802 2.198 12.25 2.75 12.25H3.75L4.95 13.85C5.139 14.102 5.435 14.25 5.75 14.25H13.25C13.802 14.25 14.25 13.802 14.25 13.25V8.75C14.25 8.198 13.802 7.75 13.25 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M17.25 8.75V13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 7.75H11.75L10.55 6.15C10.361 5.898 10.065 5.75 9.75 5.75H5.75C5.435 5.75 5.139 5.898 4.95 6.15L3.75 7.75H2.75C2.198 7.75 1.75 8.198 1.75 8.75V11.25C1.75 11.802 2.198 12.25 2.75 12.25H3.75L4.95 13.85C5.139 14.102 5.435 14.25 5.75 14.25H13.25C13.802 14.25 14.25 13.802 14.25 13.25V8.75C14.25 8.198 13.802 7.75 13.25 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 1.75H10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 11H17.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 1.75V3.25"
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

export default Engine;
