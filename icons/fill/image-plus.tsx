import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImagePlus({
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
          d="M3.23163 14.4587L9.30564 8.38371C10.3795 7.30982 12.1204 7.30978 13.1943 8.38367L15.7803 10.9697C16.0732 11.2626 16.0732 11.7374 15.7803 12.0303L14.5481 15.0183H4.30955L3.23163 14.4587Z"
          fill={fill}
        />
        <path
          d="M6.25 8.5C6.94036 8.5 7.5 7.94036 7.5 7.25C7.5 6.55964 6.94036 6 6.25 6C5.55964 6 5 6.55964 5 7.25C5 7.94036 5.55964 8.5 6.25 8.5Z"
          fill={fill}
        />
        <path
          d="M16.75 3H15V1.25C15 0.8359 14.6641 0.5 14.25 0.5C13.8359 0.5 13.5 0.8359 13.5 1.25V3H11.75C11.3359 3 11 3.3359 11 3.75C11 4.1641 11.3359 4.5 11.75 4.5H13.5V6.25C13.5 6.6641 13.8359 7 14.25 7C14.6641 7 15 6.6641 15 6.25V4.5H16.75C17.1641 4.5 17.5 4.1641 17.5 3.75C17.5 3.3359 17.1641 3 16.75 3Z"
          fill={secondaryfill}
        />
        <path
          d="M2 4.75C2 3.23141 3.23066 2 4.75 2H8.92239C9.3366 2 9.67239 2.33579 9.67239 2.75C9.67239 3.16421 9.3366 3.5 8.92239 3.5H4.75C4.05934 3.5 3.5 4.05959 3.5 4.75V13.25C3.5 13.9404 4.05934 14.5 4.75 14.5H13.25C13.9407 14.5 14.5 13.9404 14.5 13.25V11.5C14.5 11.0858 14.8358 10.75 15.25 10.75C15.6642 10.75 16 11.0858 16 11.5V13.25C16 14.7686 14.7693 16 13.25 16H4.75C3.23066 16 2 14.7686 2 13.25V4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ImagePlus;
