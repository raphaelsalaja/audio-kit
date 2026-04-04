import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartLine2({
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
          d="M16.7793 5.22068C17.0722 5.51357 17.0722 5.98844 16.7793 6.28134L11.8833 11.1773C11.3954 11.6652 10.6036 11.6652 10.1157 11.1773L6.9995 8.06117L2.28033 12.7803C1.98744 13.0732 1.51256 13.0732 1.21967 12.7803C0.926777 12.4874 0.926777 12.0126 1.21967 11.7197L6.11567 6.82368C6.60356 6.33578 7.39544 6.33578 7.88333 6.82368L10.9995 9.93985L15.7187 5.22068C16.0116 4.92778 16.4864 4.92778 16.7793 5.22068Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartLine2;
