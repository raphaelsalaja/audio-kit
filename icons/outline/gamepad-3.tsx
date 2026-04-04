import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gamepad3({
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
          d="M10.75 8C11.164 8 11.5 7.6642 11.5 7.25C11.5 6.8358 11.164 6.5 10.75 6.5C10.336 6.5 10 6.8358 10 7.25C10 7.6642 10.336 8 10.75 8Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M13.75 8C14.164 8 14.5 7.6642 14.5 7.25C14.5 6.8358 14.164 6.5 13.75 6.5C13.336 6.5 13 6.8358 13 7.25C13 7.6642 13.336 8 13.75 8Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12.25 6.75C12.664 6.75 13 6.4142 13 6C13 5.5858 12.664 5.25 12.25 5.25C11.836 5.25 11.5 5.5858 11.5 6C11.5 6.4142 11.836 6.75 12.25 6.75Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12.25 9.25C12.664 9.25 13 8.9142 13 8.5C13 8.0858 12.664 7.75 12.25 7.75C11.836 7.75 11.5 8.0858 11.5 8.5C11.5 8.9142 11.836 9.25 12.25 9.25Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M5.75 6V8.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 7.25H4.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.22998 11.75H11.769"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 13C6.578 13 7.25 12.3284 7.25 11.5C7.25 10.6716 6.578 10 5.75 10C4.922 10 4.25 10.6716 4.25 11.5C4.25 12.3284 4.922 13 5.75 13Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.25 13C13.078 13 13.75 12.3284 13.75 11.5C13.75 10.6716 13.078 10 12.25 10C11.422 10 10.75 10.6716 10.75 11.5C10.75 12.3284 11.422 13 12.25 13Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.6761 14.0001C14.9435 14.1794 15.2716 14.274 15.625 14.245C16.427 14.18 17.006 13.44 17 12.636C16.992 11.451 16.832 10.009 16.542 8.375C15.871 4.588 14.424 2.75 12.5 2.75C11.615 2.75 10.828 3.14 10.279 3.75H7.72102C7.17202 3.14 6.38503 2.75 5.50003 2.75C3.57603 2.75 2.12902 4.588 1.45802 8.375C1.16902 10.009 1.00803 11.45 1.00003 12.636C0.995032 13.44 1.57403 14.18 2.37503 14.245C2.72813 14.274 3.05593 14.1792 3.32323 14.0001"
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

export default Gamepad3;
