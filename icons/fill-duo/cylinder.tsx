import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cylinder({
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
          d="M9 16.5C6.0186 16.5 3 15.5552 3 13.75C3 10.1396 15 10.1396 15 13.75C15 15.5552 11.9814 16.5 9 16.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.25 3.5H3.75C3.3359 3.5 3 3.8359 3 4.25V13.75C3 10.1396 15 10.1396 15 13.75V4.25C15 3.8359 14.6641 3.5 14.25 3.5Z"
          fill={secondaryfill}
          opacity="0.2"
        />
        <path
          d="M9 7.00001C6.0186 7.00001 3 6.05521 3 4.25001C3 0.639606 15 0.639606 15 4.25001C15 6.05521 11.9814 7.00001 9 7.00001Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Cylinder;
