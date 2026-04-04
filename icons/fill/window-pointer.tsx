import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowPointer({
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
          d="M14.25 2H3.75C2.233 2 1 3.233 1 4.75V13.25C1 14.767 2.233 16 3.75 16H9.07422C9.48822 16 9.82422 15.664 9.82422 15.25C9.82422 14.836 9.48822 14.5 9.07422 14.5H3.75C3.061 14.5 2.5 13.939 2.5 13.25V8H15.5V9.44901C15.5 9.86301 15.836 10.199 16.25 10.199C16.664 10.199 17 9.86301 17 9.44901V4.75C17 3.233 15.767 2 14.25 2ZM4 6C3.448 6 3 5.552 3 5C3 4.448 3.448 4 4 4C4.552 4 5 4.448 5 5C5 5.552 4.552 6 4 6ZM7 6C6.448 6 6 5.552 6 5C6 4.448 6.448 4 7 4C7.552 4 8 4.448 8 5C8 5.552 7.552 6 7 6Z"
          fill={fill}
        />
        <path
          d="M17.324 12.233L11.384 10.063C11.005 9.92401 10.589 10.016 10.302 10.303C10.016 10.59 9.92501 11.005 10.065 11.384L12.235 17.325C12.384 17.731 12.771 18 13.202 18H13.224C13.663 17.99 14.049 17.703 14.182 17.284L14.935 14.933L17.287 14.181C17.706 14.047 17.993 13.661 18.002 13.221C18.011 12.781 17.736 12.384 17.324 12.233Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default WindowPointer;
