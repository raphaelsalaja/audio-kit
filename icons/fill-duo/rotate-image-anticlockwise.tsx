import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RotateImageAnticlockwise({
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
          d="M10.25 17H3.75C2.2334 17 1 15.7666 1 14.25V9.75C1 8.2334 2.2334 7 3.75 7H10.25C11.7666 7 13 8.2334 13 9.75V14.25C13 15.7666 11.7666 17 10.25 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.75 2.50001H11.723L12.499 1.81105C12.809 1.53605 12.837 1.06196 12.561 0.751964C12.286 0.441964 11.811 0.412953 11.502 0.689953L9.252 2.68995C9.092 2.83195 9 3.03599 9 3.25099C9 3.46599 9.092 3.66902 9.252 3.81202L11.502 5.81202C11.645 5.93902 11.822 6.00099 12 6.00099C12.207 6.00099 12.413 5.91603 12.561 5.74903C12.836 5.43903 12.808 4.96595 12.499 4.68995L11.723 4.00099H12.75C14.542 4.00099 16 5.45899 16 7.25099V8.25099C16 8.66499 16.336 9.00099 16.75 9.00099C17.164 9.00099 17.5 8.66499 17.5 8.25099V7.25099C17.5 4.63199 15.369 2.50001 12.75 2.50001Z"
          fill={fill}
        />
        <path
          d="M5 12C4.449 12 4 11.551 4 11C4 10.449 4.449 10 5 10C5.551 10 6 10.449 6 11C6 11.551 5.551 12 5 12Z"
          fill={fill}
        />
        <path
          d="M10.2378 11.5132C9.90769 11.1821 9.4688 11 9.0015 10.9995C8.5215 11.0088 8.0938 11.1816 7.7627 11.5127L2.5582 16.7173C2.9202 16.8931 3.3212 17 3.75 17H10.25C11.7587 17 12.985 15.7788 12.9977 14.2729L10.2378 11.5132Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RotateImageAnticlockwise;
