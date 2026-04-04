import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldDownFromLine({
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
          d="M4.14599 10.561L8.60899 16.166C8.80899 16.417 9.19099 16.417 9.39099 16.166L13.854 10.561C14.115 10.233 13.882 9.75 13.463 9.75H11.25V5.75C11.25 5.198 10.802 4.75 10.25 4.75H7.74999C7.19799 4.75 6.74999 5.198 6.74999 5.75V9.75H4.53699C4.11799 9.75 3.88499 10.234 4.14599 10.561Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.14599 10.561L8.60899 16.166C8.80899 16.417 9.19099 16.417 9.39099 16.166L13.854 10.561C14.115 10.233 13.882 9.75 13.463 9.75H11.25V5.75C11.25 5.198 10.802 4.75 10.25 4.75H7.74999C7.19799 4.75 6.74999 5.198 6.74999 5.75V9.75H4.53699C4.11799 9.75 3.88499 10.234 4.14599 10.561Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 1.75H11.25"
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

export default ArrowBoldDownFromLine;
