import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FillLoader({
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
          d="M14 5H4C1.794 5 0 6.794 0 9C0 11.206 1.794 13 4 13H14C16.206 13 18 11.206 18 9C18 6.794 16.206 5 14 5ZM4.5 10.25C4.5 10.664 4.164 11 3.75 11C3.336 11 3 10.664 3 10.25V7.75C3 7.336 3.336 7 3.75 7C4.164 7 4.5 7.336 4.5 7.75V10.25ZM7.5 10.25C7.5 10.664 7.164 11 6.75 11C6.336 11 6 10.664 6 10.25V7.75C6 7.336 6.336 7 6.75 7C7.164 7 7.5 7.336 7.5 7.75V10.25ZM10.5 10.25C10.5 10.664 10.164 11 9.75 11C9.336 11 9 10.664 9 10.25V7.75C9 7.336 9.336 7 9.75 7C10.164 7 10.5 7.336 10.5 7.75V10.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FillLoader;
