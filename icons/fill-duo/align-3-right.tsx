import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Align3Right({
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
          d="M2 4.25C2 3.00726 3.00792 2 4.25 2H13.75C14.9921 2 16 3.00726 16 4.25V5.75C16 6.99274 14.9921 8 13.75 8H4.25C3.00792 8 2 6.99274 2 5.75V4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8 12.25C8 11.0073 9.00792 10 10.25 10H13.75C14.9921 10 16 11.0073 16 12.25V13.75C16 14.9927 14.9921 16 13.75 16H10.25C9.00792 16 8 14.9927 8 13.75V12.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Align3Right;
