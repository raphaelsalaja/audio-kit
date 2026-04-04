import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextTool({
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
          d="M13.25 3.25V4.25C13.25 4.52614 13.4739 4.75 13.75 4.75H14.75V13.25H13.75C13.4739 13.25 13.25 13.4739 13.25 13.75V14.75H4.75V13.75C4.75 13.4739 4.52614 13.25 4.25 13.25H3.25V4.75H4.25C4.52614 4.75 4.75 4.52614 4.75 4.25V3.25H13.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 6.25V11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 6.25H6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 1.75H2.25C1.97386 1.75 1.75 1.97386 1.75 2.25V4.25C1.75 4.52614 1.97386 4.75 2.25 4.75H4.25C4.52614 4.75 4.75 4.52614 4.75 4.25V2.25C4.75 1.97386 4.52614 1.75 4.25 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 1.75H13.75C13.4739 1.75 13.25 1.97386 13.25 2.25V4.25C13.25 4.52614 13.4739 4.75 13.75 4.75H15.75C16.0261 4.75 16.25 4.52614 16.25 4.25V2.25C16.25 1.97386 16.0261 1.75 15.75 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 13.25H2.25C1.97386 13.25 1.75 13.4739 1.75 13.75V15.75C1.75 16.0261 1.97386 16.25 2.25 16.25H4.25C4.52614 16.25 4.75 16.0261 4.75 15.75V13.75C4.75 13.4739 4.52614 13.25 4.25 13.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 13.25H13.75C13.4739 13.25 13.25 13.4739 13.25 13.75V15.75C13.25 16.0261 13.4739 16.25 13.75 16.25H15.75C16.0261 16.25 16.25 16.0261 16.25 15.75V13.75C16.25 13.4739 16.0261 13.25 15.75 13.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 13.25V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 14.75H4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 4.75V13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 3.25H13.25"
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

export default TextTool;
