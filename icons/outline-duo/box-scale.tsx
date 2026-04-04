import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxScale({
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
          d="M7.75 6.75H3.75C3.19772 6.75 2.75 7.19772 2.75 7.75V11.75C2.75 12.3023 3.19772 12.75 3.75 12.75H7.75C8.30228 12.75 8.75 12.3023 8.75 11.75V7.75C8.75 7.19772 8.30228 6.75 7.75 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.75 6.75H3.75C3.19772 6.75 2.75 7.19772 2.75 7.75V11.75C2.75 12.3023 3.19772 12.75 3.75 12.75H7.75C8.30228 12.75 8.75 12.3023 8.75 11.75V7.75C8.75 7.19772 8.30228 6.75 7.75 6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 6.75V9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 15.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.369 5.342C16.013 6.449 14.975 7.25 13.75 7.25C12.231 7.25 11 6.019 11 4.5C11 2.981 12.231 1.75 13.75 1.75C14.509 1.75 15.196 2.057 15.693 2.554"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 7.25V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 4.5L15.692 2.558"
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

export default BoxScale;
