import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneMsg({
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
          d="M5.83182 12.1683C7.98742 14.3238 10.8263 15.7957 14.0055 16.2408C14.4976 16.3097 14.9585 15.9785 15.0832 15.4975L15.7127 13.0707C15.8355 12.5972 15.5977 12.1043 15.1506 11.9057L12.2815 10.6314C11.8602 10.4443 11.3656 10.5694 11.084 10.9343L10.205 12.0731C9.32142 11.554 8.51162 10.9262 7.79282 10.2073C7.07382 9.4885 6.44602 8.6787 5.92702 7.7951L7.06581 6.9161C7.43071 6.6344 7.55581 6.1399 7.36871 5.7186L6.09442 2.84951C5.89582 2.40241 5.40291 2.1646 4.92941 2.2874L2.50261 2.9169C2.02171 3.0417 1.69041 3.5025 1.75931 3.9946C2.20441 7.1737 3.67622 10.0127 5.83182 12.1683Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.0796 7.4961C12.2549 7.5824 12.4523 7.6498 12.6965 7.696C12.8758 7.7298 13.061 7.7478 13.25 7.7478C14.9067 7.7478 16.25 6.4046 16.25 4.7478C16.25 3.091 14.9067 1.7478 13.25 1.7478C11.5933 1.7478 10.25 3.091 10.25 4.7478C10.25 5.1573 10.3255 5.555 10.5012 5.9177C10.7562 6.3965 10.47 7.5273 9.9234 8.0739C10.6658 8.1137 11.6428 7.7791 12.0796 7.4961Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default PhoneMsg;
