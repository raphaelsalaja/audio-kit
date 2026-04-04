import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineExpandDiagonal4({
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
          d="M12.875 13.625C12.683 13.625 12.491 13.552 12.345 13.405L4.59499 5.65499C4.30199 5.36199 4.30199 4.88699 4.59499 4.59399C4.88799 4.30099 5.36299 4.30099 5.65599 4.59399L13.406 12.344C13.699 12.637 13.699 13.112 13.406 13.405C13.26 13.551 13.068 13.625 12.876 13.625H12.875Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.383 10.18C15.008 10.024 14.581 10.11 14.293 10.397L10.397 14.293C10.11 14.58 10.025 15.008 10.18 15.383C10.335 15.758 10.698 16 11.104 16H15C15.551 16 16 15.551 16 15V11.104C16 10.698 15.758 10.335 15.383 10.18Z"
          fill={fill}
        />
        <path
          d="M6.896 2H3C2.449 2 2 2.449 2 3V6.896C2 7.302 2.242 7.66501 2.617 7.82001C2.742 7.87201 2.872 7.897 3.001 7.897C3.261 7.897 3.515 7.795 3.707 7.604L7.603 3.70801C7.89 3.42101 7.975 2.99301 7.82 2.61801C7.665 2.24301 7.302 2.00101 6.896 2.00101V2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTriangleLineExpandDiagonal4;
