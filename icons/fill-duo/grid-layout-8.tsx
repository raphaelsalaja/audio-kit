import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridLayout8({
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
          d="M14.75 2H14.25C13.2835 2 12.5 2.7835 12.5 3.75V4.25C12.5 5.2165 13.2835 6 14.25 6H14.75C15.7165 6 16.5 5.2165 16.5 4.25V3.75C16.5 2.7835 15.7165 2 14.75 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.75 7.5H14.25C13.2835 7.5 12.5 8.2835 12.5 9.25V14.25C12.5 15.2165 13.2835 16 14.25 16H14.75C15.7165 16 16.5 15.2165 16.5 14.25V9.25C16.5 8.2835 15.7165 7.5 14.75 7.5Z"
          fill={fill}
        />
        <path
          d="M9.25 2H8.75C7.7835 2 7 2.7835 7 3.75V8.75C7 9.7165 7.7835 10.5 8.75 10.5H9.25C10.2165 10.5 11 9.7165 11 8.75V3.75C11 2.7835 10.2165 2 9.25 2Z"
          fill={fill}
        />
        <path
          d="M9.25 12H8.75C7.7835 12 7 12.7835 7 13.75V14.25C7 15.2165 7.7835 16 8.75 16H9.25C10.2165 16 11 15.2165 11 14.25V13.75C11 12.7835 10.2165 12 9.25 12Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M3.75 2H3.25C2.2835 2 1.5 2.7835 1.5 3.75V14.25C1.5 15.2165 2.2835 16 3.25 16H3.75C4.7165 16 5.5 15.2165 5.5 14.25V3.75C5.5 2.7835 4.7165 2 3.75 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GridLayout8;
