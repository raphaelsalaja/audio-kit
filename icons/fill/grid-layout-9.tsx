import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridLayout9({
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
          d="M4.25 1.5H3.75C2.7835 1.5 2 2.2835 2 3.25V14.75C2 15.7165 2.7835 16.5 3.75 16.5H4.25C5.2165 16.5 6 15.7165 6 14.75V3.25C6 2.2835 5.2165 1.5 4.25 1.5Z"
          fill={secondaryfill}
        />
        <path
          d="M14.25 7H9.25C8.2835 7 7.5 7.7835 7.5 8.75V9.25C7.5 10.2165 8.2835 11 9.25 11H14.25C15.2165 11 16 10.2165 16 9.25V8.75C16 7.7835 15.2165 7 14.25 7Z"
          fill={fill}
        />
        <path
          d="M14.25 12.5H9.25C8.2835 12.5 7.5 13.2835 7.5 14.25V14.75C7.5 15.7165 8.2835 16.5 9.25 16.5H14.25C15.2165 16.5 16 15.7165 16 14.75V14.25C16 13.2835 15.2165 12.5 14.25 12.5Z"
          fill={fill}
        />
        <path
          d="M14.25 1.5H9.25C8.2835 1.5 7.5 2.2835 7.5 3.25V3.75C7.5 4.7165 8.2835 5.5 9.25 5.5H14.25C15.2165 5.5 16 4.7165 16 3.75V3.25C16 2.2835 15.2165 1.5 14.25 1.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GridLayout9;
