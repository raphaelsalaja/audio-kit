import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneCallForward({
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
          d="M5.83179 12.1683C7.98739 14.3238 10.8263 15.7957 14.0055 16.2408C14.4976 16.3097 14.9585 15.9785 15.0832 15.4975L15.7127 13.0707C15.8355 12.5972 15.5977 12.1043 15.1506 11.9057L12.2815 10.6314C11.8602 10.4443 11.3656 10.5694 11.084 10.9343L10.205 12.0731C9.32139 11.554 8.51159 10.9262 7.79279 10.2073C7.07379 9.4885 6.446 8.6787 5.927 7.7951L7.0658 6.9161C7.4307 6.6344 7.55581 6.1399 7.36871 5.7186L6.09439 2.84951C5.89579 2.40241 5.40291 2.1646 4.92941 2.2874L2.50259 2.9169C2.02169 3.0417 1.69041 3.5025 1.75931 3.9946C2.20441 7.1737 3.67619 10.0127 5.83179 12.1683Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.75 2.75L16.25 5.25L13.75 7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 5.25H10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.83179 12.1683C7.98739 14.3238 10.8263 15.7957 14.0055 16.2408C14.4976 16.3097 14.9585 15.9785 15.0832 15.4975L15.7127 13.0707C15.8355 12.5972 15.5977 12.1043 15.1506 11.9057L12.2815 10.6314C11.8602 10.4443 11.3656 10.5694 11.084 10.9343L10.205 12.0731C9.32139 11.554 8.51159 10.9262 7.79279 10.2073C7.07379 9.4885 6.446 8.6787 5.927 7.7951L7.0658 6.9161C7.4307 6.6344 7.55581 6.1399 7.36871 5.7186L6.09439 2.84951C5.89579 2.40241 5.40291 2.1646 4.92941 2.2874L2.50259 2.9169C2.02169 3.0417 1.69041 3.5025 1.75931 3.9946C2.20441 7.1737 3.67619 10.0127 5.83179 12.1683Z"
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

export default PhoneCallForward;
