import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenNib2({
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
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="2.044"
          x2="7.442"
          y1="15.956"
          y2="10.558"
        />
        <path
          d="M13.93,8.43l-1.88,5.309c-.117,.33-.397,.575-.74,.645l-8.583,1.776c-.528,.109-.996-.358-.886-.886L3.616,6.69c.071-.343,.316-.623,.645-.74l5.309-1.88"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25,1.75l-.293,.293c-.391,.391-.391,1.024,0,1.414l5.586,5.586c.391,.391,1.024,.391,1.414,0l.293-.293"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="7.973"
          cy="10.027"
          fill={secondaryfill}
          r=".75"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default PenNib2;
