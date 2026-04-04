import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardRefresh({
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
          d="M1 5.75C1 4.23079 2.23079 3 3.75 3H14.25C15.7692 3 17 4.23079 17 5.75V8.01373C16.488 8.07033 16.0278 8.29872 15.6783 8.63999C15.3002 8.54851 14.9055 8.5 14.5 8.5C11.7384 8.5 9.5 10.7384 9.5 13.5C9.5 14.0226 9.58016 14.5265 9.72886 15H3.75C2.23079 15 1 13.7692 1 12.25V5.75Z"
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
          d="M18 10.25C18 9.83579 17.6642 9.5 17.25 9.5C16.8358 9.5 16.5 9.83579 16.5 10.25V10.6276C15.9334 10.2322 15.2442 10 14.5 10C12.5668 10 11 11.5668 11 13.5C11 15.4332 12.5668 17 14.5 17C15.503 17 16.4088 16.5765 17.0455 15.9017C17.3298 15.6004 17.316 15.1257 17.0147 14.8415C16.7134 14.5572 16.2387 14.571 15.9545 14.8723C15.5892 15.2595 15.073 15.5 14.5 15.5C13.3952 15.5 12.5 14.6048 12.5 13.5C12.5 12.3952 13.3952 11.5 14.5 11.5C15.0065 11.5 15.4697 11.6885 15.8228 12H14.75C14.3358 12 14 12.3358 14 12.75C14 13.1642 14.3358 13.5 14.75 13.5H17.25C17.6642 13.5 18 13.1642 18 12.75V10.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CreditCardRefresh;
