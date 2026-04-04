import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScreenSharing({
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
          d="M14.26 13.5C15.772 13.49 17 12.26 17 10.75V4.75C17 3.23 15.767 2 14.25 2H3.75C2.233 2 1 3.23 1 4.75V10.75C1 12.27 2.233 13.5 3.75 13.5H14.26Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.25002 14.53C7.32702 14.5899 6.41102 14.75 5.52402 15.03C5.12902 15.16 4.91003 15.5799 5.03503 15.98C5.15903 16.37 5.57602 16.59 5.97502 16.46C7.93402 15.85 10.065 15.85 12.024 16.46C12.099 16.49 12.175 16.5 12.25 16.5C12.568 16.5 12.864 16.29 12.965 15.98C13.09 15.58 12.87 15.1601 12.476 15.03C11.591 14.75 10.674 14.5899 9.75002 14.53V13.5H8.25002V14.53Z"
          fill={fill}
        />
        <path
          d="M9.03 8.96997L5.561 5.5H8.25C8.664 5.5 9 5.16 9 4.75C9 4.34 8.664 4 8.25 4H3.75C3.336 4 3 4.34 3 4.75V9.25C3 9.66 3.336 10 3.75 10C4.164 10 4.5 9.66 4.5 9.25V6.56006L7.97 10.0302C8.116 10.1802 8.308 10.2501 8.5 10.2501C8.692 10.2501 8.884 10.1803 9.03 10.0302C9.323 9.74015 9.323 9.26007 9.03 8.96997Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ScreenSharing;
