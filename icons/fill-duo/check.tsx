import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Check({
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
          d="M6.75009 15H6.74808C6.52058 14.9995 6.30668 14.896 6.16408 14.7188L2.16408 9.7188C1.90528 9.3951 1.95798 8.92339 2.28128 8.66459C2.60548 8.40679 3.07618 8.4576 3.33598 8.7813L6.75398 13.0538L14.6671 3.27839C14.9278 2.95559 15.4015 2.9073 15.7218 3.1671C16.0441 3.4278 16.0939 3.9 15.8331 4.2218L7.33308 14.7218C7.19048 14.8981 6.97669 15 6.75009 15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Check;
