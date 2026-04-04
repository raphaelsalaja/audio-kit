import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallPool8({
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
          d="M1 9C1 4.58168 4.58179 1 9 1C13.4182 1 17 4.58168 17 9C17 13.4183 13.4182 17 9 17C4.58179 17 1 13.4183 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 4.5C7.78898 4.5 6.62 5.37313 6.62 6.665C6.62 7.19864 6.81946 7.66082 7.13895 8.01953C6.68099 8.42544 6.38199 8.99133 6.38199 9.665C6.38199 11.0653 7.67394 12 8.99999 12C10.326 12 11.618 11.0653 11.618 9.665C11.618 8.99134 11.319 8.42544 10.861 8.01954C11.1805 7.66083 11.38 7.19864 11.38 6.665C11.38 5.37313 10.211 4.5 9 4.5ZM8.12 6.665C8.12 6.39387 8.41101 6 9 6C9.58898 6 9.88 6.39387 9.88 6.665C9.88 6.93613 9.58898 7.33 9 7.33C8.41101 7.33 8.12 6.93613 8.12 6.665ZM7.88199 9.665C7.88199 9.31454 8.26204 8.83 8.99999 8.83C9.73794 8.83 10.118 9.31454 10.118 9.665C10.118 10.0155 9.73794 10.5 8.99999 10.5C8.26204 10.5 7.88199 10.0155 7.88199 9.665Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BallPool8;
