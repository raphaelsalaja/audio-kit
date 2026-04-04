import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BottleWater({
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
          d="M2.75806 10.7543H8.75001L8.98936 13.75H2.75806V10.7543Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 2.25C4.75 1.69772 5.19772 1.25 5.75 1.25H7.25C7.80228 1.25 8.25 1.69772 8.25 2.25V4.21116H4.75V2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.03595 13.75L9.184 15.821C9.221 16.345 9.656 16.75 10.181 16.75H13.819C14.343 16.75 14.779 16.344 14.816 15.821L14.9641 13.75H9.03595Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.75 10.75H8.821"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 13.75H9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 9.75H15.25L14.816 15.821C14.779 16.344 14.343 16.75 13.819 16.75H10.181C9.656 16.75 9.221 16.345 9.184 15.821L8.75 9.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.03601 13.75H14.935"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.30911 16.75H3.75C3.198 16.75 2.75 16.302 2.75 15.75V10.5C2.75 8.042 4.75 6.792 4.75 3.75V2.25C4.75 1.698 5.198 1.25 5.75 1.25H7.25C7.802 1.25 8.25 1.698 8.25 2.25V3.75C8.25 4.9752 8.57471 5.9097 8.96271 6.7501"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25 4.25H4.75"
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

export default BottleWater;
