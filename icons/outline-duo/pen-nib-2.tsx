import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenNib2({
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
          d="M13.93 8.43L12.05 13.739C11.933 14.069 11.653 14.314 11.31 14.384L2.72701 16.16C2.19901 16.269 1.73101 15.802 1.84101 15.274L3.61601 6.69C3.68701 6.347 3.93201 6.067 4.26101 5.95L9.57001 4.07"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.04401 15.956L7.44201 10.558"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.93 8.43L12.05 13.739C11.933 14.069 11.653 14.314 11.31 14.384L2.72701 16.16C2.19901 16.269 1.73101 15.802 1.84101 15.274L3.61601 6.69C3.68701 6.347 3.93201 6.067 4.26101 5.95L9.57001 4.07"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25001 1.75L8.95701 2.043C8.56601 2.434 8.56601 3.067 8.95701 3.457L14.543 9.043C14.934 9.434 15.567 9.434 15.957 9.043L16.25 8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.97299 10.777C8.38721 10.777 8.72299 10.4412 8.72299 10.027C8.72299 9.61279 8.38721 9.277 7.97299 9.277C7.55878 9.277 7.22299 9.61279 7.22299 10.027C7.22299 10.4412 7.55878 10.777 7.97299 10.777Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default PenNib2;
