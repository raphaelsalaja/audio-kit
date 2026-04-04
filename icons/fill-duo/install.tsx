import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Install({
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
          d="M14.2596 13.5C15.7721 13.495 17 12.265 17 10.751V4.75C17 3.233 15.767 2 14.25 2H3.75C2.233 2 1 3.233 1 4.75V10.75C1 12.267 2.233 13.5 3.75 13.5H14.2596Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.03 8.53003L9.52999 11.03C9.38399 11.176 9.19199 11.25 8.99999 11.25C8.80799 11.25 8.61599 11.177 8.46999 11.03L5.96999 8.53003C5.67699 8.23703 5.67699 7.76199 5.96999 7.46899C6.26299 7.17599 6.73799 7.17599 7.03099 7.46899L8.25099 8.68903V5.5C8.25099 5.086 8.58699 4.75 9.00099 4.75C9.41499 4.75 9.75099 5.086 9.75099 5.5V8.68903L10.971 7.46899C11.264 7.17599 11.739 7.17599 12.032 7.46899C12.325 7.76199 12.325 8.23703 12.032 8.53003H12.03Z"
          fill={fill}
        />
        <path
          d="M8.25002 14.53C7.32702 14.59 6.41102 14.755 5.52402 15.034C5.12902 15.159 4.91003 15.579 5.03503 15.975C5.15903 16.369 5.57602 16.587 5.97502 16.4651C7.93402 15.8481 10.065 15.8481 12.024 16.4651C12.099 16.488 12.175 16.5001 12.25 16.5001C12.568 16.5001 12.864 16.2951 12.965 15.9761C13.09 15.5811 12.87 15.1601 12.476 15.0351C11.591 14.7551 10.674 14.5902 9.75002 14.5311V13.5001H8.25002V14.53Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Install;
