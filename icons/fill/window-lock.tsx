import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowLock({
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
          d="M16 13.02V12.25C16 11.01 14.991 10 13.75 10C12.509 10 11.5 11.01 11.5 12.25V13.02C10.654 13.15 10 13.87 10 14.75V16.25C10 17.21 10.785 18 11.75 18H15.75C16.715 18 17.5 17.21 17.5 16.25V14.75C17.5 13.87 16.846 13.15 16 13.02ZM13.75 11.5C14.164 11.5 14.5 11.84 14.5 12.25V13H13V12.25C13 11.84 13.336 11.5 13.75 11.5Z"
          fill={secondaryfill}
        />
        <path
          d="M7.75 14.5H3.75C3.061 14.5 2.5 13.9399 2.5 13.25V8H17V4.75C17 3.23 15.767 2 14.25 2H3.75C2.233 2 1 3.23 1 4.75V13.25C1 14.77 2.233 16 3.75 16H7.75C8.164 16 8.5 15.6602 8.5 15.25C8.5 14.8398 8.164 14.5 7.75 14.5ZM7 4C7.552 4 8 4.4502 8 5C8 5.5498 7.552 6 7 6C6.448 6 6 5.5498 6 5C6 4.4502 6.448 4 7 4ZM4 4C4.552 4 5 4.4502 5 5C5 5.5498 4.552 6 4 6C3.448 6 3 5.5498 3 5C3 4.4502 3.448 4 4 4Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WindowLock;
