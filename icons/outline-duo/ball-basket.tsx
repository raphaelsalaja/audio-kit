import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallBasket({
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
          d="M4.27521 7.66442C3.75427 7.3287 3.60725 6.6761 3.44903 5.97378L3.44903 5.97377C3.35967 5.57715 3.26675 5.16466 3.10088 4.78443C2.25051 5.9723 1.75 7.4277 1.75 9C1.75 10.5898 2.2617 12.0601 3.12938 13.2551C4.49531 12.364 6.35687 12.6099 6.89728 12.8029C6.95985 12.8252 7.06964 12.8688 7.21837 12.9279C8.37328 13.3864 11.8762 14.7774 13.8485 14.3903C15.3229 13.0632 16.25 11.1399 16.25 9C16.25 6.99571 15.4367 5.18138 14.1221 3.86903C11.7441 4.10774 10.3197 5.32739 9.1162 6.35794L8.94844 6.5014C7.51052 7.72786 5.22677 8.27765 4.27521 7.66442Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M8.65202 1.759C8.15802 2.196 5.25602 4.85 5.15602 9.218C5.07002 12.977 7.11501 15.509 7.63901 16.121"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.77002 9.532C2.96102 9.943 4.39502 10.314 6.03802 10.499C10.517 11.003 14.173 9.857 16.25 9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.14697 13.277C3.14697 13.277 4.29397 12.609 5.66697 12.609C7.86997 12.609 10.333 14.896 13.905 14.336"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.14697 4.722C3.84397 6.25 3.29197 7.924 5.27097 7.924C9.33397 7.924 9.99997 3.937 14.189 3.937"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
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

export default BallBasket;
