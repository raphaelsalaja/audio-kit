import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScaleUnbalanced2({
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
          d="M3.29765 2.31723C3.19671 2.71896 3.44055 3.12645 3.84228 3.22739L13.7923 5.72739C14.194 5.82832 14.6015 5.58448 14.7024 5.18276C14.8034 4.78103 14.5595 4.37354 14.1578 4.2726L4.2078 1.7726C3.80608 1.67167 3.39859 1.91551 3.29765 2.31723Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.25 1.75C8.25 1.33579 8.58579 1 9 1C9.41421 1 9.75 1.33579 9.75 1.75V13.25C9.75 14.2165 10.5335 15 11.5 15H13.25C13.6642 15 14 15.3358 14 15.75C14 16.1642 13.6642 16.5 13.25 16.5H11.5H9H6.5H4.75C4.33579 16.5 4 16.1642 4 15.75C4 15.3358 4.33579 15 4.75 15H6.5C7.46649 15 8.25 14.2165 8.25 13.25V1.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.2768 4.72512C13.389 4.43872 13.6648 4.24991 13.9724 4.24884C14.28 4.24778 14.5571 4.43468 14.6714 4.7203L17.0393 10.6401C17.2265 11.108 17.1287 11.7036 16.6834 12.0678C15.8748 12.729 14.9338 13.0481 13.9821 13.0301C13.0847 13.0131 12.1777 12.6964 11.3633 12.0839C10.8943 11.7312 10.77 11.12 10.962 10.6303L13.2768 4.72512ZM15.2672 10.2488L13.9821 7.03591L12.7226 10.2488H15.2672Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3.32861 2.22146C3.44286 1.93584 3.71994 1.74894 4.02756 1.75C4.33518 1.75107 4.61097 1.93988 4.72323 2.22628L7.03806 8.13154C7.22997 8.62124 7.10566 9.23239 6.63673 9.58503C4.95848 10.8471 2.88746 10.8535 1.31652 9.56893C0.871145 9.20464 0.773527 8.6091 0.960734 8.1412L3.32861 2.22146ZM5.27737 7.75L4.01792 4.53707L2.73276 7.75H5.27737Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ScaleUnbalanced2;
