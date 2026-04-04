import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Discount({
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
          d="M15.718 8.293L14.25 6.825V4.75C14.25 4.198 13.802 3.75 13.25 3.75H11.175L9.70702 2.282C9.31602 1.892 8.68302 1.892 8.29302 2.282L6.82502 3.75H4.75002C4.19802 3.75 3.75002 4.198 3.75002 4.75V6.825L2.28202 8.293C1.89102 8.683 1.89102 9.317 2.28202 9.707L3.75002 11.175V13.25C3.75002 13.802 4.19802 14.25 4.75002 14.25H6.82502L8.29302 15.718C8.68402 16.108 9.31702 16.108 9.70702 15.718L11.175 14.25H13.25C13.802 14.25 14.25 13.802 14.25 13.25V11.175L15.718 9.707C16.109 9.317 16.109 8.683 15.718 8.293Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.718 8.293L14.25 6.825V4.75C14.25 4.198 13.802 3.75 13.25 3.75H11.175L9.70702 2.282C9.31602 1.892 8.68302 1.892 8.29302 2.282L6.82502 3.75H4.75002C4.19802 3.75 3.75002 4.198 3.75002 4.75V6.825L2.28202 8.293C1.89102 8.683 1.89102 9.317 2.28202 9.707L3.75002 11.175V13.25C3.75002 13.802 4.19802 14.25 4.75002 14.25H6.82502L8.29302 15.718C8.68402 16.108 9.31702 16.108 9.70702 15.718L11.175 14.25H13.25C13.802 14.25 14.25 13.802 14.25 13.25V11.175L15.718 9.707C16.109 9.317 16.109 8.683 15.718 8.293Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 8C7.55228 8 8 7.55228 8 7C8 6.44772 7.55228 6 7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11 12C11.5523 12 12 11.5523 12 11C12 10.4477 11.5523 10 11 10C10.4477 10 10 10.4477 10 11C10 11.5523 10.4477 12 11 12Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.75 11.25L11.25 6.75"
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

export default Discount;
