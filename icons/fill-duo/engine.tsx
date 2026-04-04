import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Engine({
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
          d="M13.25 7H12.125L11.15 5.7C10.821 5.262 10.298 5 9.75 5H5.75C5.202 5 4.679 5.262 4.35 5.7L3.375 7H2.75C1.785 7 1 7.785 1 8.75V11.25C1 12.215 1.785 13 2.75 13H3.375L4.35 14.3C4.679 14.738 5.202 15 5.75 15H13.25C14.215 15 15 14.215 15 13.25V8.75C15 7.785 14.215 7 13.25 7Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M10.25 1H5.25C4.836 1 4.5 1.336 4.5 1.75C4.5 2.164 4.836 2.5 5.25 2.5H7V3.25C7 3.664 7.336 4 7.75 4C8.164 4 8.5 3.664 8.5 3.25V2.5H10.25C10.664 2.5 11 2.164 11 1.75C11 1.336 10.664 1 10.25 1Z"
          fill={fill}
        />
        <path
          d="M15 11.75V10.25H16.5V8.75C16.5 8.336 16.836 8 17.25 8C17.664 8 18 8.336 18 8.75V13.25C18 13.664 17.664 14 17.25 14C16.836 14 16.5 13.664 16.5 13.25V11.75H15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Engine;
