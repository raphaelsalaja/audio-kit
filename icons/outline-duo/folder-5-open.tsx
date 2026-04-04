import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Folder5Open({
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
          d="M16.187 8.25H5.30799C4.83599 8.25 4.42899 8.579 4.32999 9.04L3.25899 14.04C3.12599 14.663 3.59999 15.25 4.23699 15.25H15.115C15.587 15.25 15.994 14.921 16.093 14.46L17.164 9.46C17.297 8.837 16.824 8.25 16.187 8.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.18 15.25H3.75C2.645 15.25 1.75 14.355 1.75 13.25V3.75C1.75 3.198 2.198 2.75 2.75 2.75H6.547C6.835 2.75 7.11 2.875 7.3 3.092L9.625 5.75H15.251"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.187 8.25H5.30799C4.83599 8.25 4.42899 8.579 4.32999 9.04L3.25899 14.04C3.12599 14.663 3.59999 15.25 4.23699 15.25H15.115C15.587 15.25 15.994 14.921 16.093 14.46L17.164 9.46C17.297 8.837 16.824 8.25 16.187 8.25Z"
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

export default Folder5Open;
