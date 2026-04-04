import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTurnUp({
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
          d="M14.25 16H10.25C8.733 16 7.5 14.767 7.5 13.25V3C7.5 2.586 7.836 2.25 8.25 2.25C8.664 2.25 9 2.586 9 3V13.25C9 13.939 9.561 14.5 10.25 14.5H14.25C14.664 14.5 15 14.836 15 15.25C15 15.664 14.664 16 14.25 16Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.5 7.74999C12.308 7.74999 12.116 7.67699 11.97 7.52999L8.25 3.80999L4.53 7.52999C4.237 7.82299 3.762 7.82299 3.469 7.52999C3.176 7.23699 3.176 6.76199 3.469 6.46899L7.72 2.21999C8.013 1.92699 8.488 1.92699 8.781 2.21999L13.031 6.46999C13.324 6.76299 13.324 7.238 13.031 7.531C12.885 7.677 12.693 7.751 12.501 7.751L12.5 7.74999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTurnUp;
