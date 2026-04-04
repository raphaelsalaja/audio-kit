import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Location6({
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
          d="M9 8.25C10.795 8.25 12.25 6.795 12.25 5C12.25 3.205 10.795 1.75 9 1.75C7.205 1.75 5.75 3.205 5.75 5C5.75 6.795 7.205 8.25 9 8.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13.25V8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 10.75H12.993C13.602 10.75 14.151 11.118 14.381 11.682L15.404 14.182C15.808 15.169 15.082 16.25 14.016 16.25H3.98399C2.91799 16.25 2.19199 15.169 2.59599 14.182L3.61897 11.682C3.84997 11.118 4.39797 10.75 5.00697 10.75H5.99998"
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

export default Location6;
