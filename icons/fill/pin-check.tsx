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
          d="M9 1.5C5.27195 1.5 2.25 4.52392 2.25 8.25C2.25 10.7465 3.47115 12.9149 4.83989 14.4916C5.52887 15.2854 6.27063 15.9477 6.9499 16.4477C7.61652 16.9385 8.2659 17.3047 8.77415 17.4652C8.92114 17.5116 9.07886 17.5116 9.22585 17.4652C9.7341 17.3047 10.3835 16.9385 11.0501 16.4477C11.7294 15.9477 12.4711 15.2854 13.1601 14.4916C14.5289 12.9149 15.75 10.7465 15.75 8.25C15.75 4.52392 12.7281 1.5 9 1.5ZM12.1016 6.45187C12.3512 6.12128 12.2855 5.65097 11.9549 5.40141C11.6243 5.15185 11.154 5.21754 10.9044 5.54813L8.00878 9.38399L7.00843 8.45141C6.70545 8.16896 6.23087 8.1856 5.94842 8.48858C5.66597 8.79156 5.68261 9.26614 5.98559 9.54859L7.5946 11.0486C7.74998 11.1934 7.9595 11.2656 8.17112 11.2472C8.38275 11.2287 8.57663 11.1214 8.70461 10.9519L12.1016 6.45187Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PinCheck;
