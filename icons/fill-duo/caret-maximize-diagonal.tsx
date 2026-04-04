import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretMaximizeDiagonal({
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
          d="M4.707 8.64601C4.42 8.35901 3.993 8.27303 3.617 8.42903C3.242 8.58403 3 8.94704 3 9.35304V13.999C3 14.55 3.449 14.999 4 14.999H8.646C9.052 14.999 9.41501 14.757 9.57001 14.382C9.72501 14.007 9.64 13.579 9.353 13.292L4.707 8.64601Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14 3H9.35399C8.94799 3 8.58498 3.242 8.42998 3.617C8.27498 3.992 8.35999 4.41997 8.64699 4.70697L13.293 9.35303C13.485 9.54503 13.739 9.646 13.999 9.646C14.128 9.646 14.258 9.62097 14.383 9.56897C14.758 9.41397 15 9.05102 15 8.64502V4C15 3.449 14.551 3 14 3Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CaretMaximizeDiagonal;
