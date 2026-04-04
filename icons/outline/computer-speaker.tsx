import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ComputerSpeaker({
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
          d="M12 7C12.552 7 13 6.5523 13 6C13 5.4477 12.552 5 12 5C11.448 5 11 5.4477 11 6C11 6.5523 11.448 7 12 7Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4.75 10.75H2.75C2.198 10.75 1.75 10.302 1.75 9.75V5.25C1.75 4.698 2.198 4.25 2.75 4.25H4.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 2.75H9.25C8.422 2.75 7.75 3.4216 7.75 4.25V13.75C7.75 14.5784 8.422 15.25 9.25 15.25H14.75C15.578 15.25 16.25 14.5784 16.25 13.75V4.25C16.25 3.4216 15.578 2.75 14.75 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 13.2766C3.5037 13.41 2.75 14 2.75 14"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 12.25C12.966 12.25 13.75 11.4665 13.75 10.5C13.75 9.5335 12.966 8.75 12 8.75C11.034 8.75 10.25 9.5335 10.25 10.5C10.25 11.4665 11.034 12.25 12 12.25Z"
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

export default ComputerSpeaker;
