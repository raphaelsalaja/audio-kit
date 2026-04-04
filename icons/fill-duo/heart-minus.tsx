import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartMinus({
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
          d="M9.25 12.75C9.25 11.5093 10.2593 10.5 11.5 10.5H15.7027C16.3304 9.366 16.749 8.0723 16.749 6.6118C16.7588 4.0845 14.708 2.0156 12.1631 2C10.9678 2.0151 9.8399 2.4902 9 3.3057C8.1592 2.4903 7.0283 2.0152 5.8223 2C3.292 2.0156 1.24121 4.0845 1.25101 6.6089C1.25101 11.8604 6.55671 15.0381 8.18261 15.8872C8.43851 16.0205 8.7187 16.0874 8.999 16.0874C9.2802 16.0874 9.56051 16.0205 9.81641 15.8872C10.1748 15.7002 10.7168 15.3935 11.3362 14.9834C10.1731 14.898 9.25 13.9346 9.25 12.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.5 13.5H11.5C11.0859 13.5 10.75 13.1641 10.75 12.75C10.75 12.3359 11.0859 12 11.5 12H16.5C16.9141 12 17.25 12.3359 17.25 12.75C17.25 13.1641 16.9141 13.5 16.5 13.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HeartMinus;
