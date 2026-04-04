import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FlipFlops({
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
          d="M7.749 12.749C7.749 13.853 6.855 14.749 5.75 14.75C4.893 14.75 4.131 14.204 3.855 13.393C3.366 12.113 3.474 11.319 2.916 9.496C2.406 7.829 1.75 6.822 1.75 5.18C1.75 3.48 3.471 1.914 5.283 1.762C6.722 1.642 7.75 2.446 7.75 4.838C7.75 6.465 7.416 6.548 7.416 8.638C7.416 10.65 7.768 11.2 7.75 12.75L7.749 12.749Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.584 10.137C10.584 8.04801 10.25 7.96401 10.25 6.33701C10.25 3.94501 11.278 3.14001 12.717 3.26101C14.528 3.41301 16.25 4.97901 16.25 6.67901C16.25 8.32101 15.594 9.32801 15.084 10.995C14.526 12.818 14.634 13.612 14.145 14.892C13.87 15.704 13.107 16.25 12.25 16.249C11.146 16.249 10.251 15.353 10.251 14.248C10.233 12.698 10.585 12.148 10.585 10.136L10.584 10.137Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.749 12.749C7.749 13.853 6.855 14.749 5.75 14.75C4.893 14.75 4.131 14.204 3.855 13.393C3.366 12.113 3.474 11.319 2.916 9.496C2.406 7.829 1.75 6.822 1.75 5.18C1.75 3.48 3.471 1.914 5.283 1.762C6.722 1.642 7.75 2.446 7.75 4.838C7.75 6.465 7.416 6.548 7.416 8.638C7.416 10.65 7.768 11.2 7.75 12.75L7.749 12.749Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.00001 6.282L4.85901 4.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75399 9C2.69199 7.556 3.75499 6.374 4.99999 6.282C5.99999 6.209 6.99999 6.847 7.43299 7.877"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.584 10.137C10.584 8.04801 10.25 7.96401 10.25 6.33701C10.25 3.94501 11.278 3.14001 12.717 3.26101C14.528 3.41301 16.25 4.97901 16.25 6.67901C16.25 8.32101 15.594 9.32801 15.084 10.995C14.526 12.818 14.634 13.612 14.145 14.892C13.87 15.704 13.107 16.25 12.25 16.249C11.146 16.249 10.251 15.353 10.251 14.248C10.233 12.698 10.585 12.148 10.585 10.136L10.584 10.137Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 7.782L13.141 6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.246 10.5C15.308 9.056 14.245 7.874 13 7.782C12 7.709 11 8.347 10.567 9.377"
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

export default FlipFlops;
