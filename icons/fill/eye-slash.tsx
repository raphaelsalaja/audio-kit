import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EyeSlash({
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
          d="M16.6085 7.51709C15.547 5.64359 13.1476 3 9.00007 3C4.85257 3 2.45318 5.64359 1.39218 7.51709C0.865779 8.44579 0.865775 9.55421 1.39168 10.4829C2.45318 12.3564 4.85257 15 9.00007 15C13.1476 15 15.547 12.3564 16.608 10.4829C17.1344 9.55471 17.1344 8.44579 16.6085 7.51709ZM9.00007 12C7.34327 12 6.00007 10.6569 6.00007 9C6.00007 7.3431 7.34327 6 9.00007 6C10.6569 6 12.0001 7.3431 12.0001 9C12.0001 10.6569 10.657 12 9.00007 12Z"
          fill={fill}
        />
        <path
          d="M1.99999 16.75C1.80799 16.75 1.61599 16.677 1.46999 16.53C1.17699 16.237 1.17699 15.762 1.46999 15.469L15.47 1.46999C15.763 1.17699 16.238 1.17699 16.531 1.46999C16.824 1.76299 16.824 2.238 16.531 2.531L2.52999 16.53C2.38399 16.676 2.19199 16.75 1.99999 16.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default EyeSlash;
