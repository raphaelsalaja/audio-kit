import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CompactDisk({
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
          d="M9 1C4.58169 1 1 4.58169 1 9C1 13.4183 4.58169 17 9 17C13.4183 17 17 13.4183 17 9C17 4.58169 13.4183 1 9 1ZM9 6C7.3427 6 6 7.34327 6 9C6 10.6567 7.3427 12 9 12C10.6573 12 12 10.6567 12 9C12 7.34327 10.6573 6 9 6Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6 9C6 7.34327 7.3427 6 9 6C10.6573 6 12 7.34327 12 9C12 10.6567 10.6573 12 9 12C7.3427 12 6 10.6567 6 9ZM9 7.5C8.1713 7.5 7.5 8.17153 7.5 9C7.5 9.82847 8.1713 10.5 9 10.5C9.8287 10.5 10.5 9.82847 10.5 9C10.5 8.17153 9.8287 7.5 9 7.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CompactDisk;
