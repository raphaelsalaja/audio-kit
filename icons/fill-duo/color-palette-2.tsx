import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ColorPalette2({
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
          d="M4.5 16L14.25 16C15.2162 16 16 15.2162 16 14.25V12.75C16 11.7838 15.2162 11 14.25 11L10.5355 11L6.41421 15.1213L4.5 16Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M9.77291 4.69149L2.87861 11.5858C1.9023 12.5621 1.9023 14.145 2.87861 15.1213C3.85492 16.0976 5.43784 16.0976 6.41415 15.1213L13.3084 8.22703C13.9917 7.54381 13.9917 6.43537 13.3084 5.75215L12.2478 4.69149C11.5646 4.00828 10.4561 4.00828 9.77291 4.69149ZM4.49999 14.5C5.05227 14.5 5.49999 14.0523 5.49999 13.5C5.49999 12.9477 5.05227 12.5 4.49999 12.5C3.9477 12.5 3.49999 12.9477 3.49999 13.5C3.49999 14.0523 3.9477 14.5 4.49999 14.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.00001 3.75L2 13.5C2 14.8807 3.11929 16 4.5 16C5.88072 16 7.00001 14.8807 7.00001 13.5V3.75C7.00001 2.78379 6.21622 2 5.25001 2H3.75001C2.78379 2 2.00001 2.78379 2.00001 3.75ZM5.5 13.5C5.5 14.052 5.052 14.5 4.5 14.5C3.948 14.5 3.5 14.052 3.5 13.5C3.5 12.948 3.948 12.5 4.5 12.5C5.052 12.5 5.5 12.948 5.5 13.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ColorPalette2;
