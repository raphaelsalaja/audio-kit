import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ThreeWayArrowMerge({
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
          d="M15.03 13.72L10.116 8.80603C9.87999 8.57003 9.74999 8.256 9.74999 7.922V2C9.74999 1.586 9.41399 1.25 8.99999 1.25C8.58599 1.25 8.24999 1.586 8.24999 2V7.92102C8.24999 8.25502 8.11999 8.56905 7.88399 8.80505L2.96999 13.72C2.67699 14.013 2.67699 14.488 2.96999 14.781C3.11599 14.927 3.30799 15.001 3.49999 15.001C3.69199 15.001 3.88399 14.928 4.02999 14.781L8.24999 10.561V15.5C8.24999 15.914 8.58599 16.25 8.99999 16.25C9.41399 16.25 9.74999 15.914 9.74999 15.5V10.561L13.97 14.781C14.116 14.927 14.308 15.001 14.5 15.001C14.692 15.001 14.884 14.928 15.03 14.781C15.323 14.488 15.323 14.013 15.03 13.72Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.25 5.75002C12.058 5.75002 11.866 5.67705 11.72 5.53005L9.00002 2.81008L6.28001 5.53005C5.98701 5.82305 5.51202 5.82305 5.21902 5.53005C4.92602 5.23705 4.92602 4.76202 5.21902 4.46902L8.46902 1.21902C8.76202 0.926018 9.23701 0.926018 9.53001 1.21902L12.78 4.46902C13.073 4.76202 13.073 5.23705 12.78 5.53005C12.634 5.67605 12.442 5.75002 12.25 5.75002Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ThreeWayArrowMerge;
