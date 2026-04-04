import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PositionTopRight({
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
          d="M15.25 7.25V3.75C15.25 3.19772 14.8023 2.75 14.25 2.75L10.75 2.75C10.1977 2.75 9.75 3.19772 9.75 3.75V7.25C9.75 7.80228 10.1977 8.25 10.75 8.25H14.25C14.8023 8.25 15.25 7.80228 15.25 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 7.25V3.75C15.25 3.19772 14.8023 2.75 14.25 2.75L10.75 2.75C10.1977 2.75 9.75 3.19772 9.75 3.75V7.25C9.75 7.80228 10.1977 8.25 10.75 8.25H14.25C14.8023 8.25 15.25 7.80228 15.25 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 3.5C3.164 3.5 3.5 3.164 3.5 2.75C3.5 2.336 3.164 2 2.75 2C2.336 2 2 2.336 2 2.75C2 3.164 2.336 3.5 2.75 3.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.75 6.625C3.164 6.625 3.5 6.289 3.5 5.875C3.5 5.461 3.164 5.125 2.75 5.125C2.336 5.125 2 5.461 2 5.875C2 6.289 2.336 6.625 2.75 6.625Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.75 9.75C3.164 9.75 3.5 9.414 3.5 9C3.5 8.586 3.164 8.25 2.75 8.25C2.336 8.25 2 8.586 2 9C2 9.414 2.336 9.75 2.75 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.75 12.875C3.164 12.875 3.5 12.539 3.5 12.125C3.5 11.711 3.164 11.375 2.75 11.375C2.336 11.375 2 11.711 2 12.125C2 12.539 2.336 12.875 2.75 12.875Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.25 12.875C15.664 12.875 16 12.539 16 12.125C16 11.711 15.664 11.375 15.25 11.375C14.836 11.375 14.5 11.711 14.5 12.125C14.5 12.539 14.836 12.875 15.25 12.875Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.75 16C3.164 16 3.5 15.664 3.5 15.25C3.5 14.836 3.164 14.5 2.75 14.5C2.336 14.5 2 14.836 2 15.25C2 15.664 2.336 16 2.75 16Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.875 16C6.289 16 6.625 15.664 6.625 15.25C6.625 14.836 6.289 14.5 5.875 14.5C5.461 14.5 5.125 14.836 5.125 15.25C5.125 15.664 5.461 16 5.875 16Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.875 3.5C6.289 3.5 6.625 3.164 6.625 2.75C6.625 2.336 6.289 2 5.875 2C5.461 2 5.125 2.336 5.125 2.75C5.125 3.164 5.461 3.5 5.875 3.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 16C9.414 16 9.75 15.664 9.75 15.25C9.75 14.836 9.414 14.5 9 14.5C8.586 14.5 8.25 14.836 8.25 15.25C8.25 15.664 8.586 16 9 16Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.125 16C12.5392 16 12.875 15.6642 12.875 15.25C12.875 14.8358 12.5392 14.5 12.125 14.5C11.7108 14.5 11.375 14.8358 11.375 15.25C11.375 15.6642 11.7108 16 12.125 16Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.25 16C15.664 16 16 15.664 16 15.25C16 14.836 15.664 14.5 15.25 14.5C14.836 14.5 14.5 14.836 14.5 15.25C14.5 15.664 14.836 16 15.25 16Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default PositionTopRight;
