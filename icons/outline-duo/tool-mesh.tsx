import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ToolMesh({
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
          d="M3.75 15.25L14.25 15.25C15.3546 15.25 16.25 14.3546 16.25 13.25V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75L3.75 2.75C2.64543 2.75 1.75 3.64543 1.75 4.75L1.75 13.25C1.75 14.3546 2.64543 15.25 3.75 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 6.75H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 11.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 3C6.368 3.334 8.656 5.484 8.656 9C8.656 9.497 8.603 12.636 6 15"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 3C11.784 3.999 12.753 6.132 12.753 9C12.753 10.132 12.602 12.471 11.25 15"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 15.25L14.25 15.25C15.3546 15.25 16.25 14.3546 16.25 13.25V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75L3.75 2.75C2.64543 2.75 1.75 3.64543 1.75 4.75L1.75 13.25C1.75 14.3546 2.64543 15.25 3.75 15.25Z"
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

export default ToolMesh;
