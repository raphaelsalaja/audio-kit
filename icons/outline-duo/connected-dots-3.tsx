import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ConnectedDots3({
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
          d="M4.5 11.25C5.743 11.25 6.75 10.243 6.75 9C6.75 7.757 5.743 6.75 4.5 6.75C3.257 6.75 2.25 7.757 2.25 9C2.25 10.243 3.257 11.25 4.5 11.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.5 6.75C13.743 6.75 14.75 5.743 14.75 4.5C14.75 3.257 13.743 2.25 12.5 2.25C11.257 2.25 10.25 3.257 10.25 4.5C10.25 5.743 11.257 6.75 12.5 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.5 15.75C13.743 15.75 14.75 14.743 14.75 13.5C14.75 12.257 13.743 11.25 12.5 11.25C11.257 11.25 10.25 12.257 10.25 13.5C10.25 14.743 11.257 15.75 12.5 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.46057 7.8971L10.5397 5.6026"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.46057 10.1029L10.5397 12.3974"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.5 11.25C5.743 11.25 6.75 10.243 6.75 9C6.75 7.757 5.743 6.75 4.5 6.75C3.257 6.75 2.25 7.757 2.25 9C2.25 10.243 3.257 11.25 4.5 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.5 6.75C13.743 6.75 14.75 5.743 14.75 4.5C14.75 3.257 13.743 2.25 12.5 2.25C11.257 2.25 10.25 3.257 10.25 4.5C10.25 5.743 11.257 6.75 12.5 6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.5 15.75C13.743 15.75 14.75 14.743 14.75 13.5C14.75 12.257 13.743 11.25 12.5 11.25C11.257 11.25 10.25 12.257 10.25 13.5C10.25 14.743 11.257 15.75 12.5 15.75Z"
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

export default ConnectedDots3;
