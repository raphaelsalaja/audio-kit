import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowThroughLineDown({
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
          d="M16 8.25C16 8.664 15.664 9 15.25 9H12C11.586 9 11.25 8.664 11.25 8.25C11.25 7.836 11.586 7.5 12 7.5H15.25C15.664 7.5 16 7.836 16 8.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.75 8.25C9.75 8.664 9.414 9 9 9H2.75C2.336 9 2 8.664 2 8.25C2 7.836 2.336 7.5 2.75 7.5H9C9.414 7.5 9.75 7.836 9.75 8.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.24999 2.25V13.439L6.02999 11.219C5.73699 10.926 5.26199 10.926 4.96899 11.219C4.67599 11.512 4.67599 11.987 4.96899 12.28L8.46899 15.78C8.76199 16.073 9.23699 16.073 9.52999 15.78L13.03 12.28C13.176 12.134 13.25 11.942 13.25 11.75C13.25 11.558 13.177 11.366 13.03 11.22C12.737 10.927 12.262 10.927 11.969 11.22L9.74899 13.44V2.25C9.74899 1.836 9.41299 1.5 8.99899 1.5C8.58499 1.5 8.24899 1.836 8.24899 2.25H8.24999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowThroughLineDown;
