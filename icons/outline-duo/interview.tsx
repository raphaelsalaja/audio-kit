import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Interview({
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
          d="M10.75 1.25H7.25C6.423 1.25 5.75 1.923 5.75 2.75V4.25C5.75 5.077 6.423 5.75 7.25 5.75H7.75V7.75L9.97701 5.75H10.75C11.577 5.75 12.25 5.077 12.25 4.25V2.75C12.25 1.923 11.577 1.25 10.75 1.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 1.25H7.25C6.423 1.25 5.75 1.923 5.75 2.75V4.25C5.75 5.077 6.423 5.75 7.25 5.75H7.75V7.75L9.97701 5.75H10.75C11.577 5.75 12.25 5.077 12.25 4.25V2.75C12.25 1.923 11.577 1.25 10.75 1.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75005 16.25V14.75H3.10304C3.96804 14.75 4.68704 14.082 4.74904 13.218L4.84105 11.944L6.08205 11.448L4.84404 9.797C4.84404 7.542 3.33605 5.63801 1.27405 5.04001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.5 10C2.914 10 3.25 9.664 3.25 9.25C3.25 8.836 2.914 8.5 2.5 8.5C2.086 8.5 1.75 8.836 1.75 9.25C1.75 9.664 2.086 10 2.5 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.25 16.25V14.75H14.897C14.032 14.75 13.313 14.082 13.251 13.218L13.159 11.944L11.918 11.448L13.156 9.797C13.156 7.542 14.664 5.63801 16.726 5.04001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.5 10C15.914 10 16.25 9.664 16.25 9.25C16.25 8.836 15.914 8.5 15.5 8.5C15.086 8.5 14.75 8.836 14.75 9.25C14.75 9.664 15.086 10 15.5 10Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Interview;
