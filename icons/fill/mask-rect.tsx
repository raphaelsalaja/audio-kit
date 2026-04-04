import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MaskRect({
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
          d="M14.75 1H8.75C7.785 1 7 1.785 7 2.75V15.25C7 16.215 7.785 17 8.75 17H14.75C15.715 17 16.5 16.215 16.5 15.25V2.75C16.5 1.785 15.715 1 14.75 1ZM15 15.25C15 15.388 14.888 15.5 14.75 15.5H8.75C8.612 15.5 8.5 15.388 8.5 15.25V13H11.25C12.215 13 13 12.215 13 11.25V6.75C13 5.785 12.215 5 11.25 5H8.5V2.75C8.5 2.612 8.612 2.5 8.75 2.5H14.75C14.888 2.5 15 2.612 15 2.75V15.25Z"
          fill={fill}
        />
        <path
          d="M2.75 6.5C2.61221 6.5 2.5 6.61221 2.5 6.75V11.25C2.5 11.3878 2.61221 11.5 2.75 11.5H4.75C5.16421 11.5 5.5 11.8358 5.5 12.25C5.5 12.6642 5.16421 13 4.75 13H2.75C1.78379 13 1 12.2162 1 11.25V6.75C1 5.78379 1.78379 5 2.75 5H4.75C5.16421 5 5.5 5.33579 5.5 5.75C5.5 6.16421 5.16421 6.5 4.75 6.5H2.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MaskRect;
