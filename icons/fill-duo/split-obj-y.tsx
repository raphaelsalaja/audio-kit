import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SplitObjY({
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
          d="M2 4.75C2 3.23079 3.23079 2 4.75 2H13.25C14.7692 2 16 3.23079 16 4.75V8.75C16 9.16421 15.6642 9.5 15.25 9.5H2.75C2.33579 9.5 2 9.16421 2 8.75V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.25 11C15.6642 11 16 11.3358 16 11.75V13.25C16 14.7692 14.7692 16 13.25 16H11.25C10.8358 16 10.5 15.6642 10.5 15.25C10.5 14.8358 10.8358 14.5 11.25 14.5H13.25C13.9408 14.5 14.5 13.9408 14.5 13.25V11.75C14.5 11.3358 14.8358 11 15.25 11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.75 11C3.16421 11 3.5 11.3358 3.5 11.75V13.25C3.5 13.9408 4.05921 14.5 4.75 14.5H6.75C7.16421 14.5 7.5 14.8358 7.5 15.25C7.5 15.6642 7.16421 16 6.75 16H4.75C3.23079 16 2 14.7692 2 13.25V11.75C2 11.3358 2.33579 11 2.75 11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M0.5 8.75C0.5 8.33579 0.835786 8 1.25 8H16.75C17.1642 8 17.5 8.33579 17.5 8.75C17.5 9.16421 17.1642 9.5 16.75 9.5H1.25C0.835786 9.5 0.5 9.16421 0.5 8.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SplitObjY;
