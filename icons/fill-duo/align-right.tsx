import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlignRight({
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
          d="M15.25 1C15.6642 1 16 1.33579 16 1.75V16.25C16 16.6642 15.6642 17 15.25 17C14.8358 17 14.5 16.6642 14.5 16.25V1.75C14.5 1.33579 14.8358 1 15.25 1Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 4.75C2 3.78334 2.78393 3 3.75 3H11.25C12.2161 3 13 3.78334 13 4.75V6.25C13 7.21666 12.2161 8 11.25 8H3.75C2.78393 8 2 7.21666 2 6.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6 11.75C6 10.7833 6.78393 10 7.75 10H11.25C12.2161 10 13 10.7833 13 11.75V13.25C13 14.2167 12.2161 15 11.25 15H7.75C6.78393 15 6 14.2167 6 13.25V11.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default AlignRight;
