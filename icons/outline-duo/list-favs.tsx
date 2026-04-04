import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ListFavs({
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
          d="m7.072,3.694l-1.468-.213-.656-1.329c-.168-.342-.729-.342-.896,0l-.656,1.329-1.468.213c-.188.027-.345.159-.403.34-.059.181-.01.38.127.513l1.062,1.035-.251,1.461c-.032.188.045.377.199.489.154.113.358.127.526.038l1.312-.689,1.312.689c.073.039.152.058.232.058.104,0,.207-.032.294-.096.154-.112.231-.301.199-.489l-.251-1.461,1.062-1.035c.137-.133.186-.332.127-.513-.059-.181-.216-.312-.403-.34Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m7.072,11.194l-1.468-.213-.656-1.329c-.168-.342-.729-.342-.896,0l-.656,1.329-1.468.213c-.188.027-.345.159-.403.34-.059.181-.01.38.127.513l1.062,1.035-.251,1.461c-.032.188.045.377.199.489.154.112.358.127.526.038l1.312-.689,1.312.689c.073.039.152.058.232.058.104,0,.207-.032.294-.096.154-.112.231-.301.199-.489l-.251-1.461,1.062-1.035c.137-.133.186-.332.127-.513-.059-.181-.216-.312-.403-.34Z"
          fill={fill}
          strokeWidth="0"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9.75"
          x2="15.75"
          y1="5.25"
          y2="5.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9.75"
          x2="15.75"
          y1="12.75"
          y2="12.75"
        />
      </g>
    </svg>
  );
}

export default ListFavs;
