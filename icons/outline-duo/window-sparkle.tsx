import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowSparkle({
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
          d="M1.75 4.75C1.75 3.65 2.645 2.75 3.75 2.75H14.25C15.355 2.75 16.25 3.65 16.25 4.75V7.75H1.75V4.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M4.25 6C4.664 6 5 5.66 5 5.25C5 4.84 4.664 4.5 4.25 4.5C3.836 4.5 3.5 4.84 3.5 5.25C3.5 5.66 3.836 6 4.25 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.75 6C7.164 6 7.5 5.66 7.5 5.25C7.5 4.84 7.164 4.5 6.75 4.5C6.336 4.5 6 4.84 6 5.25C6 5.66 6.336 6 6.75 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M1.75 7.75H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.487 13.54L15.593 12.91L14.962 11.01C14.859 10.71 14.573 10.5 14.25 10.5C13.927 10.5 13.641 10.71 13.539 11.01L12.907 12.91L11.013 13.54C10.707 13.64 10.5 13.93 10.5 14.25C10.5 14.57 10.707 14.86 11.013 14.96L12.907 15.59L13.539 17.49C13.641 17.79 13.927 18 14.25 18C14.573 18 14.86 17.79 14.962 17.49L15.593 15.59L17.487 14.96C17.794 14.86 18 14.57 18 14.25C18 13.93 17.794 13.64 17.487 13.54Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.25 9.01367V4.75C16.25 3.65 15.355 2.75 14.25 2.75H3.75C2.645 2.75 1.75 3.65 1.75 4.75V13.25C1.75 14.35 2.645 15.25 3.75 15.25H8.4204"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default WindowSparkle;
