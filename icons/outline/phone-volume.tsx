import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneVolume({
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
          d="M10.25 1.75C13.564 1.75 16.25 4.436 16.25 7.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 4.75C11.907 4.75 13.25 6.093 13.25 7.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.83181 12.1683C7.98741 14.3238 10.8263 15.7957 14.0055 16.2408C14.4976 16.3097 14.9585 15.9785 15.0832 15.4975L15.7127 13.0707C15.8355 12.5972 15.5977 12.1043 15.1506 11.9057L12.2815 10.6314C11.8602 10.4443 11.3656 10.5694 11.084 10.9343L10.205 12.0731C9.32141 11.554 8.51161 10.9262 7.79281 10.2073C7.07381 9.48851 6.44601 8.67871 5.92701 7.79511L7.06581 6.91611C7.43071 6.63441 7.55581 6.1399 7.36871 5.7186L6.09441 2.84951C5.89581 2.40241 5.40291 2.1646 4.92941 2.2874L2.50261 2.9169C2.02171 3.0417 1.69041 3.5025 1.75931 3.9946C2.20441 7.1737 3.67621 10.0127 5.83181 12.1683Z"
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

export default PhoneVolume;
