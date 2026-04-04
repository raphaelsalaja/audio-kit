import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HatSanta({
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
          d="M9.5 1.75C6.377 1.75 3.75 3.87 2.979 6.75H11.75C12.8546 6.75 13.75 7.64543 13.75 8.75V12.2284L16.25 13.5V8.5C16.25 4.772 13.228 1.75 9.5 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.979 6.75C3.75 3.87 6.377 1.75 9.5 1.75C13.228 1.75 16.25 4.772 16.25 8.5V13.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15 16.75C15.9665 16.75 16.75 15.9665 16.75 15C16.75 14.0335 15.9665 13.25 15 13.25C14.0335 13.25 13.25 14.0335 13.25 15C13.25 15.9665 14.0335 16.75 15 16.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.764 13.091C8.278 12.915 7.599 12.962 7.251 13.533C6.902 12.962 6.224 12.915 5.738 13.091C4.769 13.442 4.066 14.554 3.057 14.429C2.849 14.403 2.683 14.595 2.778 14.772C3.312 15.768 4.369 16.001 4.961 16.001C5.64 16.001 6.634 15.587 7.25 14.66C7.866 15.588 8.86 16.001 9.539 16.001C10.131 16.001 11.189 15.768 11.722 14.772C11.817 14.595 11.65 14.403 11.443 14.429C10.435 14.556 9.731 13.442 8.762 13.091H8.764Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.75 13.5V8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 6.75H3.25C2.42157 6.75 1.75 7.42157 1.75 8.25V8.75C1.75 9.57843 2.42157 10.25 3.25 10.25H12.25C13.0784 10.25 13.75 9.57843 13.75 8.75V8.25C13.75 7.42157 13.0784 6.75 12.25 6.75Z"
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

export default HatSanta;
