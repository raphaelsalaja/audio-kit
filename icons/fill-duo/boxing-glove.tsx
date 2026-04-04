import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxingGlove({
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
          d="M3.05018 6.27468C2.13243 6.72018 1.5 7.66099 1.5 8.75V10.25C1.5 12.3212 3.17879 14 5.25 14H12.25C14.3212 14 16 12.3212 16 10.25V5.25C16 3.17879 14.3212 1.5 12.25 1.5H6.75C4.67879 1.5 3 3.17879 3 5.25V5.75C3 5.92928 3.01727 6.10473 3.05018 6.27468Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5 13.9918C5.08263 13.9972 5.16599 14 5.25 14H12.25C12.8821 14 13.4776 13.8437 14 13.5675V15.25C14 16.2162 13.2162 17 12.25 17H6.75C5.78379 17 5 16.2162 5 15.25V13.9918Z"
          fill={fill}
        />
        <path
          d="M3 5.25C3 4.83579 3.33579 4.5 3.75 4.5H5.5C7.03679 4.5 8.32445 5.56665 8.66303 7H11.25C11.9404 7 12.5 6.44036 12.5 5.75C12.5 5.33579 12.8358 5 13.25 5C13.6642 5 14 5.33579 14 5.75C14 7.26878 12.7688 8.5 11.25 8.5H8.66303C8.32445 9.93335 7.03679 11 5.5 11C5.08579 11 4.75 10.6642 4.75 10.25C4.75 9.83579 5.08579 9.5 5.5 9.5C6.4665 9.5 7.25 8.7165 7.25 7.75C7.25 6.7835 6.4665 6 5.5 6H3.75C3.33579 6 3 5.66421 3 5.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BoxingGlove;
