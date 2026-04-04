import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Plug2({
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
          d="M5.10397 8.714L9.28597 12.896C9.67697 13.287 9.67697 13.92 9.28597 14.31L9.00597 14.59C7.46097 16.135 4.95497 16.135 3.40997 14.59C1.86497 13.045 1.86497 10.539 3.40997 8.994L3.68997 8.714C4.08097 8.323 4.71397 8.323 5.10397 8.714Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.10397 8.714L9.28597 12.896C9.67697 13.287 9.67697 13.92 9.28597 14.31L9.00597 14.59C7.46097 16.135 4.95497 16.135 3.40997 14.59C1.86497 13.045 1.86497 10.539 3.40997 8.994L3.68997 8.714C4.08097 8.323 4.71397 8.323 5.10397 8.714Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 16.25L3.409 14.591"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.94501 9.555L7.50001 8"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.44501 12.055L10 10.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.71403 5.104L12.896 9.286C13.287 9.677 13.92 9.677 14.31 9.286L14.59 9.006C16.135 7.461 16.135 4.955 14.59 3.41C13.045 1.865 10.539 1.865 8.99403 3.41L8.71403 3.69C8.32303 4.081 8.32303 4.714 8.71403 5.104Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 1.75L14.591 3.409"
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

export default Plug2;
