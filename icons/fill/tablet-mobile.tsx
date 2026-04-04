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
          d="M13.75 7H11.25C10.0074 7 9 8.00736 9 9.25V14.75C9 15.9926 10.0074 17 11.25 17H13.75C14.9926 17 16 15.9926 16 14.75V9.25C16 8.00736 14.9926 7 13.75 7Z"
          fill={secondaryfill}
        />
        <path
          d="M4.75 2.5C4.05799 2.5 3.5 3.05544 3.5 3.75V12.25C3.5 12.9446 4.05799 13.5 4.75 13.5H6.75C7.16421 13.5 7.5 13.8358 7.5 14.25C7.5 14.6642 7.16421 15 6.75 15H4.75C3.23201 15 2 13.7754 2 12.25V3.75C2 2.22456 3.23201 1 4.75 1H11.25C12.768 1 14 2.22456 14 3.75V4.75C14 5.16421 13.6642 5.5 13.25 5.5C12.8358 5.5 12.5 5.16421 12.5 4.75V3.75C12.5 3.05544 11.942 2.5 11.25 2.5H4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TabletMobile;
