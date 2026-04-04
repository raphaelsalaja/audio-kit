import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EaseIn({
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
          d="M13.976 1.53485C14.371 1.65968 14.59 2.08104 14.4651 2.476C13.5265 5.44591 11.9157 8.45396 9.84553 10.778C7.78181 13.0947 5.19387 14.8032 2.30046 14.9983C1.88718 15.0262 1.52956 14.7137 1.5017 14.3004C1.47383 13.8872 1.78627 13.5296 2.19954 13.5017C4.55613 13.3428 6.80719 11.9337 8.72547 9.78025C10.6373 7.63402 12.1515 4.81906 13.0349 2.02397C13.1597 1.62901 13.5811 1.41003 13.976 1.53485Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.74939 14.25C8.74939 13.8358 9.08518 13.5 9.49939 13.5L12.1136 13.5C12.5278 13.5 12.8636 13.8358 12.8636 14.25C12.8636 14.6642 12.5278 15 12.1136 15H9.49939C9.08518 15 8.74939 14.6642 8.74939 14.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.5 14.25C11.5 12.8698 12.6198 11.75 14 11.75C15.3802 11.75 16.5 12.8698 16.5 14.25C16.5 15.6302 15.3802 16.75 14 16.75C12.6198 16.75 11.5 15.6302 11.5 14.25ZM14 13.25C13.4482 13.25 13 13.6982 13 14.25C13 14.8018 13.4482 15.25 14 15.25C14.5518 15.25 15 14.8018 15 14.25C15 13.6982 14.5518 13.25 14 13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default EaseIn;
