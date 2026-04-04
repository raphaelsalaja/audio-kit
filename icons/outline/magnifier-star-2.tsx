import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagnifierStar2({
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
          d="M15.75 15.75L11.6386 11.6386"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 13.25C10.7875 13.25 13.25 10.7875 13.25 7.75C13.25 4.7125 10.7875 2.25 7.75 2.25C4.7125 2.25 2.25 4.7125 2.25 7.75C2.25 10.7875 4.7125 13.25 7.75 13.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.6114 6.8197C10.5652 6.6768 10.4422 6.5728 10.293 6.5517L8.78093 6.3321L8.10314 4.9608C7.97174 4.6918 7.52834 4.6918 7.39704 4.9608L6.71923 6.3321L5.20714 6.5517C5.05794 6.5738 4.93494 6.6778 4.88874 6.8197C4.84254 6.9616 4.88033 7.1192 4.98853 7.2232L6.08353 8.2908L5.82613 9.7977C5.80093 9.9459 5.86083 10.0951 5.98163 10.1834C6.10243 10.2717 6.26434 10.2832 6.39774 10.2139L7.75014 9.5025L9.10253 10.2139C9.16033 10.2444 9.22334 10.2591 9.28644 10.2591C9.36844 10.2591 9.44933 10.2339 9.51863 10.1834C9.63953 10.0951 9.70044 9.9459 9.67414 9.7977L9.41674 8.2908L10.5117 7.2232C10.6199 7.1181 10.6577 6.9615 10.6114 6.8197Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default MagnifierStar2;
