import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowMinus2({
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
          d="M14.2501 2H3.75012C2.23352 2 1.00012 3.2334 1.00012 4.75V7H17.0001V4.75C17.0001 3.2334 15.7667 2 14.2501 2ZM3.50012 5.5C2.94782 5.5 2.50012 5.0522 2.50012 4.5C2.50012 3.9478 2.94782 3.5 3.50012 3.5C4.05242 3.5 4.50011 3.9478 4.50011 4.5C4.50011 5.0522 4.05232 5.5 3.50012 5.5ZM6.50011 5.5C5.94781 5.5 5.50011 5.0522 5.50011 4.5C5.50011 3.9478 5.94781 3.5 6.50011 3.5C7.05241 3.5 7.50011 3.9478 7.50011 4.5C7.50011 5.0522 7.05231 5.5 6.50011 5.5Z"
          fill={fill}
        />
        <path
          d="M9.50011 14.75C9.50011 13.5098 10.5099 12.5 11.7501 12.5H16.7501C16.8357 12.5 16.917 12.5161 17.0001 12.5254V7H1.00012V13.25C1.00012 14.7686 2.23132 16 3.75012 16H9.88121C9.64101 15.6421 9.50011 15.2124 9.50011 14.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.7501 15.5H11.7501C11.336 15.5 11.0001 15.1641 11.0001 14.75C11.0001 14.3359 11.336 14 11.7501 14H16.7501C17.1642 14 17.5001 14.3359 17.5001 14.75C17.5001 15.1641 17.1642 15.5 16.7501 15.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WindowMinus2;
