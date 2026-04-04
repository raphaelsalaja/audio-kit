import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bathrobe({
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
          d="M4 6.875V9.5H7.5V7.25C7.5 7.007 7.624 6.785 7.821 6.645C7.502 6.328 7.2 5.996 6.931 5.637C5.85 4.194 5.305 2.434 5.253 1.813C5.236 1.624 5.243 1.447 5.235 1.262L3.276 2.102C2.367 2.492 1.735 3.344 1.626 4.326L1.005 9.918C0.964997 10.282 1.193 10.622 1.545 10.722L2.5196 11L4 6.875Z"
          fill={fill}
        />
        <path
          d="M11.265 1.602C11.283 1.396 11.278 1.2 11.282 1H6.724C6.729 1.225 6.726 1.446 6.747 1.683C6.771 1.974 7.178 3.465 8.132 4.739C8.391 5.085 8.69 5.401 9.005 5.7C9.317 5.403 9.609 5.086 9.868 4.739C10.554 3.823 11.036 2.739 11.264 1.603L11.265 1.602Z"
          fill={secondaryfill}
        />
        <path
          d="M7.5 11H4V16.25C4 16.664 4.336 17 4.75 17H7.5V11Z"
          fill={fill}
        />
        <path
          d="M14 11H9V17H13.25C13.664 17 14 16.664 14 16.25V11Z"
          fill={fill}
        />
        <path
          d="M16.375 4.325C16.266 3.343 15.633 2.491 14.725 2.101L12.766 1.261C12.758 1.447 12.765 1.626 12.748 1.816C12.464 3.25 11.888 4.543 11.07 5.635C10.488 6.412 9.79401 7.088 9.00101 7.647V9.498H14.001V6.873L15.4754 11L16.457 10.72C16.809 10.619 17.037 10.28 16.997 9.916L16.376 4.324L16.375 4.325Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Bathrobe;
