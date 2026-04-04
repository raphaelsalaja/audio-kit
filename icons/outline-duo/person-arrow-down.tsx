import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonArrowDown({
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
          d="M5.75 4.25C6.7165 4.25 7.5 3.4665 7.5 2.5C7.5 1.5335 6.7165 0.75 5.75 0.75C4.7835 0.75 4 1.5335 4 2.5C4 3.4665 4.7835 4.25 5.75 4.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 4.25C6.7165 4.25 7.5 3.4665 7.5 2.5C7.5 1.5335 6.7165 0.75 5.75 0.75C4.7835 0.75 4 1.5335 4 2.5C4 3.4665 4.7835 4.25 5.75 4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.34499 11.26L8.17999 7.57199C8.06499 7.20699 7.75599 6.94199 7.37799 6.88199C6.90399 6.80699 6.35599 6.75299 5.74999 6.75299C5.29199 6.75299 4.74099 6.78299 4.12399 6.88099C3.74999 6.93999 3.43699 7.19999 3.32199 7.56099C3.05099 8.41799 2.52699 10.078 2.15199 11.265C2.06699 11.533 2.21999 11.813 2.48999 11.891L3.74799 12.25L3.94999 16.3C3.97699 16.832 4.41599 17.25 4.94899 17.25H6.54699C7.07999 17.25 7.51899 16.832 7.54599 16.3L7.74799 12.25L9.00399 11.891C9.27499 11.814 9.42799 11.528 9.34299 11.26H9.34499Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 5V13"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.5 10.75L14.25 13L12 10.75"
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

export default PersonArrowDown;
