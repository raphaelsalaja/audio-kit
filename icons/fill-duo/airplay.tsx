import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Airplay({
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
          d="M14.25 3H3.75C2.233 3 1 4.2329 1 5.75V11.75C1 13.2671 2.233 14.5 3.75 14.5H14.25C15.767 14.5 17 13.2671 17 11.75V5.75C17 4.2329 15.767 3 14.25 3Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.035 11.239C9.57 10.551 8.43 10.551 7.965 11.239L5.385 15.05C5.125 15.434 5.099 15.927 5.317 16.337C5.534 16.747 5.957 17.001 6.421 17.001H11.581C12.045 17.001 12.468 16.747 12.685 16.337C12.903 15.927 12.876 15.435 12.617 15.05L10.037 11.239H10.035Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Airplay;
