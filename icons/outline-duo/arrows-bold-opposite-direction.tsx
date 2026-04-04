import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsBoldOppositeDirection({
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
          d="M8.74999 4.74999H6.74999V2.24398C6.74999 1.79298 6.20099 1.573 5.88899 1.898L1.44199 6.53798C1.19499 6.79598 1.19499 7.20299 1.44199 7.46099L3.49999 9.60808"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.111 5.898L16.558 10.538C16.805 10.796 16.805 11.203 16.558 11.461L12.111 16.101C11.799 16.426 11.25 16.206 11.25 15.755V13.249H7.25C6.698 13.249 6.25 12.801 6.25 12.249V9.74899C6.25 9.19699 6.698 8.74899 7.25 8.74899H11.25V6.24301C11.25 5.79201 11.799 5.573 12.111 5.898Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M12.111 5.898L16.558 10.538C16.805 10.796 16.805 11.203 16.558 11.461L12.111 16.101C11.799 16.426 11.25 16.206 11.25 15.755V13.249H7.25C6.698 13.249 6.25 12.801 6.25 12.249V9.74899C6.25 9.19699 6.698 8.74899 7.25 8.74899H11.25V6.24301C11.25 5.79201 11.799 5.573 12.111 5.898Z"
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

export default ArrowsBoldOppositeDirection;
