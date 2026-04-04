import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDoorIn({
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
          d="M14.75 16.5H8.25C7.2852 16.5 6.5 15.7148 6.5 14.75V3.25C6.5 2.2852 7.2852 1.5 8.25 1.5H14.75C15.7148 1.5 16.5 2.2852 16.5 3.25V14.75C16.5 15.7148 15.7148 16.5 14.75 16.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.999 5.55711V12.4438C10.999 13.0527 11.3076 13.6084 11.8261 13.9311L15.599 16.2705C16.1336 15.9707 16.4999 15.4053 16.4999 14.75V3.25001C16.4999 2.59521 16.1339 2.02981 15.5998 1.73001L11.8261 4.0694C11.3085 4.3907 10.999 4.94671 10.999 5.55711Z"
          fill={fill}
        />
        <path
          d="M7.28 8.46999L4.53 5.71999C4.237 5.42699 3.76199 5.42699 3.46899 5.71999C3.17599 6.01299 3.17599 6.48799 3.46899 6.78099L4.939 8.25099H0.75C0.336 8.25099 0 8.58699 0 9.00099C0 9.41499 0.336 9.75099 0.75 9.75099H4.939L3.46899 11.221C3.17599 11.514 3.17599 11.989 3.46899 12.282C3.61499 12.428 3.80699 12.502 3.99899 12.502C4.19099 12.502 4.38299 12.429 4.52899 12.282L7.27899 9.53199C7.57199 9.23899 7.57199 8.76399 7.27899 8.47099L7.28 8.46999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowDoorIn;
