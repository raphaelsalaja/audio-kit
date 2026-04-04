import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flower({
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
          d="M17 9C17 7.991 16.097 7.15 14.579 6.689C15.326 5.289 15.371 4.056 14.658 3.343C13.945 2.63 12.713 2.673 11.311 3.421C10.85 1.903 10.009 1 9 1C7.991 1 7.15 1.903 6.689 3.421C5.289 2.673 4.055 2.63 3.343 3.342C2.631 4.054 2.67401 5.289 3.42101 6.689C1.90301 7.15 1 7.991 1 9C1 10.009 1.90301 10.85 3.42101 11.311C2.67401 12.711 2.629 13.944 3.342 14.657C4.054 15.369 5.286 15.326 6.689 14.579C7.15 16.097 7.991 17 9 17C10.009 17 10.85 16.097 11.311 14.579C12.711 15.327 13.945 15.37 14.657 14.658C15.369 13.946 15.326 12.711 14.579 11.311C16.097 10.85 17 10.009 17 9Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 11.5C7.6187 11.5 6.5 10.38 6.5 9C6.5 7.62 7.6187 6.5 9 6.5C10.3813 6.5 11.5 7.62 11.5 9C11.5 10.38 10.3812 11.5 9 11.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Flower;
