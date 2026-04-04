import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Install2({
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
          d="M14.26 13.5C15.772 13.495 17 12.265 17 10.751V4.75C17 3.233 15.767 2 14.25 2H3.75C2.233 2 1 3.233 1 4.75V10.75C1 12.267 2.233 13.5 3.75 13.5H14.26Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.25002 14.53C7.32702 14.59 6.41102 14.755 5.52402 15.034C5.12902 15.159 4.91003 15.579 5.03503 15.975C5.15903 16.369 5.57602 16.587 5.97502 16.4651C7.93402 15.8481 10.065 15.8481 12.024 16.4651C12.099 16.488 12.175 16.5001 12.25 16.5001C12.568 16.5001 12.864 16.2951 12.965 15.9761C13.09 15.5811 12.87 15.1601 12.476 15.0351C11.591 14.7551 10.674 14.5902 9.75002 14.5311V13.5001H8.25002V14.53Z"
          fill={fill}
        />
        <path
          d="M12.03 7.28003L9.52999 9.78003C9.38399 9.92603 9.19199 10 8.99999 10C8.80799 10 8.61599 9.92703 8.46999 9.78003L5.96999 7.28003C5.67699 6.98703 5.67699 6.51199 5.96999 6.21899C6.26299 5.92599 6.73799 5.92599 7.03099 6.21899L8.25099 7.43903V0.75C8.25099 0.336 8.58699 0 9.00099 0C9.41499 0 9.75099 0.336 9.75099 0.75V7.43903L10.971 6.21899C11.264 5.92599 11.739 5.92599 12.032 6.21899C12.325 6.51199 12.325 6.98703 12.032 7.28003H12.03Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Install2;
