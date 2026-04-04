import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SprayCan({
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
          d="M3 7.75C3 5.67979 4.67979 4 6.75 4H10.25C12.3202 4 14 5.67979 14 7.75V15.25C14 16.2162 13.2162 17 12.25 17H4.75C3.78379 17 3 16.2162 3 15.25V7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.25 3.5C13.664 3.5 14 3.164 14 2.75C14 2.336 13.664 2 13.25 2C12.836 2 12.5 2.336 12.5 2.75C12.5 3.164 12.836 3.5 13.25 3.5Z"
          fill={fill}
        />
        <path
          d="M15.75 2C16.164 2 16.5 1.664 16.5 1.25C16.5 0.836 16.164 0.5 15.75 0.5C15.336 0.5 15 0.836 15 1.25C15 1.664 15.336 2 15.75 2Z"
          fill={fill}
        />
        <path
          d="M15.75 5C16.164 5 16.5 4.664 16.5 4.25C16.5 3.836 16.164 3.5 15.75 3.5C15.336 3.5 15 3.836 15 4.25C15 4.664 15.336 5 15.75 5Z"
          fill={fill}
        />
        <path
          d="M11 4.0751C10.7577 4.02585 10.5068 4 10.25 4H6.75C6.49317 4 6.24235 4.02585 6 4.0751V1.75C6 0.783786 6.78379 0 7.75 0H9.25C10.2162 0 11 0.783786 11 1.75V4.0751Z"
          fill={fill}
        />
        <path
          d="M14 8V14H8.75C8.33579 14 8 13.6642 8 13.25V8.75C8 8.33579 8.33579 8 8.75 8H14Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SprayCan;
