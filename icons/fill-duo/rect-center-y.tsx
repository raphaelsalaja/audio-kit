import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectCenterY({
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
          d="M2.75012 3.5H15.2501C15.6642 3.5 16.0001 3.1641 16.0001 2.75C16.0001 2.3359 15.6642 2 15.2501 2H2.75012C2.33602 2 2.00012 2.3359 2.00012 2.75C2.00012 3.1641 2.33602 3.5 2.75012 3.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.2501 14.5H2.75012C2.33602 14.5 2.00012 14.8359 2.00012 15.25C2.00012 15.6641 2.33602 16 2.75012 16H15.2501C15.6642 16 16.0001 15.6641 16.0001 15.25C16.0001 14.8359 15.6642 14.5 15.2501 14.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.2501 5H6.75012C5.78362 5 5.00012 5.7835 5.00012 6.75V11.25C5.00012 12.2165 5.78362 13 6.75012 13H11.2501C12.2166 13 13.0001 12.2165 13.0001 11.25V6.75C13.0001 5.7835 12.2166 5 11.2501 5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RectCenterY;
