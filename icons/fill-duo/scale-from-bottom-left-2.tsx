import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScaleFromBottomLeft2({
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
          d="M13.2501 2H4.75011C3.23132 2 2.00012 3.23122 2.00012 4.75V13.25C2.00012 14.7688 3.23132 16 4.75011 16H13.2501C14.7689 16 16.0001 14.7688 16.0001 13.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.25011 9H4.75011C3.23132 9 2.00012 10.2312 2.00012 11.75V13.25C2.00012 14.7688 3.23132 16 4.75011 16H6.25011C7.76889 16 9.00011 14.7688 9.00011 13.25V11.75C9.00011 10.2312 7.76889 9 6.25011 9Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ScaleFromBottomLeft2;
