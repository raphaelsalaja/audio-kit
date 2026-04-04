import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MusicNote({
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
          d="M6 16.25C7.51878 16.25 8.75 15.0188 8.75 13.5C8.75 11.9812 7.51878 10.75 6 10.75C4.48122 10.75 3.25 11.9812 3.25 13.5C3.25 15.0188 4.48122 16.25 6 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.615 2.38199L13.115 1.90499C13.715 1.82299 14.25 2.28999 14.25 2.89599V4.62699C14.25 5.12699 13.881 5.54999 13.385 5.61799L8.75 6.24999V3.37299C8.75 2.87299 9.119 2.44999 9.615 2.38199Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.75 6.25V13.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 16.25C7.51878 16.25 8.75 15.0188 8.75 13.5C8.75 11.9812 7.51878 10.75 6 10.75C4.48122 10.75 3.25 11.9812 3.25 13.5C3.25 15.0188 4.48122 16.25 6 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.615 2.38199L13.115 1.90499C13.715 1.82299 14.25 2.28999 14.25 2.89599V4.62699C14.25 5.12699 13.881 5.54999 13.385 5.61799L8.75 6.24999V3.37299C8.75 2.87299 9.119 2.44999 9.615 2.38199Z"
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

export default MusicNote;
