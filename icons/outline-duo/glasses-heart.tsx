import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GlassesHeart({
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
          d="M4.281 14.197C4.419 14.268 4.58 14.268 4.718 14.197C5.447 13.823 7.749 12.467 7.749 10.263C7.753 9.295 6.958 8.506 5.972 8.5C5.379 8.507 4.828 8.801 4.499 9.286C4.17 8.802 3.618 8.508 3.026 8.5C2.041 8.506 1.246 9.294 1.249 10.263C1.249 12.468 3.553 13.823 4.281 14.197Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.719 14.197C13.581 14.268 13.42 14.268 13.282 14.197C12.553 13.823 10.251 12.467 10.251 10.263C10.247 9.295 11.042 8.506 12.028 8.5C12.621 8.507 13.172 8.801 13.501 9.286C13.83 8.802 14.382 8.508 14.974 8.5C15.959 8.506 16.754 9.294 16.751 10.263C16.751 12.468 14.448 13.823 13.72 14.197H13.719Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.332 9.723L2.946 5.076C3.392 3.833 4.899 3.355 5.98 4.115"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.668 9.723L15.054 5.076C14.608 3.833 13.101 3.355 12.02 4.115"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.29 10.763C10.182 10.176 9.64699 9.75 8.99999 9.75C8.35299 9.75 7.81699 10.176 7.70999 10.763"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.281 14.197C4.419 14.268 4.58 14.268 4.718 14.197C5.447 13.823 7.749 12.467 7.749 10.263C7.753 9.295 6.958 8.506 5.972 8.5C5.379 8.507 4.828 8.801 4.499 9.286C4.17 8.802 3.618 8.508 3.026 8.5C2.041 8.506 1.246 9.294 1.249 10.263C1.249 12.468 3.553 13.823 4.281 14.197Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.719 14.197C13.581 14.268 13.42 14.268 13.282 14.197C12.553 13.823 10.251 12.467 10.251 10.263C10.247 9.295 11.042 8.506 12.028 8.5C12.621 8.507 13.172 8.801 13.501 9.286C13.83 8.802 14.382 8.508 14.974 8.5C15.959 8.506 16.754 9.294 16.751 10.263C16.751 12.468 14.448 13.823 13.72 14.197H13.719Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default GlassesHeart;
