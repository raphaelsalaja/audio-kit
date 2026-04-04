import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackY3({
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
          d="M14.25 5.25H3.75C3.19772 5.25 2.75 5.69772 2.75 6.25V11.75C2.75 12.3023 3.19772 12.75 3.75 12.75H14.25C14.8023 12.75 15.25 12.3023 15.25 11.75V6.25C15.25 5.69772 14.8023 5.25 14.25 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 5.25H3.75C3.19772 5.25 2.75 5.69772 2.75 6.25V11.75C2.75 12.3023 3.19772 12.75 3.75 12.75H14.25C14.8023 12.75 15.25 12.3023 15.25 11.75V6.25C15.25 5.69772 14.8023 5.25 14.25 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 2.25H13.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 15.75H13.75"
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

export default StackY3;
