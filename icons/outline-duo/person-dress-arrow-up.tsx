import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonDressArrowUp({
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
          d="M6.00101 4.25C6.96751 4.25 7.75101 3.4665 7.75101 2.5C7.75101 1.5335 6.96751 0.75 6.00101 0.75C5.03451 0.75 4.25101 1.5335 4.25101 2.5C4.25101 3.4665 5.03451 4.25 6.00101 4.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.00101 4.25C6.96751 4.25 7.75101 3.4665 7.75101 2.5C7.75101 1.5335 6.96751 0.75 6.00101 0.75C5.03451 0.75 4.25101 1.5335 4.25101 2.5C4.25101 3.4665 5.03451 4.25 6.00101 4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.076 13.617L8.41701 7.60301C8.31201 7.22101 7.99601 6.93901 7.60501 6.87701C7.13601 6.80401 6.59701 6.75201 6.00101 6.75201C5.55101 6.75201 5.01101 6.78101 4.40701 6.87501C4.01501 6.93601 3.69001 7.21901 3.58501 7.60101L1.92601 13.615C1.83801 13.933 2.07801 14.248 2.40801 14.248H4.00101L4.17501 16.331C4.21801 16.849 4.65101 17.248 5.17201 17.248H6.83201C7.35201 17.248 7.78501 16.849 7.82901 16.331L8.00301 14.248H9.59601C9.92601 14.248 10.166 13.933 10.078 13.615L10.076 13.617Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 13V5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 7.25L14.25 5L16.5 7.25"
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

export default PersonDressArrowUp;
