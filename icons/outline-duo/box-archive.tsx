import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxArchive({
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
          d="M14.75 6.25V13.25C14.75 14.355 13.855 15.25 12.75 15.25H5.25C4.145 15.25 3.25 14.355 3.25 13.25V6.25"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 6.25V13.25C14.75 14.355 13.855 15.25 12.75 15.25H5.25C4.145 15.25 3.25 14.355 3.25 13.25V6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 2.75H2.75C2.19772 2.75 1.75 3.19772 1.75 3.75V5.25C1.75 5.80228 2.19772 6.25 2.75 6.25H15.25C15.8023 6.25 16.25 5.80228 16.25 5.25V3.75C16.25 3.19772 15.8023 2.75 15.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 9.25H11"
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

export default BoxArchive;
