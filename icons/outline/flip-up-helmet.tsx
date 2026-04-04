import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FlipUpHelmet({
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
          d="M15.3651 6.75H7.97137C7.28497 6.75 6.80256 7.4257 7.02566 8.0749L8.22818 11.5749C8.36698 11.9788 8.74686 12.25 9.17386 12.25H15.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.51 15.75H7.64999C4.66919 15.75 2.25 13.3308 2.25 10.35V9C2.25 5.2751 5.2751 2.25 9 2.25C12.7249 2.25 15.75 5.2751 15.75 9V12.51C15.75 14.2985 14.2985 15.75 12.51 15.75Z"
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

export default FlipUpHelmet;
