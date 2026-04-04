import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageDepthSparkle({
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
          d="M9.90799 3.008L8.64499 2.58701L8.224 1.32401C8.087 0.916005 7.41199 0.916005 7.27499 1.32401L6.854 2.58701L5.591 3.008C5.387 3.076 5.24899 3.267 5.24899 3.482C5.24899 3.697 5.387 3.88801 5.591 3.95601L6.854 4.377L7.27499 5.64C7.34299 5.844 7.535 5.982 7.75 5.982C7.965 5.982 8.15601 5.844 8.22501 5.64L8.646 4.377L9.909 3.95601C10.113 3.88801 10.251 3.697 10.251 3.482C10.251 3.267 10.113 3.076 9.909 3.008H9.90799Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.31249 13H2.23729C1.66699 13 1.15428 12.6836 0.897481 12.1743C0.640681 11.6655 0.692401 11.0654 1.0313 10.6079L3.794 6.87009C4.3663 6.09669 5.63377 6.09669 6.20607 6.87009L8.78719 10.3613C8.96789 10.6054 8.98248 10.9345 8.82528 11.1948L7.95418 12.6377C7.81848 12.8623 7.57519 13 7.31249 13Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.2734 15H6.72651C6.06241 15 5.46381 14.6318 5.16401 14.0386C4.86521 13.4463 4.9238 12.7471 5.3173 12.2134L9.58982 6.40191C10.2578 5.49571 11.7421 5.49571 12.4101 6.40191L16.6835 12.2139C17.0761 12.7481 17.1347 13.4478 16.8349 14.0396C16.5351 14.6319 15.9374 15 15.2734 15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ImageDepthSparkle;
