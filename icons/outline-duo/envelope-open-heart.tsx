import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeOpenHeart({
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
          d="M8.78004 7.19701C8.91804 7.26801 9.08003 7.26801 9.21803 7.19701C9.94703 6.82301 12.249 5.467 12.249 3.263C12.253 2.295 11.458 1.506 10.472 1.5C9.87902 1.507 9.32803 1.801 8.99903 2.286C8.67003 1.802 8.11804 1.508 7.52604 1.5C6.54104 1.506 5.74603 2.294 5.74903 3.263C5.74903 5.468 8.05204 6.82301 8.78004 7.19701Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.249 7.25L16.25 13.25C16.25 14.355 15.355 15.25 14.25 15.25H3.75C2.645 15.25 1.75 14.355 1.75 13.25V7.25L8.565 10.54C8.84 10.673 9.16 10.673 9.434 10.54L16.249 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.78004 7.19701C8.91804 7.26801 9.08003 7.26801 9.21803 7.19701C9.94703 6.82301 12.249 5.467 12.249 3.263C12.253 2.295 11.458 1.506 10.472 1.5C9.87902 1.507 9.32803 1.801 8.99903 2.286C8.67003 1.802 8.11804 1.508 7.52604 1.5C6.54104 1.506 5.74603 2.294 5.74903 3.263C5.74903 5.468 8.05204 6.82301 8.78004 7.19701Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.8794 5.3515L15.216 5.537C15.854 5.889 16.25 6.521 16.25 7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 7.25C1.75 6.522 2.146 5.889 2.784 5.537L3.12039 5.35159"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.249 7.25L16.25 13.25C16.25 14.355 15.355 15.25 14.25 15.25H3.75C2.645 15.25 1.75 14.355 1.75 13.25V7.25001L8.565 10.54C8.84 10.673 9.15999 10.673 9.43399 10.54L16.249 7.25Z"
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

export default EnvelopeOpenHeart;
