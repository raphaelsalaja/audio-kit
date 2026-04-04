import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaintRoller({
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
          d="M2.75 7C3.16421 7 3.5 7.33579 3.5 7.75C3.5 7.88809 3.61191 8 3.75 8H8C8.96651 8 9.75 8.78349 9.75 9.75V10.75C9.75 11.1642 9.41421 11.5 9 11.5C8.58579 11.5 8.25 11.1642 8.25 10.75V9.75C8.25 9.61191 8.13809 9.5 8 9.5H3.75C2.78349 9.5 2 8.71651 2 7.75C2 7.33579 2.33579 7 2.75 7Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 2.75C1.5 1.78379 2.28379 1 3.25 1H14.75C15.7162 1 16.5 1.78379 16.5 2.75V4.75C16.5 5.71621 15.7162 6.5 14.75 6.5H3.25C2.28379 6.5 1.5 5.71621 1.5 4.75V2.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M9.25 10H8.75C7.7835 10 7 10.7835 7 11.75V15.25C7 16.2165 7.7835 17 8.75 17H9.25C10.2165 17 11 16.2165 11 15.25V11.75C11 10.7835 10.2165 10 9.25 10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PaintRoller;
