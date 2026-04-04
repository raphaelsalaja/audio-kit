import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretMinimizeDiagonal({
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
          d="M7.49999 9.5H2.85399C2.44799 9.5 2.08499 9.742 1.92999 10.117C1.77499 10.492 1.85999 10.92 2.14699 11.207L6.79299 15.853C6.98499 16.045 7.23899 16.146 7.49899 16.146C7.62799 16.146 7.75799 16.121 7.88299 16.069C8.25799 15.914 8.49999 15.551 8.49999 15.145V10.499C8.49999 9.94802 8.05099 9.5 7.49999 9.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.207 2.14601C10.92 1.85901 10.493 1.77303 10.117 1.92903C9.742 2.08403 9.5 2.44704 9.5 2.85304V7.50002C9.5 8.05102 9.949 8.50002 10.5 8.50002H15.146C15.552 8.50002 15.915 8.25801 16.07 7.88301C16.225 7.50801 16.14 7.08005 15.853 6.79305L11.207 2.14601Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CaretMinimizeDiagonal;
