import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaperPlane2({
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
          d="M15.947 2.73L11.793 15.653C11.651 16.096 11.05 16.162 10.816 15.759L7.65698 10.343L2.24098 7.184C1.83898 6.949 1.90398 6.349 2.34698 6.207L15.27 2.053C15.687 1.919 16.081 2.313 15.947 2.73Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.813 2.187L7.65701 10.343"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.947 2.73L11.793 15.653C11.651 16.096 11.05 16.162 10.816 15.759L7.65698 10.343L2.24098 7.184C1.83898 6.949 1.90398 6.349 2.34698 6.207L15.27 2.053C15.687 1.919 16.081 2.313 15.947 2.73Z"
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

export default PaperPlane2;
