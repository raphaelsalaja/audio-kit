import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageMinus({
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
          d="M3.76202 14.989L9.83602 8.914C10.6168 8.133 11.883 8.133 12.6639 8.9139L15.25 11.5V13.25C15.25 14.3546 14.3546 15.25 13.25 15.25H4.75002C4.75002 15.25 4.24952 15.2682 3.76202 14.989Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.763 14.989L9.83701 8.914C10.618 8.133 11.884 8.133 12.665 8.914L15.251 11.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25104 8.5C6.94104 8.5 7.50104 7.9404 7.50104 7.25C7.50104 6.5596 6.94104 6 6.25104 6C5.56104 6 5.00104 6.5596 5.00104 7.25C5.00104 7.9404 5.56104 8.5 6.25104 8.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8.92242 2.75H4.75104C3.64604 2.75 2.75104 3.6455 2.75104 4.75V13.25C2.75104 14.3545 3.64604 15.25 4.75104 15.25H13.251C14.356 15.25 15.251 14.3545 15.251 13.25V6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.751 3.75H11.751"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ImageMinus;
