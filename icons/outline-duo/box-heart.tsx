import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxHeart({
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
          d="M4.75 5.25C3.64543 5.25 2.75 6.14543 2.75 7.25V13.25C2.75 14.3546 3.64543 15.25 4.75 15.25C5.16417 15.25 8.90886 15.3642 8.78447 14.9968C8.70404 14.7592 8.63778 14.5102 8.58942 14.25C8.53149 13.9383 8.49922 13.6104 8.499 13.2665C8.49397 11.0225 10.3254 9.26338 12.5123 9.25004C12.527 9.24995 12.5417 9.25001 12.5564 9.25022C13.0551 9.25697 13.5432 9.35499 13.9979 9.53428C14.3942 9.37802 14.8181 9.28349 15.25 9.25732V7.25C15.25 6.14543 14.3546 5.25 13.25 5.25H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 2.25V8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3 6.284L4.449 3.362C4.787 2.681 5.481 2.25 6.241 2.25H11.759C12.519 2.25 13.213 2.681 13.551 3.362L15 6.285"
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
          d="M15.25 8.5166V7.25C15.25 6.146 14.355 5.25 13.25 5.25H4.75C3.645 5.25 2.75 6.146 2.75 7.25V13.25C2.75 14.354 3.645 15.25 4.75 15.25H8.089"
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

export default BoxHeart;
