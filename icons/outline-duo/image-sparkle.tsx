import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageSparkle({
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
          d="M4.75 2.75H13.25C14.3546 2.75 15.25 3.64543 15.25 4.75V11.8948L12.9085 9.57628C12.1269 8.80237 10.8671 8.80484 10.0885 9.58181L4.43374 15.2251C3.47945 15.0735 2.75 14.247 2.75 13.25V4.75C2.75 3.64543 3.64543 2.75 4.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M4.44501 15.227L10.085 9.58599C10.866 8.80499 12.132 8.80499 12.913 9.58599L15.249 11.922"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 2.75H4.75C3.64543 2.75 2.75 3.64543 2.75 4.75V13.25C2.75 14.3546 3.64543 15.25 4.75 15.25H13.25C14.3546 15.25 15.25 14.3546 15.25 13.25V4.75C15.25 3.64543 14.3546 2.75 13.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.15799 6.50801L7.89499 6.08701L7.47399 4.82401C7.33699 4.41601 6.66199 4.41601 6.52499 4.82401L6.10399 6.08701L4.84099 6.50801C4.63699 6.57601 4.49899 6.76701 4.49899 6.98201C4.49899 7.19701 4.63699 7.38801 4.84099 7.45601L6.10399 7.87701L6.52499 9.14001C6.59299 9.34401 6.78499 9.48201 6.99999 9.48201C7.21499 9.48201 7.40599 9.34401 7.47499 9.14001L7.89599 7.87701L9.15899 7.45601C9.36299 7.38801 9.50099 7.19701 9.50099 6.98201C9.50099 6.76701 9.36299 6.57601 9.15899 6.50801H9.15799Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ImageSparkle;
