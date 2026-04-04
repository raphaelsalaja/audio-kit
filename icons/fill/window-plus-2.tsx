import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowPlus2({
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
          d="M8.7951 14.5H3.75C3.061 14.5 2.5 13.9399 2.5 13.25V8H15.5V10C15.5 10.42 15.836 10.75 16.25 10.75C16.664 10.75 17 10.42 17 10V4.75C17 3.23 15.767 2 14.25 2H3.75C2.233 2 1 3.23 1 4.75V13.25C1 14.77 2.233 16 3.75 16H8.7951C9.2091 16 9.5451 15.66 9.5451 15.25C9.5451 14.84 9.2091 14.5 8.7951 14.5ZM7 4C7.552 4 8 4.45 8 5C8 5.55 7.552 6 7 6C6.448 6 6 5.55 6 5C6 4.45 6.448 4 7 4ZM4 4C4.552 4 5 4.45 5 5C5 5.55 4.552 6 4 6C3.448 6 3 5.55 3 5C3 4.45 3.448 4 4 4Z"
          fill={fill}
        />
        <path
          d="M16.75 14H15V12.25C15 11.84 14.664 11.5 14.25 11.5C13.836 11.5 13.5 11.84 13.5 12.25V14H11.75C11.336 14 11 14.34 11 14.75C11 15.16 11.336 15.5 11.75 15.5H13.5V17.25C13.5 17.66 13.836 18 14.25 18C14.664 18 15 17.66 15 17.25V15.5H16.75C17.164 15.5 17.5 15.16 17.5 14.75C17.5 14.34 17.164 14 16.75 14Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default WindowPlus2;
