import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UTurnToLeft({
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
          d="M12 14.5H8.25C7.836 14.5 7.5 14.164 7.5 13.75C7.5 13.336 7.836 13 8.25 13H12C13.654 13 15 11.654 15 10C15 8.346 13.654 7 12 7H2.5C2.086 7 1.75 6.664 1.75 6.25C1.75 5.836 2.086 5.5 2.5 5.5H12C14.481 5.5 16.5 7.519 16.5 10C16.5 12.481 14.481 14.5 12 14.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.74999 10.5C5.55799 10.5 5.36599 10.4271 5.21999 10.2801L1.71999 6.78005C1.42699 6.48705 1.42699 6.01202 1.71999 5.71902L5.21999 2.21902C5.51299 1.92602 5.988 1.92602 6.281 2.21902C6.574 2.51202 6.574 2.98705 6.281 3.28005L3.311 6.25002L6.281 9.21999C6.574 9.51299 6.574 9.98803 6.281 10.281C6.135 10.427 5.943 10.501 5.751 10.501L5.74999 10.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UTurnToLeft;
