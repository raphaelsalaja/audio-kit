import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTurnRight({
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
          d="M2.75 15C2.336 15 2 14.664 2 14.25V10.25C2 8.733 3.233 7.5 4.75 7.5H15C15.414 7.5 15.75 7.836 15.75 8.25C15.75 8.664 15.414 9 15 9H4.75C4.061 9 3.5 9.561 3.5 10.25V14.25C3.5 14.664 3.164 15 2.75 15Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11 13.25C10.808 13.25 10.616 13.177 10.47 13.03C10.177 12.737 10.177 12.262 10.47 11.969L14.19 8.24899L10.47 4.52898C10.177 4.23598 10.177 3.76098 10.47 3.46798C10.763 3.17498 11.238 3.17498 11.531 3.46798L15.781 7.71798C16.074 8.01098 16.074 8.48598 15.781 8.77898L11.531 13.029C11.385 13.175 11.193 13.249 11.001 13.249L11 13.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTurnRight;
