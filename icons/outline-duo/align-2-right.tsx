import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Align2Right({
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
          d="M12.25 10.25V7.75C12.25 7.19772 11.8023 6.75 11.25 6.75L3.75 6.75C3.19771 6.75 2.75 7.19772 2.75 7.75V10.25C2.75 10.8023 3.19771 11.25 3.75 11.25H11.25C11.8023 11.25 12.25 10.8023 12.25 10.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 1.75V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 10.25V7.75C12.25 7.19772 11.8023 6.75 11.25 6.75L3.75 6.75C3.19771 6.75 2.75 7.19772 2.75 7.75V10.25C2.75 10.8023 3.19771 11.25 3.75 11.25H11.25C11.8023 11.25 12.25 10.8023 12.25 10.25Z"
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

export default Align2Right;
