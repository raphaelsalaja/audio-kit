import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DatabaseCloud({
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
          d="M14.5 10.75C13.2297 10.75 12.1711 11.616 11.8553 12.7864C11.7405 12.7627 11.6217 12.75 11.5 12.75C10.5335 12.75 9.75 13.5335 9.75 14.5C9.75 15.4665 10.5335 16.25 11.5 16.25H14.5C16.0188 16.25 17.25 15.0187 17.25 13.5C17.25 11.9813 16.0188 10.75 14.5 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 6.5C12.452 6.5 15.25 5.493 15.25 4.25C15.25 3.007 12.452 2 9 2C5.548 2 2.75 3.007 2.75 4.25C2.75 5.493 5.548 6.5 9 6.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 6.5C12.452 6.5 15.25 5.493 15.25 4.25C15.25 3.007 12.452 2 9 2C5.548 2 2.75 3.007 2.75 4.25C2.75 5.493 5.548 6.5 9 6.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 7.79889V4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 4.25V13.75C2.75 14.7344 4.507 15.5718 6.9536 15.8768"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 9C2.75 10.1284 5.05569 11.0622 8.06329 11.2249"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 10.75C13.2297 10.75 12.1711 11.616 11.8553 12.7864C11.7405 12.7627 11.6217 12.75 11.5 12.75C10.5335 12.75 9.75 13.5335 9.75 14.5C9.75 15.4665 10.5335 16.25 11.5 16.25H14.5C16.0188 16.25 17.25 15.0187 17.25 13.5C17.25 11.9813 16.0188 10.75 14.5 10.75Z"
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

export default DatabaseCloud;
