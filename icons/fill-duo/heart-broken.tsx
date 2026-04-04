import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartBroken({
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
          d="M8.999 16.0874C8.7187 16.0874 8.43849 16.0205 8.18259 15.8872C6.55659 15.0381 1.25101 11.8603 1.25101 6.6089C1.24121 4.0845 3.292 2.0156 5.8223 2C7.0284 2.0151 8.1592 2.4902 9 3.3057C9.8398 2.4903 10.9678 2.0152 12.1631 2C14.708 2.0156 16.7588 4.0845 16.749 6.6118C16.749 11.8618 11.4433 15.0386 9.81641 15.8872C9.56051 16.0205 9.2803 16.0874 8.999 16.0874Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.99999 11.75C8.80759 11.75 8.61619 11.6768 8.46969 11.5303C8.17669 11.2373 8.17669 10.7627 8.46969 10.4698L9.73339 9.2056L6.665 7.67089C6.4619 7.56929 6.31538 7.38179 6.26748 7.16059C6.21868 6.93889 6.2734 6.7075 6.415 6.5307L8.98339 3.32659C9.24119 3.00379 9.7168 2.9521 10.0371 3.2109C10.3603 3.4697 10.4131 3.94189 10.1533 4.26509L8.16598 6.74459L11.3349 8.3291C11.5507 8.437 11.7021 8.6421 11.7402 8.8799C11.7793 9.1177 11.7011 9.3599 11.5302 9.5303L9.5302 11.5303C9.3837 11.6768 9.19239 11.75 8.99999 11.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HeartBroken;
