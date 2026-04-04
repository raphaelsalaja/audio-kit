import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Form({
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
          d="M14.25 5.25H3.75C3.19772 5.25 2.75 5.69772 2.75 6.25V7.75C2.75 8.30228 3.19772 8.75 3.75 8.75H14.25C14.8023 8.75 15.25 8.30228 15.25 7.75V6.25C15.25 5.69772 14.8023 5.25 14.25 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 11.75H3.75C3.19772 11.75 2.75 12.1977 2.75 12.75V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V12.75C15.25 12.1977 14.8023 11.75 14.25 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 5.25H3.75C3.19772 5.25 2.75 5.69772 2.75 6.25V7.75C2.75 8.30228 3.19772 8.75 3.75 8.75H14.25C14.8023 8.75 15.25 8.30228 15.25 7.75V6.25C15.25 5.69772 14.8023 5.25 14.25 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 11.75H3.75C3.19772 11.75 2.75 12.1977 2.75 12.75V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V12.75C15.25 12.1977 14.8023 11.75 14.25 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 2.25H7.75"
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

export default Form;
