import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayerUp({
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
          d="M9.00101 14.9932C8.72171 14.9932 8.44139 14.9263 8.18649 14.7925L2.3154 11.7017C1.8213 11.4414 1.51459 10.9331 1.51459 10.3746C1.51459 9.81609 1.8212 9.3077 2.3154 9.0475L8.18549 5.95674C8.69819 5.68674 9.30659 5.68813 9.81729 5.95723L15.6864 9.0475C16.1805 9.3078 16.4872 9.81609 16.4872 10.3746C16.4872 10.9331 16.1806 11.4415 15.6864 11.7017L9.81631 14.792L9.81531 14.7925C9.56041 14.9263 9.28031 14.9932 9.00101 14.9932Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.0303 3.71975L9.5303 1.21975C9.2373 0.92675 8.76268 0.92675 8.46978 1.21975L5.96978 3.71975C5.67678 4.01275 5.67678 4.48734 5.96978 4.78024C6.26278 5.07314 6.7374 5.07324 7.0303 4.78024L8.24999 3.56051V10C8.24999 10.4141 8.58589 10.75 8.99999 10.75C9.41409 10.75 9.74999 10.4141 9.74999 10V3.56051L10.9697 4.78024C11.1162 4.92674 11.3076 4.9999 11.5 4.9999C11.6924 4.9999 11.8838 4.92674 12.0303 4.78024C12.3233 4.48724 12.3233 4.01265 12.0303 3.71975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LayerUp;
