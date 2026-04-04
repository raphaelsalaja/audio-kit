import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridLayout3({
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
          d="M4.25 2H3.25C2.2835 2 1.5 2.7835 1.5 3.75V14.25C1.5 15.2165 2.2835 16 3.25 16H4.25C5.2165 16 6 15.2165 6 14.25V3.75C6 2.7835 5.2165 2 4.25 2Z"
          fill={fill}
        />
        <path
          d="M14.75 8H9.25C8.2835 8 7.5 8.7835 7.5 9.75V14.25C7.5 15.2165 8.2835 16 9.25 16H14.75C15.7165 16 16.5 15.2165 16.5 14.25V9.75C16.5 8.7835 15.7165 8 14.75 8Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.75 2H9.25C8.2835 2 7.5 2.7835 7.5 3.75V4.75C7.5 5.7165 8.2835 6.5 9.25 6.5H14.75C15.7165 6.5 16.5 5.7165 16.5 4.75V3.75C16.5 2.7835 15.7165 2 14.75 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GridLayout3;
