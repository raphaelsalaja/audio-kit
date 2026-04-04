import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Video({
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
          d="M10.25 3H3.75C2.233 3 1 4.233 1 5.75V12.25C1 13.767 2.233 15 3.75 15H10.25C11.767 15 13 13.767 13 12.25V5.75C13 4.233 11.767 3 10.25 3Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5 8C5.552 8 6 7.552 6 7C6 6.448 5.552 6 5 6C4.448 6 4 6.448 4 7C4 7.552 4.448 8 5 8Z"
          fill={fill}
        />
        <path
          d="M13 11.2688V6.73222L16.1488 5.00073C16.9809 4.54345 18.001 5.1448 18.001 6.09599V11.905C18.001 12.8561 16.9809 13.4576 16.1488 13.0003L13 11.2688Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Video;
