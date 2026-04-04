import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InboxStack({
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
          d="M3 5.75C3 5.33579 3.33579 5 3.75 5H14.25C14.6642 5 15 5.33579 15 5.75C15 6.16421 14.6642 6.5 14.25 6.5H3.75C3.33579 6.5 3 6.16421 3 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5 2.75C5 2.33579 5.33579 2 5.75 2H12.25C12.6642 2 13 2.33579 13 2.75C13 3.16421 12.6642 3.5 12.25 3.5H5.75C5.33579 3.5 5 3.16421 5 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.2"
          fillRule="evenodd"
        />
        <path
          d="M1.05044 8.60858C1.11826 8.25535 1.42731 8 1.78699 8H6.25C6.66421 8 7 8.33579 7 8.75V9.75C7 9.88779 7.11221 10 7.25 10H10.75C10.8878 10 11 9.88779 11 9.75V8.75C11 8.33579 11.3358 8 11.75 8H16.213C16.5727 8 16.8817 8.25535 16.9495 8.60858C16.9818 8.77652 17 8.95094 17 9.129V12.25C17 13.768 15.7695 15 14.25 15H3.75C2.23054 15 1 13.768 1 12.25V9.129C1 8.9498 1.01823 8.77636 1.05044 8.60858Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default InboxStack;
