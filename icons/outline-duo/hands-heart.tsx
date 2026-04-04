import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HandsHeart({
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
          d="M8.781 6.447C8.919 6.518 9.08 6.518 9.218 6.447C9.947 6.073 12.249 4.717 12.249 2.513C12.253 1.545 11.458 0.756 10.472 0.75C9.879 0.757 9.328 1.051 8.999 1.536C8.67 1.052 8.118 0.758 7.526 0.75C6.541 0.756 5.746 1.544 5.749 2.513C5.749 4.718 8.052 6.073 8.78 6.447H8.781Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.781 6.447C8.919 6.518 9.08 6.518 9.218 6.447C9.947 6.073 12.249 4.717 12.249 2.513C12.253 1.545 11.458 0.756 10.472 0.75C9.879 0.757 9.328 1.051 8.999 1.536C8.67 1.052 8.118 0.758 7.526 0.75C6.541 0.756 5.746 1.544 5.749 2.513C5.749 4.718 8.052 6.073 8.78 6.447H8.781Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 8.391V5.5C14.25 4.81 14.81 4.25 15.5 4.25C16.19 4.25 16.75 4.81 16.75 5.5V11.04C16.75 11.499 16.592 11.945 16.302 12.301L13.5 15.75V16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.809 11.991L14.316 10.095C14.759 9.54999 14.655 8.74499 14.088 8.32999C13.56 7.94399 12.822 8.03899 12.41 8.54699L10.691 10.7C10.406 11.055 10.251 11.496 10.251 11.951V16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 8.391V5.5C3.75 4.81 3.19 4.25 2.5 4.25C1.81 4.25 1.25 4.81 1.25 5.5V11.04C1.25 11.499 1.408 11.945 1.698 12.301L4.5 15.75V16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.191 11.991L3.684 10.095C3.241 9.54999 3.345 8.74499 3.912 8.32999C4.44 7.94399 5.178 8.03899 5.59 8.54699L7.309 10.7C7.594 11.055 7.749 11.496 7.749 11.951V16.75"
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

export default HandsHeart;
