import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagnifierStar({
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
          d="M7.75 2.25C10.7875 2.25 13.25 4.7125 13.25 7.75C13.25 10.2333 10.7949 11.7255 10.9728 11.321C11.076 11.0863 11.2003 10.9101 11.085 10.541C10.8388 9.75363 10.2079 9.34771 9.48242 9.18848L8.0752 8.97754L7.44141 7.70605C7.06641 7.06559 6.3986 6.65105 5.65918 6.59863L5.5 6.59277C4.75204 6.59289 4.05871 6.96413 3.64258 7.57227L2.84906 8.79408C2.74761 8.37644 2.25 8.19883 2.25 7.75C2.25 4.7125 4.7125 2.25 7.75 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.5 8.84299L6.582 11.034L9 11.386L7.25 13.091L7.66299 15.5L5.5 14.363L3.33701 15.5L3.75 13.091L2 11.386L4.418 11.034L5.5 8.84299Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.75 15.75L11.6386 11.6386"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.6387 11.6394C12.6342 10.6441 13.25 9.2689 13.25 7.75C13.25 4.7125 10.7875 2.25 7.75 2.25C4.7125 2.25 2.25 4.7125 2.25 7.75C2.25 7.9398 2.2596 8.1274 2.2784 8.3123"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.5 8.84299L6.582 11.034L9 11.386L7.25 13.091L7.66299 15.5L5.5 14.363L3.33701 15.5L3.75 13.091L2 11.386L4.418 11.034L5.5 8.84299Z"
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

export default MagnifierStar;
