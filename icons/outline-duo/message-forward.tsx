import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageForward({
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
          d="M14.25 2.25H3.5C2.395 2.25 1.5 3.146 1.5 4.25V11.25C1.5 12.354 2.395 13.25 3.5 13.25H5.75V16.25L9.5 13.25H14.25C15.355 13.25 16.25 12.354 16.25 11.25V4.25C16.25 3.146 15.355 2.25 14.25 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.5 7.75H2.75C2.198 7.75 1.75 8.198 1.75 8.75V11.25C1.75 12.355 2.645 13.25 3.75 13.25H5.75V16.25L9.5 13.25H14.25C15.355 13.25 16.25 12.355 16.25 11.25V4.25C16.25 3.145 15.355 2.25 14.25 2.25H3.75C2.645 2.25 1.75 3.145 1.75 4.25V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8 5L10.75 7.75L8 10.5"
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

export default MessageForward;
