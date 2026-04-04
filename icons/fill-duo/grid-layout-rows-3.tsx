import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridLayoutRows3({
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
          d="M14.2501 7H3.75012C2.78362 7 2.00012 7.7835 2.00012 8.75V9.25C2.00012 10.2165 2.78362 11 3.75012 11H14.2501C15.2166 11 16.0001 10.2165 16.0001 9.25V8.75C16.0001 7.7835 15.2166 7 14.2501 7Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.2501 1.5H3.75012C2.78362 1.5 2.00012 2.2835 2.00012 3.25V3.75C2.00012 4.7165 2.78362 5.5 3.75012 5.5H14.2501C15.2166 5.5 16.0001 4.7165 16.0001 3.75V3.25C16.0001 2.2835 15.2166 1.5 14.2501 1.5Z"
          fill={fill}
        />
        <path
          d="M14.2501 12.5H3.75012C2.78362 12.5 2.00012 13.2835 2.00012 14.25V14.75C2.00012 15.7165 2.78362 16.5 3.75012 16.5H14.2501C15.2166 16.5 16.0001 15.7165 16.0001 14.75V14.25C16.0001 13.2835 15.2166 12.5 14.2501 12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GridLayoutRows3;
