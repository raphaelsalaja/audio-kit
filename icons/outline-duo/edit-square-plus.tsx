import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EditSquarePlus({
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
          d="M12.25 4.75V3.75H5.75V4.75C5.75 5.30228 5.30228 5.75 4.75 5.75H3.75V12.25H4.75C5.30228 12.25 5.75 12.6977 5.75 13.25V14.25H12.25V13.25C12.25 12.6977 12.6977 12.25 13.25 12.25H14.25V5.75H13.25C12.6977 5.75 12.25 5.30228 12.25 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M3.75 5.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 14.25H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 12.25V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 3.75H5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.75V11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 9H6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 12.25H2.75C2.19772 12.25 1.75 12.6977 1.75 13.25V15.25C1.75 15.8023 2.19772 16.25 2.75 16.25H4.75C5.30228 16.25 5.75 15.8023 5.75 15.25V13.25C5.75 12.6977 5.30228 12.25 4.75 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 1.75H2.75C2.19772 1.75 1.75 2.19772 1.75 2.75V4.75C1.75 5.30228 2.19772 5.75 2.75 5.75H4.75C5.30228 5.75 5.75 5.30228 5.75 4.75V2.75C5.75 2.19772 5.30228 1.75 4.75 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 1.75H13.25C12.6977 1.75 12.25 2.19772 12.25 2.75V4.75C12.25 5.30228 12.6977 5.75 13.25 5.75H15.25C15.8023 5.75 16.25 5.30228 16.25 4.75V2.75C16.25 2.19772 15.8023 1.75 15.25 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 12.25H13.25C12.6977 12.25 12.25 12.6977 12.25 13.25V15.25C12.25 15.8023 12.6977 16.25 13.25 16.25H15.25C15.8023 16.25 16.25 15.8023 16.25 15.25V13.25C16.25 12.6977 15.8023 12.25 15.25 12.25Z"
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

export default EditSquarePlus;
