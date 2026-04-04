import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MarketingTarget({
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
          d="M9.21701 9.62202L11.233 15.403C11.332 15.686 11.731 15.688 11.832 15.406L12.727 12.919C12.759 12.83 12.829 12.76 12.918 12.728L15.405 11.833C15.687 11.732 15.685 11.332 15.402 11.234L9.62101 9.218C9.37001 9.13 9.12901 9.372 9.21601 9.623L9.21701 9.62202Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9.21701 9.62202L11.233 15.403C11.332 15.686 11.731 15.688 11.832 15.406L12.727 12.919C12.759 12.83 12.829 12.76 12.918 12.728L15.405 11.833C15.687 11.732 15.685 11.332 15.402 11.234L9.62101 9.218C9.37001 9.13 9.12901 9.372 9.21601 9.623L9.21701 9.62202Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.778 12.778L16.25 16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.8046 7.15091C12.1189 5.73271 10.6812 4.75 9 4.75C6.653 4.75 4.75 6.6531 4.75 9C4.75 10.6804 5.7319 12.1169 7.149 12.8027"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.2081 8.33789C15.8729 4.64529 12.7797 1.75 9 1.75C4.996 1.75 1.75 4.9961 1.75 9C1.75 12.7788 4.6448 15.8716 8.3364 16.208"
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

export default MarketingTarget;
