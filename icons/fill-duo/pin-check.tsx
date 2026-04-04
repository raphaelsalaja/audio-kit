import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinCheck({
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
          d="M2.25 7.75C2.25 4.02392 5.27195 1 9 1C12.7281 1 15.75 4.02392 15.75 7.75C15.75 10.2465 14.5289 12.4149 13.1601 13.9916C12.4711 14.7854 11.7294 15.4477 11.0501 15.9477C10.3835 16.4385 9.7341 16.8047 9.22585 16.9652C9.07886 17.0116 8.92114 17.0116 8.77415 16.9652C8.2659 16.8047 7.61652 16.4385 6.9499 15.9477C6.27063 15.4477 5.52887 14.7854 4.83989 13.9916C3.47115 12.4149 2.25 10.2465 2.25 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.9549 4.9014C12.2855 5.15096 12.3512 5.62127 12.1016 5.95187L8.70462 10.4519C8.57663 10.6214 8.38275 10.7287 8.17112 10.7472C7.9595 10.7656 7.74998 10.6934 7.5946 10.5486L5.98559 9.04858C5.68261 8.76613 5.66597 8.29155 5.94842 7.98858C6.23087 7.6856 6.70546 7.66896 7.00843 7.95141L8.00878 8.88398L10.9044 5.04813C11.154 4.71753 11.6243 4.65184 11.9549 4.9014Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PinCheck;
