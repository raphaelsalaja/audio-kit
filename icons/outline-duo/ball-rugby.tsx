import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallRugby({
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
          d="M15.7396 7.40432C13.1902 6.78404 11.1755 4.79782 10.5143 2.26467C8.44158 2.38508 6.40414 3.23582 4.81996 4.82C3.22614 6.41383 2.37471 8.46645 2.26251 10.5523C4.78275 11.2106 6.76138 13.2088 7.39165 15.7403C9.4967 15.6404 11.5719 14.7881 13.18 13.18C14.7849 11.5751 15.637 9.50504 15.7396 7.40432Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6.25098 8.084L8.44998 10.283"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.08398 6.251L10.283 8.45"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.43402 10.466C6.88902 9.807 7.48902 9.045 8.26702 8.267C8.83302 7.701 9.56102 7.059 10.466 6.434"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.26202 10.567C3.45402 10.905 4.57902 11.544 5.51802 12.482C6.45702 13.42 7.09502 14.545 7.43302 15.738"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.567 2.262C10.905 3.454 11.544 4.579 12.482 5.518C13.42 6.457 14.545 7.095 15.738 7.433"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.81998 4.82C2.20398 7.436 1.58798 11.288 2.95798 14.494C3.06198 14.738 3.26198 14.938 3.50598 15.042C6.71198 16.412 10.564 15.796 13.18 13.18C15.796 10.564 16.412 6.712 15.042 3.506C14.938 3.262 14.738 3.062 14.494 2.958C11.288 1.588 7.43598 2.204 4.81998 4.82Z"
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

export default BallRugby;
