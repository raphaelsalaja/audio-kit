import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScaleUnbalanced({
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
          d="M14.7024 2.31723C14.8033 2.71896 14.5594 3.12645 14.1577 3.22739L4.20772 5.72739C3.80599 5.82832 3.3985 5.58448 3.29757 5.18276C3.19663 4.78103 3.44047 4.37354 3.8422 4.2726L13.7922 1.7726C14.1939 1.67167 14.6014 1.91551 14.7024 2.31723Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.75 1.75C9.75 1.33579 9.41421 1 9 1C8.58579 1 8.25 1.33579 8.25 1.75V13.25C8.25 14.2165 7.46649 15 6.5 15H4.75C4.33579 15 4 15.3358 4 15.75C4 16.1642 4.33579 16.5 4.75 16.5H6.5H9H11.5H13.25C13.6642 16.5 14 16.1642 14 15.75C14 15.3358 13.6642 15 13.25 15H11.5C10.5335 15 9.75 14.2165 9.75 13.25V1.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.72325 4.72512C4.61098 4.43872 4.3352 4.24991 4.02758 4.24884C3.71995 4.24778 3.44287 4.43468 3.32862 4.7203L0.960722 10.6401C0.773549 11.108 0.871273 11.7036 1.31662 12.0678C2.12518 12.729 3.06619 13.0481 4.01793 13.0301C4.91533 13.0131 5.82228 12.6964 6.63674 12.0839C7.10568 11.7312 7.22996 11.12 7.03805 10.6303L4.72325 4.72512ZM2.73277 10.2488L4.01793 7.03591L5.27738 10.2488H2.73277Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.6714 2.22146C14.5571 1.93584 14.2801 1.74894 13.9724 1.75C13.6648 1.75107 13.389 1.93988 13.2768 2.22628L10.9619 8.13154C10.77 8.62124 10.8943 9.23239 11.3633 9.58503C13.0415 10.8471 15.1125 10.8535 16.6835 9.56893C17.1289 9.20464 17.2265 8.6091 17.0393 8.1412L14.6714 2.22146ZM12.7226 7.75L13.9821 4.53707L15.2672 7.75H12.7226Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ScaleUnbalanced;
