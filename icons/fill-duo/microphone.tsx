import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Microphone({
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
          d="M5.50142 4.63488C5.50142 2.62818 7.0677 1.00136 8.99999 1.00136C10.9323 1.00136 12.4986 2.62818 12.4986 4.63488V7.8626C12.4986 9.8693 10.9323 11.4961 8.99999 11.4961C7.0677 11.4961 5.50142 9.8693 5.50142 7.8626V4.63488Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.5 8C3.5 7.58579 3.16421 7.25 2.75 7.25C2.33579 7.25 2 7.58579 2 8C2 11.6128 4.7365 14.5861 8.25 14.9603V16.25C8.25 16.6642 8.58579 17 9 17C9.41421 17 9.75 16.6642 9.75 16.25V14.9603C13.2635 14.5861 16 11.6128 16 8C16 7.58579 15.6642 7.25 15.25 7.25C14.8358 7.25 14.5 7.58579 14.5 8C14.5 11.0378 12.0378 13.5 9 13.5C5.96221 13.5 3.5 11.0378 3.5 8Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Microphone;
