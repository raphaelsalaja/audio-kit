import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonDress({
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
          d="M9.001 4.25C9.9675 4.25 10.751 3.4665 10.751 2.5C10.751 1.5335 9.9675 0.75 9.001 0.75C8.0345 0.75 7.251 1.5335 7.251 2.5C7.251 3.4665 8.0345 4.25 9.001 4.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.001 4.25C9.9675 4.25 10.751 3.4665 10.751 2.5C10.751 1.5335 9.9675 0.75 9.001 0.75C8.0345 0.75 7.251 1.5335 7.251 2.5C7.251 3.4665 8.0345 4.25 9.001 4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.076 13.617L11.417 7.60301C11.312 7.22101 10.996 6.93901 10.605 6.87701C10.136 6.80401 9.597 6.75201 9.001 6.75201C8.551 6.75201 8.011 6.78101 7.407 6.87501C7.015 6.93601 6.69 7.21901 6.585 7.60101L4.926 13.615C4.838 13.933 5.078 14.248 5.408 14.248H7.001L7.175 16.331C7.218 16.849 7.651 17.248 8.172 17.248H9.832C10.352 17.248 10.785 16.849 10.829 16.331L11.003 14.248H12.596C12.926 14.248 13.166 13.933 13.078 13.615L13.076 13.617Z"
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

export default PersonDress;
