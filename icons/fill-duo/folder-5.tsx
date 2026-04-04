import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Folder5({
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
          d="M1 7.75C1 6.23079 2.23079 5 3.75 5H14.25C15.7692 5 17 6.23079 17 7.75V13.25C17 14.7692 15.7692 16 14.25 16H3.75C2.23079 16 1 14.7692 1 13.25V7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.9654 5H3.75C2.23079 5 1 6.23079 1 7.75V3.75C1 2.78379 1.78379 2 2.75 2H6.547C7.05184 2 7.53228 2.21878 7.86426 2.59794L9.9654 5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Folder5;
