import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinSlash({
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
          d="M9 1.75C11.0406 1.75 12.8418 2.77042 13.9258 4.32715L10.9365 7.25977C10.7176 6.39287 9.93514 5.75 9 5.75C7.8954 5.75 7 6.646 7 7.75C7 8.67163 7.62483 9.44531 8.47363 9.67676L5.03613 13.0498C3.90225 11.6096 3 9.78235 3 7.75C3 4.438 5.6863 1.75 9 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15 7.75C15 12.25 10.5833 15.75 9 16.25C8.4318 16.0706 7.53958 15.4637 6.57666 14.604L14.4401 6.7406C14.9386 6.97915 15 7.2911 15 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.8941 7.10651C10.6261 6.31791 9.8793 5.75 9 5.75C7.8954 5.75 7 6.646 7 7.75C7 8.629 7.56761 9.3762 8.35651 9.6442"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.11292 15.1293C7.86082 15.7176 8.54662 16.1068 9.00002 16.25C10.5833 15.75 15 12.25 15 7.75C15 7.5857 14.9934 7.42298 14.9804 7.26208"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.8214 4.17871C12.7281 2.70531 10.9756 1.75 9 1.75C5.6863 1.75 3 4.438 3 7.75C3 9.7598 3.881 11.5701 4.9971 13.0028"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
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

export default PinSlash;
