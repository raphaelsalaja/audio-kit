import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Carousel({
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
          d="M7.25 15.25H10.75C11.855 15.25 12.75 14.355 12.75 13.25V4.75C12.75 3.645 11.855 2.75 10.75 2.75H7.25C6.145 2.75 5.25 3.645 5.25 4.75V13.25C5.25 14.355 6.145 15.25 7.25 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.2926 4.3286C1.6896 4.5232 1.25 5.0825 1.25 5.75V12.25C1.25 12.9175 1.6896 13.4768 2.2926 13.6714"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.7074 4.3286C16.3104 4.5232 16.75 5.0825 16.75 5.75V12.25C16.75 12.9175 16.3104 13.4768 15.7074 13.6714"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Carousel;
