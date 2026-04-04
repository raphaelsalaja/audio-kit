import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EaseOut({
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
          d="M16.4983 3.69954C16.5262 4.11282 16.2137 4.47043 15.8005 4.4983C13.4439 4.6572 11.1928 6.06625 9.27455 8.21974C7.36273 10.366 5.84853 13.1809 4.96515 15.976C4.84033 16.371 4.41896 16.59 4.024 16.4651C3.62905 16.3403 3.41006 15.9189 3.53488 15.524C4.47351 12.5541 6.0843 9.54603 8.15449 7.22201C10.2182 4.90524 12.8061 3.1968 15.6996 3.0017C16.1128 2.97383 16.4705 3.28627 16.4983 3.69954Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.15333 3.75C5.15333 3.33579 5.48911 3 5.90333 3H8.50063C8.91485 3 9.25063 3.33579 9.25063 3.75C9.25063 4.16421 8.91485 4.5 8.50063 4.5H5.90333C5.48911 4.5 5.15333 4.16421 5.15333 3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 3.75C1.5 2.36979 2.61979 1.25 4 1.25C5.38021 1.25 6.5 2.36979 6.5 3.75C6.5 5.13021 5.38021 6.25 4 6.25C2.61979 6.25 1.5 5.13021 1.5 3.75ZM4 2.75C3.44821 2.75 3 3.19821 3 3.75C3 4.30179 3.44821 4.75 4 4.75C4.55179 4.75 5 4.30179 5 3.75C5 3.19821 4.55179 2.75 4 2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default EaseOut;
