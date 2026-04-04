import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCard({
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
          d="M3.75 3C2.23079 3 1 4.23079 1 5.75V12.25C1 13.7692 2.23079 15 3.75 15H14.25C15.7692 15 17 13.7692 17 12.25V5.75C17 4.23079 15.7692 3 14.25 3H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path d="M17 6.5H1V8H17V6.5Z" fill={fill} />
        <path
          d="M3.5 11.25C3.5 10.8358 3.83579 10.5 4.25 10.5H7.25C7.66421 10.5 8 10.8358 8 11.25C8 11.6642 7.66421 12 7.25 12H4.25C3.83579 12 3.5 11.6642 3.5 11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12 11.25C12 10.8358 12.3358 10.5 12.75 10.5H13.75C14.1642 10.5 14.5 10.8358 14.5 11.25C14.5 11.6642 14.1642 12 13.75 12H12.75C12.3358 12 12 11.6642 12 11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CreditCard;
