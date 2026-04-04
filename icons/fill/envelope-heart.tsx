import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeHeart({
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
          d="M13.731 17.692C13.901 17.781 14.099 17.781 14.269 17.692C15.166 17.22 18 15.511 18 12.731C18.004 11.51 17.026 10.516 15.813 10.509C15.083 10.518 14.405 10.889 14 11.5C13.595 10.889 12.916 10.519 12.187 10.509C10.974 10.516 9.996 11.511 10 12.731C10 15.511 12.834 17.22 13.731 17.692Z"
          fill={secondaryfill}
        />
        <path
          d="M3.75 2.5C2.23054 2.5 1 3.73203 1 5.25V12.75C1 14.268 2.23054 15.5 3.75 15.5H8.0054C8.41961 15.5 8.7554 15.1642 8.7554 14.75C8.7554 14.3358 8.41961 14 8.0054 14H3.75C3.061 14 2.5 13.439 2.5 12.75V6.521L8.154 9.641C8.419 9.787 8.71 9.86 9 9.86C9.29 9.86 9.581 9.787 9.846 9.641L15.5 6.521V8.328C15.5 8.74221 15.8358 9.078 16.25 9.078C16.6642 9.078 17 8.74221 17 8.328V5.25C17 3.73203 15.7695 2.5 14.25 2.5H3.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EnvelopeHeart;
