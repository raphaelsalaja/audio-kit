import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookOpen3({
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
          d="M11 2H15.25C16.2162 2 17 2.78379 17 3.75V13.25C17 14.2162 16.2162 15 15.25 15H11C10.3092 15 9.75 15.5592 9.75 16.25C9.75 16.6642 9.41421 17 9 17V2.8622C9.50132 2.33126 10.2118 2 11 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7 2H2.75C1.78379 2 1 2.78379 1 3.75V13.25C1 14.2162 1.78379 15 2.75 15H7C7.69079 15 8.25 15.5592 8.25 16.25C8.25 16.6642 8.58579 17 9 17V2.8622C8.49868 2.33126 7.78816 2 7 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BookOpen3;
