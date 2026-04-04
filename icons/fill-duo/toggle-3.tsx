import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Toggle3({
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
          d="M12.0001 14.5H6.00012C5.58602 14.5 5.25012 14.1641 5.25012 13.75V4.25C5.25012 3.8359 5.58602 3.5 6.00012 3.5H12.0001C15.0323 3.5 17.5001 5.9673 17.5001 9C17.5001 12.0327 15.0323 14.5 12.0001 14.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.00012 14.5C2.96792 14.5 0.500122 12.0327 0.500122 9C0.500122 5.9673 2.96792 3.5 6.00012 3.5C9.03232 3.5 11.5001 5.9673 11.5001 9C11.5001 12.0327 9.03232 14.5 6.00012 14.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Toggle3;
