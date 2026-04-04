import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Folder5Open({
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
          d="M14.251 16H3.75C2.23079 16 1 14.7692 1 13.25V3.75C1 2.78379 1.78379 2 2.75 2H6.547C7.05184 2 7.53228 2.21878 7.86426 2.59794L9.9654 5H14.251C15.2175 5 16.001 5.7835 16.001 6.75V9.5L14.251 16Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M3.3597 8.88252C3.53295 8.07575 4.2456 7.5 5.07101 7.5H16.187C17.3034 7.5 18.1297 8.5289 17.8975 9.61659L16.8264 14.6171C16.6531 15.4238 15.9405 16 15.115 16H4C2.88476 16 2.0561 14.9722 2.28853 13.8834L3.3597 8.88252Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Folder5Open;
