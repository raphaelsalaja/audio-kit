import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SlidersVertical({
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
          d="M12.75 13.25C13.9926 13.25 15 12.2426 15 11C15 9.75736 13.9926 8.75 12.75 8.75C11.5074 8.75 10.5 9.75736 10.5 11C10.5 12.2426 11.5074 13.25 12.75 13.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25 9.25C6.49264 9.25 7.5 8.24264 7.5 7C7.5 5.75736 6.49264 4.75 5.25 4.75C4.00736 4.75 3 5.75736 3 7C3 8.24264 4.00736 9.25 5.25 9.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.75 13.25V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 1.75V8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 13.25C13.9926 13.25 15 12.2426 15 11C15 9.75736 13.9926 8.75 12.75 8.75C11.5074 8.75 10.5 9.75736 10.5 11C10.5 12.2426 11.5074 13.25 12.75 13.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 4.75V1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 16.25V9.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 9.25C6.49264 9.25 7.5 8.24264 7.5 7C7.5 5.75736 6.49264 4.75 5.25 4.75C4.00736 4.75 3 5.75736 3 7C3 8.24264 4.00736 9.25 5.25 9.25Z"
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

export default SlidersVertical;
