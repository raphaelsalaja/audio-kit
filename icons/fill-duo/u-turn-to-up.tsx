import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UTurnToUp({
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
          d="M8 16.5C5.519 16.5 3.5 14.481 3.5 12V8.25C3.5 7.836 3.836 7.5 4.25 7.5C4.664 7.5 5 7.836 5 8.25V12C5 13.654 6.346 15 8 15C9.654 15 11 13.654 11 12V2.5C11 2.086 11.336 1.75 11.75 1.75C12.164 1.75 12.5 2.086 12.5 2.5V12C12.5 14.481 10.481 16.5 8 16.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 6.50002C15.058 6.50002 14.866 6.42705 14.72 6.28005L11.75 3.31008L8.78001 6.28005C8.48701 6.57305 8.01202 6.57305 7.71902 6.28005C7.42602 5.98705 7.42602 5.51202 7.71902 5.21902L11.219 1.71902C11.512 1.42602 11.987 1.42602 12.28 1.71902L15.78 5.21902C16.073 5.51202 16.073 5.98705 15.78 6.28005C15.634 6.42605 15.442 6.50002 15.25 6.50002Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UTurnToUp;
