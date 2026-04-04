import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PresentationScreenVideo({
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
          d="M5.74998 17C5.67098 17 5.59098 16.988 5.51298 16.961C5.11998 16.83 4.90798 16.405 5.03898 16.012L6.03898 13.012C6.16898 12.619 6.59499 12.405 6.98799 12.538C7.38099 12.669 7.59298 13.094 7.46198 13.487L6.46198 16.487C6.35798 16.801 6.06398 17 5.74998 17Z"
          fill={secondaryfill}
        />
        <path
          d="M12.25 17C11.936 17 11.643 16.801 11.539 16.487L10.539 13.487C10.408 13.094 10.62 12.669 11.013 12.538C11.407 12.407 11.831 12.62 11.962 13.012L12.962 16.012C13.093 16.405 12.881 16.83 12.488 16.961C12.409 16.987 12.329 17 12.251 17H12.25Z"
          fill={secondaryfill}
        />
        <path
          d="M16.083 6.98102L15.588 6.68402C14.895 7.49202 13.87 8 12.75 8H10.25C8.182 8 6.5 6.318 6.5 4.25V2.75C6.5 2.493 6.526 2.242 6.576 2H3.75C2.233 2 1 3.233 1 4.75V11.25C1 12.767 2.233 14 3.75 14H14.25C15.767 14 17 12.767 17 11.25V7.27399C16.677 7.23699 16.362 7.15102 16.083 6.98102Z"
          fill={fill}
        />
        <path
          d="M17.619 1.28802C17.385 1.15502 17.094 1.15901 16.865 1.29901L14.969 2.43597C14.814 1.34497 13.884 0.5 12.751 0.5H10.251C9.00998 0.5 8.00098 1.51 8.00098 2.75V4.25C8.00098 5.49 9.00998 6.5 10.251 6.5H12.751C13.884 6.5 14.815 5.65503 14.969 4.56403L16.864 5.70001C16.983 5.77201 17.117 5.80798 17.251 5.80798C17.378 5.80798 17.505 5.776 17.619 5.711C17.854 5.578 18 5.32798 18 5.05798V1.94098C18 1.66998 17.854 1.42002 17.619 1.28802Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default PresentationScreenVideo;
