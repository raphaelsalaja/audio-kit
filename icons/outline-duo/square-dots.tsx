import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareDots({
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
          d="M13.25 2.75H4.75C3.64543 2.75 2.75 3.64543 2.75 4.75V13.25C2.75 14.3546 3.64543 15.25 4.75 15.25H13.25C14.3546 15.25 15.25 14.3546 15.25 13.25V4.75C15.25 3.64543 14.3546 2.75 13.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 2.75H4.75C3.64543 2.75 2.75 3.64543 2.75 4.75V13.25C2.75 14.3546 3.64543 15.25 4.75 15.25H13.25C14.3546 15.25 15.25 14.3546 15.25 13.25V4.75C15.25 3.64543 14.3546 2.75 13.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 8C9.551 8 10 8.449 10 9C10 9.551 9.551 10 9 10C8.449 10 8 9.551 8 9C8 8.449 8.449 8 9 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.5 8C13.051 8 13.5 8.449 13.5 9C13.5 9.551 13.051 10 12.5 10C11.949 10 11.5 9.551 11.5 9C11.5 8.449 11.949 8 12.5 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.5 8C6.051 8 6.5 8.449 6.5 9C6.5 9.551 6.051 10 5.5 10C4.949 10 4.5 9.551 4.5 9C4.5 8.449 4.949 8 5.5 8Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default SquareDots;
