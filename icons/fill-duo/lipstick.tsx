import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Lipstick({
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
          d="M5.75 11.5C5.33579 11.5 5 11.1642 5 10.75V8.75C5 7.78379 5.78379 7 6.75 7H11.25C12.2162 7 13 7.78379 13 8.75V10.75C13 11.1642 12.6642 11.5 12.25 11.5H5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4 11.75C4 10.7838 4.78379 10 5.75 10H12.25C13.2162 10 14 10.7838 14 11.75V14.25C14 15.7682 12.7682 17 11.25 17H6.75C5.23179 17 4 15.7682 4 14.25V11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.5 1.861C11.5 0.899533 10.4617 0.301199 9.63032 0.775578L7.12981 2.20487C6.7396 2.42774 6.5 2.84256 6.5 3.29V7.01774C6.58165 7.00605 6.66512 7 6.75 7H11.25C11.3349 7 11.4183 7.00605 11.5 7.01774V1.861Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Lipstick;
