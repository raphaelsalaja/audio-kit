import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TabletMobile({
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
          d="M11.25 7C10.0078 7 9 8.00779 9 9.25V14.75C9 15.9922 10.0078 17 11.25 17H13.75C14.9922 17 16 15.9922 16 14.75V9.25C16 8.00779 14.9922 7 13.75 7H11.25ZM13.25 9H11.75C11.3358 9 11 8.66421 11 8.25V8H14V8.25C14 8.66421 13.6642 9 13.25 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.75 1C3.23201 1 2 2.22456 2 3.75V12.25C2 13.7754 3.23201 15 4.75 15H9.01375C9.00466 14.9179 9 14.8345 9 14.75V9.25C9 8.00779 10.0078 7 11.25 7H13.75C13.8345 7 13.9179 7.00466 14 7.01375V3.75C14 2.22456 12.768 1 11.25 1H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default TabletMobile;
