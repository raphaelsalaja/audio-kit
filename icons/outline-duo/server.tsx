import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Server({
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
          d="M14.75 2.75H3.25C2.42157 2.75 1.75 3.42157 1.75 4.25V6.25C1.75 7.07843 2.42157 7.75 3.25 7.75H14.75C15.5784 7.75 16.25 7.07843 16.25 6.25V4.25C16.25 3.42157 15.5784 2.75 14.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 10.25H3.25C2.42157 10.25 1.75 10.9216 1.75 11.75V13.75C1.75 14.5784 2.42157 15.25 3.25 15.25H14.75C15.5784 15.25 16.25 14.5784 16.25 13.75V11.75C16.25 10.9216 15.5784 10.25 14.75 10.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.25 6C4.66421 6 5 5.66421 5 5.25C5 4.83579 4.66421 4.5 4.25 4.5C3.83579 4.5 3.5 4.83579 3.5 5.25C3.5 5.66421 3.83579 6 4.25 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.75 6C7.16421 6 7.5 5.66421 7.5 5.25C7.5 4.83579 7.16421 4.5 6.75 4.5C6.33579 4.5 6 4.83579 6 5.25C6 5.66421 6.33579 6 6.75 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4.25 13.5C4.66421 13.5 5 13.1642 5 12.75C5 12.3358 4.66421 12 4.25 12C3.83579 12 3.5 12.3358 3.5 12.75C3.5 13.1642 3.83579 13.5 4.25 13.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.75 13.5C7.16421 13.5 7.5 13.1642 7.5 12.75C7.5 12.3358 7.16421 12 6.75 12C6.33579 12 6 12.3358 6 12.75C6 13.1642 6.33579 13.5 6.75 13.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.75 2.75H3.25C2.42157 2.75 1.75 3.42157 1.75 4.25V6.25C1.75 7.07843 2.42157 7.75 3.25 7.75H14.75C15.5784 7.75 16.25 7.07843 16.25 6.25V4.25C16.25 3.42157 15.5784 2.75 14.75 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 10.25H3.25C2.42157 10.25 1.75 10.9216 1.75 11.75V13.75C1.75 14.5784 2.42157 15.25 3.25 15.25H14.75C15.5784 15.25 16.25 14.5784 16.25 13.75V11.75C16.25 10.9216 15.5784 10.25 14.75 10.25Z"
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

export default Server;
