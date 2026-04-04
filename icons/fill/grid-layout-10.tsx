import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridLayout10({
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
          d="M14.25 1.5H13.75C12.7835 1.5 12 2.2835 12 3.25V14.75C12 15.7165 12.7835 16.5 13.75 16.5H14.25C15.2165 16.5 16 15.7165 16 14.75V3.25C16 2.2835 15.2165 1.5 14.25 1.5Z"
          fill={secondaryfill}
        />
        <path
          d="M8.75 7H3.75C2.7835 7 2 7.7835 2 8.75V9.25C2 10.2165 2.7835 11 3.75 11H8.75C9.7165 11 10.5 10.2165 10.5 9.25V8.75C10.5 7.7835 9.7165 7 8.75 7Z"
          fill={fill}
        />
        <path
          d="M8.75 12.5H3.75C2.7835 12.5 2 13.2835 2 14.25V14.75C2 15.7165 2.7835 16.5 3.75 16.5H8.75C9.7165 16.5 10.5 15.7165 10.5 14.75V14.25C10.5 13.2835 9.7165 12.5 8.75 12.5Z"
          fill={fill}
        />
        <path
          d="M8.75 1.5H3.75C2.7835 1.5 2 2.2835 2 3.25V3.75C2 4.7165 2.7835 5.5 3.75 5.5H8.75C9.7165 5.5 10.5 4.7165 10.5 3.75V3.25C10.5 2.2835 9.7165 1.5 8.75 1.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GridLayout10;
