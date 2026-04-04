import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCards({
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
          d="M6.25 6C5.00726 6 4 7.00792 4 8.25V13.75C4 14.9921 5.00726 16 6.25 16H14.75C15.9927 16 17 14.9921 17 13.75V8.25C17 7.00792 15.9927 6 14.75 6H6.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path d="M17 9.5H4V11H17V9.5Z" fill={fill} />
        <path
          d="M0.503906 4.25C0.503906 3.00792 1.51116 2 2.75391 2H11.2539C12.4966 2 13.5039 3.00792 13.5039 4.25V6H6.25C5.00726 6 4 7.00792 4 8.25V12H2.75391C1.51116 12 0.503906 10.9921 0.503906 9.75V4.25Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
      </g>
    </svg>
  );
}

export default CreditCards;
