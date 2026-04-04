import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeNotification({
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
          d="M1 5.25C1 3.73203 2.23054 2.5 3.75 2.5H14.25C15.7695 2.5 17 3.73203 17 5.25V10C17 10.4142 16.6642 10.75 16.25 10.75C15.8358 10.75 15.5 10.4142 15.5 10V6.521L9.846 9.641C9.581 9.787 9.29 9.86 9 9.86C8.71 9.86 8.419 9.787 8.154 9.641L2.5 6.521V12.75C2.5 13.439 3.061 14 3.75 14H11.75C12.1642 14 12.5 14.3358 12.5 14.75C12.5 15.1642 12.1642 15.5 11.75 15.5H3.75C2.23054 15.5 1 14.268 1 12.75V5.25Z"
          fill={fill}
        />
        <path
          d="M14.5 14.5C14.5 13.5338 15.2838 12.75 16.25 12.75C17.2162 12.75 18 13.5338 18 14.5C18 15.4662 17.2162 16.25 16.25 16.25C15.2838 16.25 14.5 15.4662 14.5 14.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default EnvelopeNotification;
