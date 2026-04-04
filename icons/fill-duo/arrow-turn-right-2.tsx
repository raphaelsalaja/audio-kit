import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTurnRight2({
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
          d="M15 10.5H4.75C3.233 10.5 2 9.267 2 7.75V3.75C2 3.336 2.336 3 2.75 3C3.164 3 3.5 3.336 3.5 3.75V7.75C3.5 8.439 4.061 9 4.75 9H15C15.414 9 15.75 9.336 15.75 9.75C15.75 10.164 15.414 10.5 15 10.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11 14.75C10.808 14.75 10.616 14.677 10.47 14.53C10.177 14.237 10.177 13.762 10.47 13.469L14.19 9.74899L10.47 6.02898C10.177 5.73598 10.177 5.26098 10.47 4.96798C10.763 4.67498 11.238 4.67498 11.531 4.96798L15.781 9.21798C16.074 9.51098 16.074 9.98598 15.781 10.279L11.531 14.529C11.385 14.675 11.193 14.749 11.001 14.749L11 14.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTurnRight2;
