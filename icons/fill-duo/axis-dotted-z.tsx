import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AxisDottedZ({
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
          d="M7.25 2.5C7.664 2.5 8 2.164 8 1.75C8 1.336 7.664 1 7.25 1C6.836 1 6.5 1.336 6.5 1.75C6.5 2.164 6.836 2.5 7.25 2.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.25 5.5C7.664 5.5 8 5.164 8 4.75C8 4.336 7.664 4 7.25 4C6.836 4 6.5 4.336 6.5 4.75C6.5 5.164 6.836 5.5 7.25 5.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.25 8.5C7.664 8.5 8 8.164 8 7.75C8 7.336 7.664 7 7.25 7C6.836 7 6.5 7.336 6.5 7.75C6.5 8.164 6.836 8.5 7.25 8.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.25 11.5C16.6642 11.5 17 11.1642 17 10.75C17 10.3358 16.6642 10 16.25 10C15.8358 10 15.5 10.3358 15.5 10.75C15.5 11.1642 15.8358 11.5 16.25 11.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.25 11.5C13.6642 11.5 14 11.1642 14 10.75C14 10.3358 13.6642 10 13.25 10C12.8358 10 12.5 10.3358 12.5 10.75C12.5 11.1642 12.8358 11.5 13.25 11.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.25 11.5C10.6642 11.5 11 11.1642 11 10.75C11 10.3358 10.6642 10 10.25 10C9.83579 10 9.5 10.3358 9.5 10.75C9.5 11.1642 9.83579 11.5 10.25 11.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.78 10.22C7.487 9.92699 7.012 9.92699 6.719 10.22L2.5 14.439V12.75C2.5 12.336 2.164 12 1.75 12C1.336 12 1 12.336 1 12.75V16.25C1 16.664 1.336 17 1.75 17H5.25C5.664 17 6 16.664 6 16.25C6 15.836 5.664 15.5 5.25 15.5H3.561L7.781 11.2801C8.074 10.9871 8.074 10.512 7.781 10.219L7.78 10.22Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AxisDottedZ;
