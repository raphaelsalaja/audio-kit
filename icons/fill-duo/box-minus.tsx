import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxMinus({
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
          d="M4.75 4.5C3.23069 4.5 2 5.73128 2 7.25V13.25C2 14.7687 3.23069 16 4.75 16H10.3789C10.1396 15.6425 10 15.2125 10 14.75C10 13.5074 11.0074 12.5 12.25 12.5H16V7.25C16 5.73128 14.7693 4.5 13.25 4.5H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.5 14.75C11.5 14.3358 11.8358 14 12.25 14H17.25C17.6642 14 18 14.3358 18 14.75C18 15.1642 17.6642 15.5 17.25 15.5H12.25C11.8358 15.5 11.5 15.1642 11.5 14.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.6445 5.89654C15.1723 5.06272 14.2771 4.5 13.25 4.5H4.75001C3.71997 4.5 2.82259 5.06594 2.35144 5.9037L3.77709 3.0288C4.24151 2.09309 5.19561 1.5 6.241 1.5H11.759C12.8044 1.5 13.7584 2.09285 14.2228 3.02856L15.6445 5.89654Z"
          fill={fill}
        />
        <path
          d="M9.00002 3.5C9.41423 3.5 9.75002 3.83579 9.75002 4.25V7.25C9.75002 7.66421 9.41423 8 9.00002 8C8.5858 8 8.25002 7.66421 8.25002 7.25V4.25C8.25002 3.83579 8.5858 3.5 9.00002 3.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BoxMinus;
