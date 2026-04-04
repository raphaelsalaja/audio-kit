import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleImage({
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
          d="M4.2825 14.5054L9.82934 8.92687C10.6074 8.14437 11.8722 8.13988 12.6558 8.91683L15.6521 11.8878C16.0367 11.0029 16.25 10.0264 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 11.2026 2.7322 13.1757 4.2825 14.5054Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M4.263 14.488L9.836 8.914C10.617 8.133 11.883 8.133 12.664 8.914L15.652 11.902"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
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
      </g>
    </svg>
  );
}

export default CircleImage;
