import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CursorRipple({
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
          d="M8.34503 8.02801L15.659 10.538C15.881 10.614 15.885 10.926 15.666 11.008L12.387 12.241C12.32 12.266 12.266 12.32 12.241 12.387L11.008 15.666C10.925 15.885 10.614 15.881 10.538 15.659L8.02804 8.345C7.96004 8.148 8.14803 7.96101 8.34503 8.02801Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.2872 5.1832C8.8389 4.9094 8.3144 4.75 7.75 4.75C6.093 4.75 4.75 6.093 4.75 7.75C4.75 8.3096 4.90632 8.8293 5.17542 9.2746"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.6503 6.67621C13.1442 3.87511 10.6965 1.75 7.75 1.75C4.436 1.75 1.75 4.436 1.75 7.75C1.75 10.6969 3.8756 13.1449 6.6774 13.6514"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.34503 8.02801L15.659 10.538C15.881 10.614 15.885 10.926 15.666 11.008L12.387 12.241C12.32 12.266 12.266 12.32 12.241 12.387L11.008 15.666C10.925 15.885 10.614 15.881 10.538 15.659L8.02804 8.345C7.96004 8.148 8.14803 7.96101 8.34503 8.02801Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.2991 12.2991L15.743 15.743"
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

export default CursorRipple;
