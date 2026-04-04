import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LockOpen({
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
          d="M2.5 10.25C2.5 8.73128 3.73069 7.5 5.25 7.5H12.75C14.2693 7.5 15.5 8.73128 15.5 10.25V14.25C15.5 15.7687 14.2693 17 12.75 17H5.25C3.73069 17 2.5 15.7687 2.5 14.25V10.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 11C9.41421 11 9.75 11.3358 9.75 11.75V12.75C9.75 13.1642 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.1642 8.25 12.75V11.75C8.25 11.3358 8.58579 11 9 11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.5 5C6.5 3.61921 7.61921 2.5 9 2.5C10.3808 2.5 11.5 3.61921 11.5 5C11.5 5.41421 11.8358 5.75 12.25 5.75C12.6642 5.75 13 5.41421 13 5C13 2.79079 11.2092 1 9 1C6.79079 1 5 2.79079 5 5V7.5112C5.08234 7.50379 5.16573 7.5 5.25 7.5H6.5V5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LockOpen;
