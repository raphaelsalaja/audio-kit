import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneDots({
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
          d="M13 5C12.449 5 12 4.551 12 4C12 3.449 12.449 3 13 3C13.551 3 14 3.449 14 4C14 4.551 13.551 5 13 5Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M10 5C9.449 5 9 4.551 9 4C9 3.449 9.449 3 10 3C10.551 3 11 3.449 11 4C11 4.551 10.551 5 10 5Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M16 5C15.449 5 15 4.551 15 4C15 3.449 15.449 3 16 3C16.551 3 17 3.449 17 4C17 4.551 16.551 5 16 5Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M5.83181 12.1683C7.98741 14.3238 10.8263 15.7957 14.0055 16.2408C14.4976 16.3097 14.9585 15.9785 15.0832 15.4975L15.7127 13.0707C15.8355 12.5972 15.5977 12.1043 15.1506 11.9057L12.2815 10.6314C11.8602 10.4443 11.3656 10.5694 11.084 10.9343L10.205 12.0731C9.32141 11.554 8.51161 10.9262 7.79281 10.2073C7.07381 9.48851 6.44601 8.67871 5.92701 7.79511L7.06581 6.91611C7.43071 6.63441 7.55581 6.1399 7.36871 5.7186L6.09441 2.84951C5.89581 2.40241 5.4029 2.1646 4.9294 2.2874L2.50261 2.9169C2.02171 3.0417 1.69041 3.5025 1.75931 3.9946C2.20441 7.1737 3.67621 10.0127 5.83181 12.1683Z"
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

export default PhoneDots;
