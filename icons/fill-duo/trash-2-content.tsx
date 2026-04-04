import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Trash2Content({
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
          d="M9.7569 3L8.56891 1.60999C8.23991 1.22999 7.7599 1 7.2529 1C6.7749 1.02 6.2609 1.20997 5.9259 1.58997L4.69092 3H9.7569Z"
          fill={fill}
        />
        <path
          d="M11.362 3H13.337L12.261 1.73999C11.993 1.43009 11.518 1.39003 11.204 1.66003C10.889 1.93003 10.8529 2.39995 11.1229 2.71985L11.362 3Z"
          fill={fill}
        />
        <path
          d="M14.371 4.23389C14.2294 4.08449 14.0331 4 13.8271 4H4.17481C3.96871 4 3.77253 4.08449 3.63093 4.23389C3.48933 4.38279 3.41512 4.58396 3.42582 4.78906L3.90333 13.8995C3.97953 15.3575 5.18652 16.5001 6.64942 16.5001H11.3525C12.8154 16.5001 14.0224 15.3575 14.0986 13.899L14.5761 4.78906C14.5868 4.58396 14.5126 4.38289 14.371 4.23389Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.31339 13.5L7.27539 13.501C6.87839 13.501 6.54637 13.189 6.52637 12.7891L6.27637 7.7891C6.25537 7.375 6.57437 7.02299 6.98737 7.00199C7.40737 6.98689 7.75339 7.29993 7.77439 7.71293L8.02439 12.7129C8.04539 13.127 7.72639 13.479 7.31339 13.5Z"
          fill={fill}
        />
        <path
          d="M11.4746 12.791C11.4546 13.1919 11.1226 13.502 10.7256 13.502H10.6876C10.2736 13.481 9.95557 13.129 9.97657 12.7149L10.2266 7.71485C10.2476 7.30075 10.6106 6.98582 11.0136 7.00392C11.4276 7.02492 11.7456 7.37693 11.7246 7.79103L11.4746 12.791Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Trash2Content;
