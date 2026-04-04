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
          d="M3.762 14.989L9.836 8.914C10.6168 8.133 11.883 8.133 12.6639 8.9139L15.25 11.5V13.25C15.25 14.3546 14.3546 15.25 13.25 15.25H4.75C4.75 15.25 4.2495 15.2682 3.762 14.989Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.762 14.989L9.836 8.914C10.617 8.133 11.883 8.133 12.664 8.914L15.25 11.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 8.5C6.94036 8.5 7.5 7.94036 7.5 7.25C7.5 6.55964 6.94036 6 6.25 6C5.55964 6 5 6.55964 5 7.25C5 7.94036 5.55964 8.5 6.25 8.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.25 1.25V6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.75 3.75H11.75"
          fill="none"
          stroke={fill}
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
      </g>
    </svg>
  );
}

export default ImagePlus;
