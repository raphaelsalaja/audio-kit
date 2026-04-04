import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BabyCarriage({
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
          d="M16 8H4.50001V6.25C4.50001 5.007 3.49301 4 2.25001 4L2 4C1.586 4 1.25 4.336 1.25 4.75C1.25 5.164 1.586 5.5 2 5.5H2.25001C2.66301 5.5 3.00001 5.836 3.00001 6.25V9.25C3.00001 11.321 4.67901 13 6.75001 13H12.25C14.321 13 16 11.321 16 9.25V8Z"
          fill={fill}
        />
        <path
          d="M15.95 6.5C15.578 3.407 12.942 1 9.75 1C9.336 1 9 1.336 9 1.75V6.5H15.95Z"
          fill={secondaryfill}
        />
        <path
          d="M5.25 16.5C5.94 16.5 6.5 15.9404 6.5 15.25C6.5 14.5596 5.94 14 5.25 14C4.56 14 4 14.5596 4 15.25C4 15.9404 4.56 16.5 5.25 16.5Z"
          fill={secondaryfill}
        />
        <path
          d="M13.75 16.5C14.44 16.5 15 15.9404 15 15.25C15 14.5596 14.44 14 13.75 14C13.06 14 12.5 14.5596 12.5 15.25C12.5 15.9404 13.06 16.5 13.75 16.5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default BabyCarriage;
