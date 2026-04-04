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
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.6455 15H9.49939C9.08518 15 8.74939 14.6642 8.74939 14.25C8.74939 13.8358 9.08518 13.5 9.49939 13.5H12.6455C12.9423 12.7672 13.661 12.25 14.5 12.25C15.6042 12.25 16.5 13.1458 16.5 14.25C16.5 15.3542 15.6042 16.25 14.5 16.25C13.661 16.25 12.9423 15.7328 12.6455 15Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default EaseIn;
