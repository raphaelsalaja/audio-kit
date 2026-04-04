import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SocialDistancing({
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
          d="M5.75 11.75L3.75 13.75L5.75 15.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 11.75L14.25 13.75L12.25 15.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 13.75H14.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 5.75C5.9665 5.75 6.75 4.9665 6.75 4C6.75 3.0335 5.9665 2.25 5 2.25C4.0335 2.25 3.25 3.0335 3.25 4C3.25 4.9665 4.0335 5.75 5 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.5542 9.357C6.9156 8.6757 6.0075 8.25 5 8.25C3.067 8.25 1.5 9.817 1.5 11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 4C14.75 3.0335 13.9665 2.25 13 2.25C12.0335 2.25 11.25 3.0335 11.25 4C11.25 4.9665 12.0335 5.75 13 5.75C13.9665 5.75 14.75 4.9665 14.75 4Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.5 11.75C16.5 9.817 14.933 8.25 13 8.25C11.9925 8.25 11.0844 8.6757 10.4458 9.357"
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

export default SocialDistancing;
