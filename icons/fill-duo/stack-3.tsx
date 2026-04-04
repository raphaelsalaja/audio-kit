import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Stack3({
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
          d="M13.7501 2H4.25012C2.73134 2 1.50012 3.23122 1.50012 4.75V11.25C1.50012 12.7688 2.73134 14 4.25012 14H13.7501C15.2689 14 16.5001 12.7688 16.5001 11.25V4.75C16.5001 3.23122 15.2689 2 13.7501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.2501 15.5H4.75012C4.33602 15.5 4.00012 15.8359 4.00012 16.25C4.00012 16.6641 4.33602 17 4.75012 17H13.2501C13.6642 17 14.0001 16.6641 14.0001 16.25C14.0001 15.8359 13.6642 15.5 13.2501 15.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Stack3;
