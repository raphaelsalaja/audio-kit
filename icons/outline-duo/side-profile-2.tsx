import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SideProfile2({
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
          d="M1.50871 2.1023L1 1.93768L1.00001 15C1.00001 15.5523 1.44772 16 2.00001 16H2.25H2.50001V13.75H3.889C4.938 13.75 5.808 12.94 5.884 11.894L5.996 10.351L7.5 9.74998L6 7.74998C6 4.95398 4.088 2.60498 1.5 1.93898L1.50871 2.1023Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M16.4913 2.1023L17 1.93768L17 15C17 15.5523 16.5523 16 16 16H15.75H15.5V13.75H14.111C13.062 13.75 12.192 12.94 12.116 11.894L12.004 10.351L10.5 9.74998L12 7.74998C12 4.95398 13.912 2.60498 16.5 1.93898L16.4913 2.1023Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.25 16.25V13.75H3.889C4.938 13.75 5.808 12.94 5.884 11.894L5.996 10.351L7.5 9.75L6 7.75C6 4.954 4.088 2.605 1.5 1.939"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 8C3.66421 8 4 7.66421 4 7.25C4 6.83579 3.66421 6.5 3.25 6.5C2.83579 6.5 2.5 6.83579 2.5 7.25C2.5 7.66421 2.83579 8 3.25 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.75 16.25V13.75H14.111C13.062 13.75 12.192 12.94 12.116 11.894L12.004 10.351L10.5 9.75L12 7.75C12 4.954 13.912 2.605 16.5 1.939"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 8C15.1642 8 15.5 7.66421 15.5 7.25C15.5 6.83579 15.1642 6.5 14.75 6.5C14.3358 6.5 14 6.83579 14 7.25C14 7.66421 14.3358 8 14.75 8Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default SideProfile2;
