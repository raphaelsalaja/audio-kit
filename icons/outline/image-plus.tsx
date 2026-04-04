import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImagePlus({
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
          d="M3.76196 14.989L9.83597 8.914C10.617 8.133 11.883 8.133 12.664 8.914L15.25 11.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 8.5C6.94 8.5 7.5 7.9404 7.5 7.25C7.5 6.5596 6.94 6 6.25 6C5.56 6 5 6.5596 5 7.25C5 7.9404 5.56 8.5 6.25 8.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.25 1.25V6.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.92239 2.75H4.75C3.645 2.75 2.75 3.6455 2.75 4.75V13.25C2.75 14.3545 3.645 15.25 4.75 15.25H13.25C14.355 15.25 15.25 14.3545 15.25 13.25V11.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.75 3.75H11.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ImagePlus;
