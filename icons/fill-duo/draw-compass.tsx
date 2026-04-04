import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DrawCompass({
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
          d="M8.40312 5.84801C8.76706 6.0458 8.90175 6.50117 8.70396 6.86511L3.40896 16.6081C3.21117 16.9721 2.7558 17.1067 2.39186 16.909C2.02792 16.7112 1.89323 16.2558 2.09102 15.8919L7.38602 6.14885C7.58381 5.78491 8.03918 5.65022 8.40312 5.84801Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.59688 5.84801C9.96082 5.65022 10.4162 5.78491 10.614 6.14885L15.909 15.8919C16.1067 16.2558 15.9721 16.7112 15.6081 16.909C15.2442 17.1067 14.7888 16.9721 14.591 16.6081L9.29604 6.86511C9.09825 6.50117 9.23294 6.0458 9.59688 5.84801Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 0.75C9.41421 0.75 9.75 1.08579 9.75 1.5V3.75C9.75 4.16421 9.41421 4.5 9 4.5C8.58579 4.5 8.25 4.16421 8.25 3.75V1.5C8.25 1.08579 8.58579 0.75 9 0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.75 4.75C6.75 3.50701 7.75701 2.5 9 2.5C10.243 2.5 11.25 3.50701 11.25 4.75C11.25 5.99299 10.243 7 9 7C7.75701 7 6.75 5.99299 6.75 4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3.47507 9.11331C3.77092 8.8234 4.24577 8.82821 4.53568 9.12406C5.67047 10.2821 7.25076 11 9 11C10.7493 11 12.3286 10.283 13.4643 9.12406C13.7542 8.82821 14.2291 8.8234 14.5249 9.11331C14.8208 9.40322 14.8256 9.87807 14.5357 10.1739C13.1294 11.609 11.1687 12.5 9 12.5C6.83124 12.5 4.86953 11.6079 3.46432 10.1739C3.17441 9.87807 3.17923 9.40322 3.47507 9.11331Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default DrawCompass;
