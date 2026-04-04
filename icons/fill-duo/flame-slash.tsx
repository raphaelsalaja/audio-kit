import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FlameSlash({
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
          d="M5.36301 15.8186C6.38911 16.5588 7.64331 17 9.00101 17C12.447 17 15.251 14.188 15.251 10.7329C15.2508 9.47999 14.8115 8.2002 14.1841 6.9975L5.36301 15.8186Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.9678 5.0322C11.4173 2.8779 9.62472 1.2993 9.49292 1.185C9.21092 0.938902 8.78992 0.938902 8.50792 1.185C8.27292 1.3901 2.75092 6.2519 2.75092 10.7329C2.75092 12.0146 3.13811 13.2068 3.79921 14.2007L12.9678 5.0322Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.79749 14.384C7.30179 15.0573 8.09718 15.5 8.99998 15.5H9.00099C10.524 15.5 11.763 14.2568 11.763 12.731C11.763 11.8841 11.3195 11.0425 10.8248 10.357L6.79749 14.384Z"
          fill={fill}
        />
        <path
          d="M1.99999 16.75C1.80809 16.75 1.61619 16.6768 1.46969 16.5303C1.17669 16.2373 1.17669 15.7627 1.46969 15.4698L15.4697 1.4698C15.7627 1.1768 16.2373 1.1768 16.5302 1.4698C16.8231 1.7628 16.8232 2.2374 16.5302 2.5303L2.53019 16.5303C2.38369 16.6768 2.19189 16.75 1.99999 16.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FlameSlash;
