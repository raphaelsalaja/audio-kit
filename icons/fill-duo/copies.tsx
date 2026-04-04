import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Copies({
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
          d="M13.75 4.5H4.25C3.285 4.5 2.5 5.285 2.5 6.25V9C2.5 9.414 2.836 9.75 3.25 9.75H14.75C15.164 9.75 15.5 9.414 15.5 9V6.25C15.5 5.285 14.715 4.5 13.75 4.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.25 4.5H13.75C14.24 4.5 14.682 4.70399 15 5.02899V3.25C15 2.285 14.215 1.5 13.25 1.5H4.75C3.785 1.5 3 2.285 3 3.25V5.02899C3.318 4.70399 3.76 4.5 4.25 4.5Z"
          fill={secondaryfill}
          opacity="0.2"
        />
        <path
          d="M14.25 7.5H3.75C2.785 7.5 2 8.2849 2 9.25V14.25C2 15.2148 2.785 16 3.75 16H14.25C15.215 16 16 15.2148 16 14.25V9.25C16 8.2849 15.215 7.5 14.25 7.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Copies;
