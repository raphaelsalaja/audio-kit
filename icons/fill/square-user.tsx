import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareUser({
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
          d="M13.8322 15.9388C13.6446 15.9792 13.4498 16.0005 13.25 16.0005H4.75001C4.55021 16.0005 4.3554 15.9792 4.16772 15.9388L4.40036 15.0608C4.9285 13.0139 6.78641 11.5005 8.99998 11.5005C11.2135 11.5005 13.0715 13.0139 13.5996 15.0608L13.8322 15.9388Z"
          fill={secondaryfill}
        />
        <path
          d="M6.74811 7.75049C6.74811 6.50742 7.75552 5.50049 8.99811 5.50049C10.2407 5.50049 11.2481 6.50742 11.2481 7.75049C11.2481 8.99356 10.2407 10.0005 8.99811 10.0005C7.75552 10.0005 6.74811 8.99356 6.74811 7.75049Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M13.25 16H4.75C3.233 16 2 14.767 2 13.25V4.75C2 3.233 3.233 2 4.75 2H13.25C14.767 2 16 3.233 16 4.75V13.25C16 14.767 14.767 16 13.25 16ZM4.75 3.5C4.061 3.5 3.5 4.061 3.5 4.75V13.25C3.5 13.939 4.061 14.5 4.75 14.5H13.25C13.939 14.5 14.5 13.939 14.5 13.25V4.75C14.5 4.061 13.939 3.5 13.25 3.5H4.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareUser;
