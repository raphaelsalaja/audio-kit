import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FlipHorizontal2({
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
          d="M6.09767 3.4199C6.55722 2.46083 8.00003 2.7868 8.00003 3.85199V14.25C8.00003 14.6642 7.66424 15 7.25003 15H2.54303C1.85282 15 1.29303 14.4402 1.29303 13.75C1.29303 13.5621 1.33549 13.3778 1.41526 13.2108L6.09767 3.4199Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10 3.85199C10 2.7868 11.4428 2.46083 11.9024 3.4199L16.5846 13.2104C16.6644 13.3774 16.707 13.5621 16.707 13.75C16.707 14.4402 16.1472 15 15.457 15H10.75C10.3358 15 10 14.6642 10 14.25V3.85199Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FlipHorizontal2;
