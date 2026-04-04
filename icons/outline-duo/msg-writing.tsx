import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgWriting({
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
          d="M9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 10.319 2.108 11.552 2.723 12.617C3.153 13.423 2.67 15.329 1.75 16.25C3 16.318 4.647 15.753 5.383 15.277C5.872 15.559 6.647 15.933 7.662 16.125C8.095 16.207 8.543 16.25 9 16.25C13.004 16.25 16.25 13.004 16.25 9C16.25 4.996 13.004 1.75 9 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 10.319 2.108 11.552 2.723 12.617C3.153 13.423 2.67 15.329 1.75 16.25C3 16.318 4.647 15.753 5.383 15.277C5.872 15.559 6.647 15.933 7.662 16.125C8.095 16.207 8.543 16.25 9 16.25C13.004 16.25 16.25 13.004 16.25 9C16.25 4.996 13.004 1.75 9 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10C8.448 10 8 9.551 8 9C8 8.449 8.448 8 9 8C9.552 8 10 8.449 10 9C10 9.551 9.552 10 9 10Z"
          fill={fill}
          opacity="0.75"
          stroke="none"
        />
        <path
          d="M5.5 10C4.948 10 4.5 9.551 4.5 9C4.5 8.449 4.948 8 5.5 8C6.052 8 6.5 8.449 6.5 9C6.5 9.551 6.052 10 5.5 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.5 10C11.948 10 11.5 9.551 11.5 9C11.5 8.449 11.948 8 12.5 8C13.052 8 13.5 8.449 13.5 9C13.5 9.551 13.052 10 12.5 10Z"
          fill={fill}
          opacity="0.5"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default MsgWriting;
