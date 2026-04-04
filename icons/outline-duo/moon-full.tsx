import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoonFull({
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
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.75 12.5C10.1642 12.5 10.5 12.1642 10.5 11.75C10.5 11.3358 10.1642 11 9.75 11C9.33579 11 9 11.3358 9 11.75C9 12.1642 9.33579 12.5 9.75 12.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.5 10C7.05228 10 7.5 9.55228 7.5 9C7.5 8.44772 7.05228 8 6.5 8C5.94772 8 5.5 8.44772 5.5 9C5.5 9.55228 5.94772 10 6.5 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.75 8C11.4404 8 12 7.44036 12 6.75C12 6.05964 11.4404 5.5 10.75 5.5C10.0596 5.5 9.5 6.05964 9.5 6.75C9.5 7.44036 10.0596 8 10.75 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
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

export default MoonFull;
