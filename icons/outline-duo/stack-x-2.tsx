import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackX2({
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
          d="M12.75 14.25V3.75C12.75 3.19772 12.3023 2.75 11.75 2.75L6.25 2.75C5.69772 2.75 5.25 3.19772 5.25 3.75L5.25 14.25C5.25 14.8023 5.69772 15.25 6.25 15.25H11.75C12.3023 15.25 12.75 14.8023 12.75 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.75 14.25V3.75C12.75 3.19772 12.3023 2.75 11.75 2.75L6.25 2.75C5.69772 2.75 5.25 3.19772 5.25 3.75L5.25 14.25C5.25 14.8023 5.69772 15.25 6.25 15.25H11.75C12.3023 15.25 12.75 14.8023 12.75 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 2.75V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 2.75V15.25"
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

export default StackX2;
