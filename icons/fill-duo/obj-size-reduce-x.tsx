import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ObjSizeReduceX({
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
          d="M10.25 1H7.75C6.7835 1 6 1.7835 6 2.75V15.25C6 16.2165 6.7835 17 7.75 17H10.25C11.2165 17 12 16.2165 12 15.25V2.75C12 1.7835 11.2165 1 10.25 1Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.311 9.00002L17.031 7.28005C17.324 6.98705 17.324 6.51202 17.031 6.21902C16.738 5.92602 16.263 5.92602 15.97 6.21902L13.72 8.46902C13.427 8.76202 13.427 9.23705 13.72 9.53005L15.97 11.7801C16.116 11.9261 16.308 12 16.5 12C16.692 12 16.884 11.9271 17.03 11.7801C17.323 11.4871 17.323 11.012 17.03 10.719L15.31 8.99905L15.311 9.00002Z"
          fill={fill}
        />
        <path
          d="M2.03001 6.21999C1.73701 5.92699 1.26202 5.92699 0.969018 6.21999C0.676018 6.51299 0.676018 6.98803 0.969018 7.28103L2.68902 9.001L0.969018 10.721C0.676018 11.014 0.676018 11.489 0.969018 11.782C1.11502 11.928 1.30702 12.002 1.49902 12.002C1.69102 12.002 1.88302 11.929 2.02902 11.782L4.27902 9.53201C4.57202 9.23901 4.57202 8.76397 4.27902 8.47097L2.02902 6.22097L2.03001 6.21999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ObjSizeReduceX;
