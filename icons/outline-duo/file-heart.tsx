import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileHeart({
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
          d="M10.336 1.75C10.4801 1.75 10.6212 1.78103 10.75 1.83956V5.24999C10.75 5.80199 11.198 6.24999 11.75 6.24999H15.1603C15.2189 6.37883 15.25 6.51978 15.25 6.664V9.25732C14.8181 9.28349 14.3964 9.37802 14.0001 9.53428C13.5321 9.3497 13.0256 9.2469 12.5123 9.25004C10.3254 9.26338 8.49394 11.0225 8.49897 13.2665C8.49961 14.2733 8.77494 15.143 9.16464 15.8706C9.18344 15.9057 9.17465 15.9492 9.15168 15.9941C9.04932 16.1943 8.79795 16.25 8.57316 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V3.75C2.75 2.645 3.645 1.75 4.75 1.75H10.336Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M5.75 6.75H7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 9.75H9.28548"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.16 6.24999H11.75C11.198 6.24999 10.75 5.80199 10.75 5.24999V1.85199"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 8.5166V6.6641C15.25 6.399 15.145 6.1441 14.957 5.9571L11.043 2.043C10.855 1.855 10.601 1.75 10.336 1.75H4.75C3.645 1.75 2.75 2.646 2.75 3.75V14.25C2.75 15.354 3.645 16.25 4.75 16.25H8.5341"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.781 17.197C13.919 17.268 14.08 17.268 14.218 17.197C14.947 16.823 17.249 15.467 17.249 13.263C17.253 12.295 16.458 11.506 15.472 11.5C14.879 11.507 14.328 11.801 13.999 12.286C13.67 11.802 13.118 11.508 12.526 11.5C11.541 11.506 10.746 12.294 10.749 13.263C10.749 15.468 13.053 16.823 13.781 17.197Z"
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

export default FileHeart;
