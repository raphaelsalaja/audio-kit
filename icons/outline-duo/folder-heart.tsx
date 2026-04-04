import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderHeart({
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
          d="M13.781 17.197C13.919 17.268 14.08 17.268 14.218 17.197C14.947 16.823 17.249 15.467 17.249 13.263C17.253 12.295 16.458 11.506 15.472 11.5C14.879 11.507 14.328 11.801 13.999 12.286C13.67 11.802 13.118 11.508 12.526 11.5C11.541 11.506 10.746 12.294 10.749 13.263C10.749 15.468 13.052 16.823 13.78 17.197H13.781Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.75 6.75H4.25C3.145 6.75 2.25 7.645 2.25 8.75V13.25C2.25 14.355 3.145 15.25 4.25 15.25H8.26853C8.44075 15.25 8.62284 15.2192 8.74389 15.0967C8.77619 15.064 8.7964 15.0319 8.7879 15.0069C8.70592 14.7663 8.63847 14.5139 8.58942 14.25C8.53149 13.9383 8.49922 13.6104 8.499 13.2665C8.49397 11.0225 10.3254 9.26338 12.5123 9.25004C12.527 9.24995 12.5417 9.25001 12.5564 9.25022C13.0551 9.25697 13.5432 9.35499 13.9979 9.53428C14.4526 9.35499 14.9429 9.25697 15.4416 9.25022C15.545 9.24874 15.648 9.25297 15.75 9.2602V8.75C15.75 7.645 14.855 6.75 13.75 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.25 8.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.201C6.808 2.75 7.381 3.025 7.761 3.498L8.364 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.781 17.197C13.919 17.268 14.08 17.268 14.218 17.197C14.947 16.823 17.249 15.467 17.249 13.263C17.253 12.295 16.458 11.506 15.472 11.5C14.879 11.507 14.328 11.801 13.999 12.286C13.67 11.802 13.118 11.508 12.526 11.5C11.541 11.506 10.746 12.294 10.749 13.263C10.749 15.468 13.052 16.823 13.78 17.197H13.781Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 8.75C15.75 7.646 14.855 6.75 13.75 6.75H4.25C3.145 6.75 2.25 7.646 2.25 8.75V13.25C2.25 14.354 3.145 15.25 4.25 15.25H8.0854"
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

export default FolderHeart;
