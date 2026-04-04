import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Person({
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
          d="M9 4.25C9.9665 4.25 10.75 3.4665 10.75 2.5C10.75 1.5335 9.9665 0.75 9 0.75C8.0335 0.75 7.25 1.5335 7.25 2.5C7.25 3.4665 8.0335 4.25 9 4.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 4.25C9.9665 4.25 10.75 3.4665 10.75 2.5C10.75 1.5335 9.9665 0.75 9 0.75C8.0335 0.75 7.25 1.5335 7.25 2.5C7.25 3.4665 8.0335 4.25 9 4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.595 11.26L11.43 7.57199C11.315 7.20699 11.006 6.94199 10.628 6.88199C10.154 6.80699 9.606 6.75299 9 6.75299C8.542 6.75299 7.991 6.78299 7.374 6.88099C7 6.93999 6.687 7.19999 6.572 7.56099C6.301 8.41799 5.777 10.078 5.402 11.265C5.317 11.533 5.47 11.813 5.74 11.891L6.998 12.25L7.2 16.3C7.227 16.832 7.666 17.25 8.199 17.25H9.797C10.33 17.25 10.769 16.832 10.796 16.3L10.998 12.25L12.254 11.891C12.525 11.814 12.678 11.528 12.593 11.26H12.595Z"
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

export default Person;
