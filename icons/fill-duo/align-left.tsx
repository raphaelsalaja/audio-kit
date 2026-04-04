import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlignLeft({
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
          d="M2.75 1C3.16421 1 3.5 1.33579 3.5 1.75V16.25C3.5 16.6642 3.16421 17 2.75 17C2.33579 17 2 16.6642 2 16.25V1.75C2 1.33579 2.33579 1 2.75 1Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 4.75C5 3.78334 5.78393 3 6.75 3H14.25C15.2161 3 16 3.78334 16 4.75V6.25C16 7.21666 15.2161 8 14.25 8H6.75C5.78393 8 5 7.21666 5 6.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5 11.75C5 10.7833 5.78393 10 6.75 10H10.25C11.2161 10 12 10.7833 12 11.75V13.25C12 14.2167 11.2161 15 10.25 15H6.75C5.78393 15 5 14.2167 5 13.25V11.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default AlignLeft;
