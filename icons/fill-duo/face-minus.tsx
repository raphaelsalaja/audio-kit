import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceMinus({
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
          d="M16.411 6H12.25C11.009 6 10 4.991 10 3.75C10 2.642 10.807 1.723 11.864 1.539C10.973 1.196 10.01 1 9 1C4.589 1 1 4.589 1 9C1 13.411 4.589 17 9 17C13.411 17 17 13.411 17 9C17 7.939 16.788 6.927 16.411 6Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M17.25 4.5H12.25C11.836 4.5 11.5 4.164 11.5 3.75C11.5 3.336 11.836 3 12.25 3H17.25C17.664 3 18 3.336 18 3.75C18 4.164 17.664 4.5 17.25 4.5Z"
          fill={fill}
        />
        <path
          d="M6.35001 11.1242C6.70004 10.9027 7.16334 11.007 7.38481 11.357C7.72557 11.8956 8.32359 12.25 9.00101 12.25C9.67843 12.25 10.2764 11.8956 10.6172 11.357C10.8387 11.007 11.302 10.9027 11.652 11.1242C12.002 11.3457 12.1063 11.809 11.8848 12.159C11.2816 13.1124 10.2156 13.75 9.00101 13.75C7.78643 13.75 6.72045 13.1124 6.11722 12.159C5.89575 11.809 5.99997 11.3457 6.35001 11.1242Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.00101 10C6.55301 10 7.00101 9.5523 7.00101 9C7.00101 8.4477 6.55301 8 6.00101 8C5.44901 8 5.00101 8.4477 5.00101 9C5.00101 9.5523 5.44901 10 6.00101 10Z"
          fill={fill}
        />
        <path
          d="M12.001 10C12.553 10 13.001 9.5523 13.001 9C13.001 8.4477 12.553 8 12.001 8C11.449 8 11.001 8.4477 11.001 9C11.001 9.5523 11.449 10 12.001 10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceMinus;
