import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MinimizeWindow({
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
          d="M5.75 11H3.75C3.0605 11 2.5 10.4395 2.5 9.75V4.75C2.5 4.0605 3.0605 3.5 3.75 3.5H12.25C12.9395 3.5 13.5 4.0605 13.5 4.75V7.75C13.5 8.1641 13.8359 8.5 14.25 8.5C14.6641 8.5 15 8.1641 15 7.75V4.75C15 3.2334 13.7666 2 12.25 2H3.75C2.2334 2 1 3.2334 1 4.75V9.75C1 11.2666 2.2334 12.5 3.75 12.5H5.75C6.1641 12.5 6.5 12.1641 6.5 11.75C6.5 11.3359 6.1641 11 5.75 11Z"
          fill={fill}
        />
        <path
          d="M14.75 10H10.25C9.00736 10 8 11.0074 8 12.25V13.75C8 14.9926 9.00736 16 10.25 16H14.75C15.9926 16 17 14.9926 17 13.75V12.25C17 11.0074 15.9926 10 14.75 10Z"
          fill={fill}
        />
        <path
          d="M8 5.25C8 4.8359 7.6641 4.5 7.25 4.5C6.8359 4.5 6.5 4.8359 6.5 5.25V6.43951L4.7803 4.71979C4.4873 4.42679 4.0127 4.42679 3.7198 4.71979C3.4269 5.01279 3.4268 5.48737 3.7198 5.78027L5.4395 7.5H4.25C3.8359 7.5 3.5 7.8359 3.5 8.25C3.5 8.6641 3.8359 9 4.25 9H7.25C7.6641 9 8 8.6641 8 8.25V5.25Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default MinimizeWindow;
