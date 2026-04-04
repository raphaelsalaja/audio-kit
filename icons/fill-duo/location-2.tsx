import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Location2({
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
          d="M9.00001 11.496C11.0495 11.496 12.9322 11.7242 14.3259 12.1086C15.0175 12.2994 15.6314 12.54 16.09 12.8391C16.517 13.1176 17 13.5767 17 14.246C17 14.9153 16.517 15.3783 16.09 15.6569C15.6314 15.956 15.0174 16.1966 14.3259 16.3874C12.9322 16.7718 11.0495 17 9 17C6.9505 17 5.06776 16.7718 3.67408 16.3874C2.98255 16.1966 2.3686 15.956 1.91001 15.6569C1.48302 15.3783 1 14.9193 1 14.25C1 13.5807 1.48303 13.1176 1.91002 12.8391C2.34109 12.558 2.90945 12.3284 3.55047 12.1435C3.62043 12.1233 3.6911 12.1037 3.76309 12.0845C5.14741 11.7147 6.99382 11.496 9.00001 11.496Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 6.5C9.41421 6.5 9.75 6.83579 9.75 7.25V13.25C9.75 13.6642 9.41421 14 9 14C8.58579 14 8.25 13.6642 8.25 13.25V7.25C8.25 6.83579 8.58579 6.5 9 6.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 5C5 2.79079 6.79079 1 9 1C11.2092 1 13 2.79079 13 5C13 7.20921 11.2092 9 9 9C6.79079 9 5 7.20921 5 5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Location2;
