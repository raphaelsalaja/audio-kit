import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Egg({
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
          d="M9 1C7.05216 1 5.39423 2.19767 4.25878 3.9842C3.12108 5.77428 2.45001 8.22713 2.45001 10.977C2.45001 14.8133 5.87722 17 9 17C12.1229 17 15.55 14.8122 15.55 10.977C15.55 8.22557 14.8715 5.77271 13.7305 3.98328C12.5928 2.19889 10.9354 1 9 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.61126 4.17441C8.85127 4.512 8.77217 4.98024 8.43459 5.22026C7.72071 5.7278 6.91674 7.07791 6.59271 9.11767C6.52773 9.52675 6.14342 9.8057 5.73433 9.74071C5.32525 9.67573 5.0463 9.29142 5.11129 8.88233C5.46526 6.65409 6.38329 4.8382 7.56541 3.99774C7.903 3.75773 8.37124 3.83683 8.61126 4.17441Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Egg;
