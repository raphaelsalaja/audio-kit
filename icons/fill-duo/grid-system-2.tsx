import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridSystem2({
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
          d="M7.00012 7H3.50012C2.67169 7 2.00012 7.67157 2.00012 8.5V9.5C2.00012 10.3284 2.67169 11 3.50012 11H7.00012C7.82855 11 8.50012 10.3284 8.50012 9.5V8.5C8.50012 7.67157 7.82855 7 7.00012 7Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.5001 7H11.0001C10.1717 7 9.50012 7.67157 9.50012 8.5V9.5C9.50012 10.3284 10.1717 11 11.0001 11H14.5001C15.3285 11 16.0001 10.3284 16.0001 9.5V8.5C16.0001 7.67157 15.3285 7 14.5001 7Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.5001 12H3.50012C2.67169 12 2.00012 12.6716 2.00012 13.5V14.5C2.00012 15.3284 2.67169 16 3.50012 16H14.5001C15.3285 16 16.0001 15.3284 16.0001 14.5V13.5C16.0001 12.6716 15.3285 12 14.5001 12Z"
          fill={fill}
        />
        <path
          d="M9.50012 2H8.50012C7.67169 2 7.00012 2.67157 7.00012 3.5V4.5C7.00012 5.32843 7.67169 6 8.50012 6H9.50012C10.3285 6 11.0001 5.32843 11.0001 4.5V3.5C11.0001 2.67157 10.3285 2 9.50012 2Z"
          fill={fill}
        />
        <path
          d="M4.50012 2H3.50012C2.67169 2 2.00012 2.67157 2.00012 3.5V4.5C2.00012 5.32843 2.67169 6 3.50012 6H4.50012C5.32855 6 6.00012 5.32843 6.00012 4.5V3.5C6.00012 2.67157 5.32855 2 4.50012 2Z"
          fill={fill}
        />
        <path
          d="M14.5001 2H13.5001C12.6717 2 12.0001 2.67157 12.0001 3.5V4.5C12.0001 5.32843 12.6717 6 13.5001 6H14.5001C15.3285 6 16.0001 5.32843 16.0001 4.5V3.5C16.0001 2.67157 15.3285 2 14.5001 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GridSystem2;
