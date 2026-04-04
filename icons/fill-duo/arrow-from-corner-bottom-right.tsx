import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowFromCornerBottomRight({
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
          d="M15 2.75C15 2.336 14.664 2 14.25 2H4.75C3.233 2 2 3.233 2 4.75V14.25C2 14.664 2.336 15 2.75 15C3.164 15 3.5 14.664 3.5 14.25V4.75C3.5 4.061 4.061 3.5 4.75 3.5H14.25C14.664 3.5 15 3.164 15 2.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 8.99C14.836 8.99 14.5 9.326 14.5 9.74V13.44L8.28001 7.21999C7.98701 6.92699 7.51202 6.92699 7.21902 7.21999C6.92602 7.51299 6.92602 7.988 7.21902 8.281L13.439 14.501H9.73901C9.32501 14.501 8.98901 14.837 8.98901 15.251C8.98901 15.665 9.32501 16.001 9.73901 16.001H15.25C15.664 16.001 16 15.665 16 15.251V9.74099C16 9.32699 15.664 8.99 15.25 8.99Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowFromCornerBottomRight;
