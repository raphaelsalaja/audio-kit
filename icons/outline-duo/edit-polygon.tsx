import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EditPolygon({
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
          d="M10.75 4.75V3.75L7.24997 3.75V4.75C7.24997 5.30228 6.80225 5.75 6.24997 5.75H4.70661L3.75238 12.25H4.74997C5.30225 12.25 5.74997 12.6977 5.74997 13.25V14.25H12.25V13.25C12.25 12.6977 12.6977 12.25 13.25 12.25H14.2169L13.2137 5.75H11.75C11.1977 5.75 10.75 5.30228 10.75 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M4.75 5.75L3.75 12.25"
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
          d="M14.25 12.25L13.25 5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 3.75H7.25"
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
          d="M6.25 1.75H4.25C3.69772 1.75 3.25 2.19772 3.25 2.75V4.75C3.25 5.30228 3.69772 5.75 4.25 5.75H6.25C6.80228 5.75 7.25 5.30228 7.25 4.75V2.75C7.25 2.19772 6.80228 1.75 6.25 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 1.75H11.75C11.1977 1.75 10.75 2.19772 10.75 2.75V4.75C10.75 5.30228 11.1977 5.75 11.75 5.75H13.75C14.3023 5.75 14.75 5.30228 14.75 4.75V2.75C14.75 2.19772 14.3023 1.75 13.75 1.75Z"
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

export default EditPolygon;
