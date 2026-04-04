import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MouseCable({
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
          d="M9.75 5.25H8.25C6.317 5.25 4.75 6.817 4.75 8.75V13.75C4.75 15.683 6.317 17.25 8.25 17.25H9.75C11.683 17.25 13.25 15.683 13.25 13.75V8.75C13.25 6.817 11.683 5.25 9.75 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 5.25V4.5C9 3.534 9.784 2.75 10.75 2.75H12.5C13.466 2.75 14.25 1.966 14.25 1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 5.25H8.25C6.317 5.25 4.75 6.817 4.75 8.75V13.75C4.75 15.683 6.317 17.25 8.25 17.25H9.75C11.683 17.25 13.25 15.683 13.25 13.75V8.75C13.25 6.817 11.683 5.25 9.75 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 8.75V11.25"
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

export default MouseCable;
