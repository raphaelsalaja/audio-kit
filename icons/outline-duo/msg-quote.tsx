import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgQuote({
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
          d="M5.75 9.25H7.75V10.75H5.75V9.25ZM5.75 9.25C5.75 7.457 6.348 6.668 7.424 6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 9.25H12.25V10.75H10.25V9.25ZM10.25 9.25C10.25 7.457 10.848 6.668 11.924 6.25"
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

export default MsgQuote;
