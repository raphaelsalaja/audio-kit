import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FlipHorizontal2({
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
          d="M7.25003 14.25H2.54303C2.26703 14.25 2.04303 14.026 2.04303 13.75C2.04303 13.675 2.06003 13.601 2.09203 13.534L6.77403 3.744C6.88903 3.504 7.25003 3.586 7.25003 3.852V14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.25003 14.25H2.54303C2.26703 14.25 2.04303 14.026 2.04303 13.75C2.04303 13.675 2.06003 13.601 2.09203 13.534L6.77403 3.744C6.88903 3.504 7.25003 3.586 7.25003 3.852V14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 14.25H15.457C15.733 14.25 15.957 14.026 15.957 13.75C15.957 13.675 15.94 13.601 15.908 13.534L11.226 3.744C11.111 3.504 10.75 3.586 10.75 3.852V14.25Z"
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

export default FlipHorizontal2;
