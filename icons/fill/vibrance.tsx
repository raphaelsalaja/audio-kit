import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Vibrance({
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
          d="M16.331 2.851C16.012 2.318 15.451 2 14.83 2H3.16999C2.54899 2 1.98699 2.318 1.66799 2.852C1.34899 3.385 1.33399 4.03 1.62699 4.577L7.45799 15.458C7.76299 16.028 8.35399 16.382 8.99999 16.382C9.64599 16.382 10.237 16.028 10.542 15.458L16.372 4.576C16.665 4.029 16.65 3.384 16.331 2.851ZM8.99999 9.5C7.89699 9.5 6.99999 8.603 6.99999 7.5C6.99999 6.397 7.89699 5.5 8.99999 5.5C10.103 5.5 11 6.397 11 7.5C11 8.603 10.103 9.5 8.99999 9.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Vibrance;
