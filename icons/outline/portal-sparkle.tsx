import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PortalSparkle({
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
          d="M2.86 10.2761C2.1584 10.7759 1.75 11.3664 1.75 12C1.75 13.795 4.996 15.25 9 15.25C13.004 15.25 16.25 13.795 16.25 12C16.25 10.3456 13.4911 8.98442 9.92529 8.78052"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.657 7.006L6.395 6.58199L5.974 5.31002C5.837 4.89902 5.16199 4.89902 5.02499 5.31002L4.604 6.58199L3.342 7.006C3.138 7.074 3 7.26699 3 7.48299C3 7.69899 3.138 7.89211 3.342 7.96011L4.604 8.38412L5.02499 9.65615C5.09299 9.86115 5.285 10.0001 5.5 10.0001C5.715 10.0001 5.90601 9.86115 5.97501 9.65615L6.396 8.38412L7.658 7.96011C7.862 7.89211 8 7.69909 8 7.48299C8 7.26689 7.861 7.074 7.657 7.006Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M8.75 12.5C9.164 12.5 9.5 12.164 9.5 11.75C9.5 11.336 9.164 11 8.75 11C8.336 11 8 11.336 8 11.75C8 12.164 8.336 12.5 8.75 12.5Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M14.589 3.406L13.074 2.896L12.569 1.36999C12.405 0.876994 11.594 0.876994 11.43 1.36999L10.925 2.896L9.41 3.406C9.165 3.488 9 3.719 9 3.979C9 4.239 9.165 4.47 9.41 4.552L10.925 5.06201L11.43 6.58801C11.512 6.83501 11.742 7.00098 12 7.00098C12.258 7.00098 12.487 6.83501 12.57 6.58801L13.075 5.06201L14.59 4.552C14.835 4.47 15 4.239 15 3.979C15 3.719 14.834 3.489 14.589 3.406Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default PortalSparkle;
