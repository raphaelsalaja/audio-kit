import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowCornerBottomRight({
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
          d="M5.25 16.75C4.836 16.75 4.5 16.414 4.5 16V7.25C4.5 5.733 5.733 4.5 7.25 4.5H16C16.414 4.5 16.75 4.836 16.75 5.25C16.75 5.664 16.414 6 16 6H7.25C6.561 6 6 6.561 6 7.25V16C6 16.414 5.664 16.75 5.25 16.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.75 9.50001C12.558 9.50001 12.366 9.42701 12.22 9.28001C11.927 8.98701 11.927 8.51201 12.22 8.21901L15.19 5.24901L12.22 2.27901C11.927 1.98601 11.927 1.51101 12.22 1.21801C12.513 0.925011 12.988 0.925011 13.281 1.21801L16.781 4.71801C17.074 5.01101 17.074 5.48601 16.781 5.77901L13.281 9.27901C13.135 9.42501 12.943 9.49901 12.751 9.49901L12.75 9.50001Z"
          fill={fill}
        />
        <path
          d="M5.24999 17C5.05799 17 4.86599 16.927 4.71999 16.78L1.21999 13.28C0.926994 12.987 0.926994 12.512 1.21999 12.219C1.51299 11.926 1.98799 11.926 2.28099 12.219L5.25099 15.189L8.22099 12.219C8.51399 11.926 8.98899 11.926 9.28199 12.219C9.57499 12.512 9.57499 12.987 9.28199 13.28L5.78199 16.78C5.63599 16.926 5.44399 17 5.25199 17H5.24999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowCornerBottomRight;
