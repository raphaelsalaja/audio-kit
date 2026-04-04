import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserLaptop({
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
          d="M8 8.5C9.93293 8.5 11.5 6.93191 11.5 5C11.5 3.06809 9.93293 1.5 8 1.5C6.06707 1.5 4.5 3.06809 4.5 5C4.5 6.93191 6.06707 8.5 8 8.5Z"
          fill={fill}
        />
        <path
          d="M11.075 10.5C10.5898 10.5 10.1223 10.7926 9.92867 11.2543L8.26274 15H5.75C5.33579 15 5 15.3358 5 15.75C5 16.1642 5.33579 16.5 5.75 16.5H8.75H14.925C15.429 16.5 15.8711 16.1954 16.0675 15.7539L17.6226 12.2622C17.9877 11.4425 17.393 10.5 16.481 10.5H11.075Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M3.86331 14.5236L2.10449 14.5236C1.82831 14.5236 1.57447 14.3718 1.44378 14.1285C1.31309 13.8852 1.32669 13.5897 1.47918 13.3595C3.04625 11.1877 5.45082 9.99768 8.0103 10C8.31321 10.0003 8.61609 10.0147 8.91729 10.0439C8.77216 10.2273 8.64882 10.4322 8.5529 10.6565L7.28821 13.5H5.75C4.95977 13.5 4.26469 13.9074 3.86331 14.5236Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UserLaptop;
