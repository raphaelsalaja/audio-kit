import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bricks({
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
          d="M12.75 1.75H8.75C8.19772 1.75 7.75 2.19772 7.75 2.75V4.25C7.75 4.80228 8.19772 5.25 8.75 5.25H12.75C13.3023 5.25 13.75 4.80228 13.75 4.25V2.75C13.75 2.19772 13.3023 1.75 12.75 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.25 5.25H5.25C4.69772 5.25 4.25 5.69772 4.25 6.25V7.75C4.25 8.30228 4.69772 8.75 5.25 8.75H9.25C9.80228 8.75 10.25 8.30228 10.25 7.75V6.25C10.25 5.69772 9.80228 5.25 9.25 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.75 8.75H8.75C8.19772 8.75 7.75 9.19772 7.75 9.75V11.25C7.75 11.8023 8.19772 12.25 8.75 12.25H12.75C13.3023 12.25 13.75 11.8023 13.75 11.25V9.75C13.75 9.19772 13.3023 8.75 12.75 8.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.25 12.25H5.25C4.69772 12.25 4.25 12.6977 4.25 13.25V14.75C4.25 15.3023 4.69772 15.75 5.25 15.75H9.25C9.80228 15.75 10.25 15.3023 10.25 14.75V13.25C10.25 12.6977 9.80228 12.25 9.25 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 1.75H2.75C2.19772 1.75 1.75 2.19772 1.75 2.75V4.25C1.75 4.80228 2.19772 5.25 2.75 5.25H6.75C7.30228 5.25 7.75 4.80228 7.75 4.25V2.75C7.75 2.19772 7.30228 1.75 6.75 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 5.25H11.25C10.6977 5.25 10.25 5.69772 10.25 6.25V7.75C10.25 8.30228 10.6977 8.75 11.25 8.75H15.25C15.8023 8.75 16.25 8.30228 16.25 7.75V6.25C16.25 5.69772 15.8023 5.25 15.25 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 8.75H2.75C2.19772 8.75 1.75 9.19772 1.75 9.75V11.25C1.75 11.8023 2.19772 12.25 2.75 12.25H6.75C7.30228 12.25 7.75 11.8023 7.75 11.25V9.75C7.75 9.19772 7.30228 8.75 6.75 8.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 12.25H11.25C10.6977 12.25 10.25 12.6977 10.25 13.25V14.75C10.25 15.3023 10.6977 15.75 11.25 15.75H15.25C15.8023 15.75 16.25 15.3023 16.25 14.75V13.25C16.25 12.6977 15.8023 12.25 15.25 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 1.75H8.75C8.19772 1.75 7.75 2.19772 7.75 2.75V4.25C7.75 4.80228 8.19772 5.25 8.75 5.25H12.75C13.3023 5.25 13.75 4.80228 13.75 4.25V2.75C13.75 2.19772 13.3023 1.75 12.75 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25 5.25H5.25C4.69772 5.25 4.25 5.69772 4.25 6.25V7.75C4.25 8.30228 4.69772 8.75 5.25 8.75H9.25C9.80228 8.75 10.25 8.30228 10.25 7.75V6.25C10.25 5.69772 9.80228 5.25 9.25 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 8.75H8.75C8.19772 8.75 7.75 9.19772 7.75 9.75V11.25C7.75 11.8023 8.19772 12.25 8.75 12.25H12.75C13.3023 12.25 13.75 11.8023 13.75 11.25V9.75C13.75 9.19772 13.3023 8.75 12.75 8.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25 12.25H5.25C4.69772 12.25 4.25 12.6977 4.25 13.25V14.75C4.25 15.3023 4.69772 15.75 5.25 15.75H9.25C9.80228 15.75 10.25 15.3023 10.25 14.75V13.25C10.25 12.6977 9.80228 12.25 9.25 12.25Z"
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

export default Bricks;
