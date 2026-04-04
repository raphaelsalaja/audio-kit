import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OpenCircleBolt({
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
          d="M9.49401 1.851L4.81201 9.725C4.67401 9.956 4.84101 10.249 5.11001 10.249H9.00001L8.14501 16.019C8.11401 16.231 8.39701 16.331 8.50601 16.147L13.188 8.273C13.326 8.042 13.159 7.749 12.89 7.749H9.00001L9.85501 1.979C9.88601 1.767 9.60301 1.667 9.49401 1.851Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.765 2.803C14.854 4.075 16.25 6.375 16.25 9C16.25 11.734 14.737 14.114 12.503 15.349"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.235 15.197C3.146 13.925 1.75 11.625 1.75 9C1.75 6.266 3.263 3.886 5.497 2.651"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.49401 1.851L4.81201 9.725C4.67401 9.956 4.84101 10.249 5.11001 10.249H9.00001L8.14501 16.019C8.11401 16.231 8.39701 16.331 8.50601 16.147L13.188 8.273C13.326 8.042 13.159 7.749 12.89 7.749H9.00001L9.85501 1.979C9.88601 1.767 9.60301 1.667 9.49401 1.851Z"
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

export default OpenCircleBolt;
