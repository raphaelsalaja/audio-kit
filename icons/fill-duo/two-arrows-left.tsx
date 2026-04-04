import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TwoArrowsLeft({
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
          d="M15.25 11.5H9.061L10.781 9.78005C11.074 9.48705 11.074 9.01202 10.781 8.71902C10.488 8.42602 10.013 8.42602 9.71999 8.71902L6.71999 11.719C6.42699 12.012 6.42699 12.4871 6.71999 12.7801L9.71999 15.7801C9.86599 15.9261 10.058 16 10.25 16C10.442 16 10.634 15.9271 10.78 15.7801C11.073 15.4871 11.073 15.012 10.78 14.719L9.05999 12.999H15.249C15.663 12.999 15.999 12.663 15.999 12.249C15.999 11.835 15.663 11.499 15.249 11.499L15.25 11.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 5.50002H4.561L6.281 3.78005C6.574 3.48705 6.574 3.01202 6.281 2.71902C5.988 2.42602 5.51299 2.42602 5.21999 2.71902L2.21999 5.71902C1.92699 6.01202 1.92699 6.48705 2.21999 6.78005L5.21999 9.78005C5.36599 9.92605 5.55799 10 5.74999 10C5.94199 10 6.13399 9.92705 6.27999 9.78005C6.57299 9.48705 6.57299 9.01202 6.27999 8.71902L4.55999 6.99905H15.25C15.664 6.99905 16 6.66305 16 6.24905C16 5.83505 15.664 5.50002 15.25 5.50002Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TwoArrowsLeft;
