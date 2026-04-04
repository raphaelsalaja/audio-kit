import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseCloud({
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
          d="M7.5 14.5C7.5 12.6846 8.7202 11.1333 10.4019 10.6528C11.3252 9.32417 12.8589 8.5 14.5 8.5C15.0207 8.5 15.5291 8.57002 16 8.72162C16.0879 8.74992 16.1784 8.67449 16.25 8.56079V6.75C16.25 5.645 15.3546 4.75 14.25 4.75H3.75C2.6454 4.75 1.75 5.645 1.75 6.75V13C1.75 14.105 2.6454 15 3.75 15L7.5471 15.0529C7.5261 14.8874 7.5 14.6711 7.5 14.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 4.75V2.25C6.25 1.698 6.698 1.25 7.25 1.25H10.75C11.302 1.25 11.75 1.698 11.75 2.25V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 8.02441V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V13.25C1.75 14.354 2.645 15.25 3.75 15.25H6.8259"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 10.75C13.2297 10.75 12.1711 11.616 11.8553 12.7864C11.7405 12.7627 11.6217 12.75 11.5 12.75C10.5335 12.75 9.75 13.5335 9.75 14.5C9.75 15.4665 10.5335 16.25 11.5 16.25H14.5C16.0188 16.25 17.25 15.0187 17.25 13.5C17.25 11.9813 16.0188 10.75 14.5 10.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
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

export default SuitcaseCloud;
