import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Directions({
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
          d="M12.25 15.5H9.75V2.75C9.75 2.336 9.41399 2 9 2L4.139 2C3.705 2 3.289 2.16 2.968 2.449L1.579 3.699C1.211 4.03 1 4.504 1 5C1 5.496 1.211 5.97 1.579 6.301L2.968 7.551C3.289 7.841 3.705 8.001 4.139 8.001H8.25V15.5H5.75C5.336 15.5 5 15.836 5 16.25C5 16.664 5.336 17 5.75 17H12.25C12.664 17 13 16.664 13 16.25C13 15.836 12.664 15.5 12.25 15.5Z"
          fill={fill}
        />
        <path
          d="M16.421 8.2L15.032 6.95C14.711 6.66 14.295 6.5 13.861 6.5L11.745 6.5C11.331 6.5 10.995 6.836 10.995 7.25V11.75C10.995 12.164 11.331 12.5 11.745 12.5L13.861 12.5C14.295 12.5 14.711 12.34 15.032 12.051L16.421 10.801C16.789 10.47 17 9.996 17 9.5C17 9.004 16.789 8.531 16.421 8.2Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Directions;
