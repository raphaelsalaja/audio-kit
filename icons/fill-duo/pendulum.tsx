import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pendulum({
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
          d="M1 2.75C1 2.33579 1.33579 2 1.75 2H16.25C16.6642 2 17 2.33579 17 2.75C17 3.16421 16.6642 3.5 16.25 3.5H1.75C1.33579 3.5 1 3.16421 1 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.131 5.00951C14.5399 4.94377 14.9247 5.22201 14.9905 5.63097L15.9269 11.4565C16.9953 11.568 17.829 12.4716 17.829 13.57C17.829 14.7437 16.877 15.695 15.704 15.695C14.5309 15.695 13.579 14.7437 13.579 13.57C13.579 12.8568 13.9304 12.2258 14.4694 11.8404L13.5095 5.86903C13.4438 5.46007 13.722 5.07525 14.131 5.00951ZM4.5 5.75C4.5 5.33579 4.16421 5 3.75 5C3.33579 5 3 5.33579 3 5.75V11.8862C2.19671 12.1894 1.625 12.9654 1.625 13.875C1.625 15.0487 2.57694 16 3.75 16C4.92306 16 5.875 15.0487 5.875 13.875C5.875 12.9654 5.30329 12.1894 4.5 11.8862V5.75ZM9.75 5.75C9.75 5.33579 9.41421 5 9 5C8.58579 5 8.25 5.33579 8.25 5.75V11.8862C7.44671 12.1894 6.875 12.9654 6.875 13.875C6.875 15.0487 7.82694 16 9 16C10.1731 16 11.125 15.0487 11.125 13.875C11.125 12.9654 10.5533 12.1894 9.75 11.8862V5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Pendulum;
