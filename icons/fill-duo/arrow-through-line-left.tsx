import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowThroughLineLeft({
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
          d="M9.75 16C9.336 16 9 15.664 9 15.25V12C9 11.586 9.336 11.25 9.75 11.25C10.164 11.25 10.5 11.586 10.5 12V15.25C10.5 15.664 10.164 16 9.75 16Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.75 9.75C9.336 9.75 9 9.414 9 9V2.75C9 2.336 9.336 2 9.75 2C10.164 2 10.5 2.336 10.5 2.75V9C10.5 9.414 10.164 9.75 9.75 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.75 8.24999H4.561L6.781 6.02999C7.074 5.73699 7.074 5.26199 6.781 4.96899C6.488 4.67599 6.01299 4.67599 5.71999 4.96899L2.21999 8.46899C1.92699 8.76199 1.92699 9.23699 2.21999 9.52999L5.71999 13.03C5.86599 13.176 6.05799 13.25 6.24999 13.25C6.44199 13.25 6.63399 13.177 6.77999 13.03C7.07299 12.737 7.07299 12.262 6.77999 11.969L4.55999 9.74899H15.75C16.164 9.74899 16.5 9.41299 16.5 8.99899C16.5 8.58499 16.164 8.24899 15.75 8.24899V8.24999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowThroughLineLeft;
