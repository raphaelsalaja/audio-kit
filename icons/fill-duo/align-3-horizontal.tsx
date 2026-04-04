import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Align3Horizontal({
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
          d="M2 12.25C2 11.0073 3.00792 10 4.25 10H13.75C14.9921 10 16 11.0073 16 12.25V13.75C16 14.9927 14.9921 16 13.75 16H4.25C3.00792 16 2 14.9927 2 13.75V12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 4.25C5 3.00726 6.00792 2 7.25 2H10.75C11.9921 2 13 3.00726 13 4.25V5.75C13 6.99274 11.9921 8 10.75 8H7.25C6.00792 8 5 6.99274 5 5.75V4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Align3Horizontal;
