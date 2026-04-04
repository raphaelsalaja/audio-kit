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
          d="M7 2.75C7 1.78379 7.78379 1 8.75 1H14.25C15.2162 1 16 1.78379 16 2.75V15.25C16 16.2162 15.2162 17 14.25 17H8.75C7.78379 17 7 16.2162 7 15.25V2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.5 5H2.75C1.78379 5 1 5.78379 1 6.75V11.25C1 12.2162 1.78379 13 2.75 13H5.5V5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7 13H11.25C12.2162 13 13 12.2162 13 11.25V6.75C13 5.78379 12.2162 5 11.25 5H7V13Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MaskRect;
