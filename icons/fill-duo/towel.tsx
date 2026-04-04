import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Towel({
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
          d="M13.407 2.00579C13.4378 2.00193 13.4689 2 13.5 2C14.8802 2 16 3.11979 16 4.5V14.75C16 15.7162 15.2162 16.5 14.25 16.5H5.75C4.78379 16.5 4 15.7162 4 14.75V12.5C4 12.0858 4.33579 11.75 4.75 11.75H10.5C10.6381 11.75 10.75 11.6381 10.75 11.5V3C10.75 2.62176 11.0317 2.30271 11.407 2.25579L13.407 2.00579Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.5 2C7.5 2 10.5 2 13.5 2C14.8802 2 16 3.11979 16 4.5L16 5.5C16 4.39543 15.1046 3.5 14 3.5C12.897 3.5 12.0026 4.39282 12 5.49516L11.9823 11.5C11.8609 12.3479 11.1313 13 10.25 13H3.75C2.78379 13 2 12.2162 2 11.25V4.5C2 3.11979 3.11979 2 4.5 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Towel;
