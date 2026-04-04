import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowSymbolRight({
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
          d="M15 9.75H2.75C2.336 9.75 2 9.414 2 9C2 8.586 2.336 8.25 2.75 8.25H15C15.414 8.25 15.75 8.586 15.75 9C15.75 9.414 15.414 9.75 15 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11 14C10.914 14 10.826 13.985 10.74 13.954C10.351 13.81 10.153 13.379 10.296 12.991C11.078 10.871 12.416 9.663 13.477 9.001C12.416 8.339 11.079 7.131 10.296 5.011C10.152 4.622 10.351 4.191 10.74 4.048C11.129 3.902 11.56 4.104 11.703 4.492C12.832 7.553 15.332 8.248 15.437 8.276C15.768 8.364 15.999 8.664 15.997 9.005C15.995 9.347 15.765 9.645 15.433 9.729C15.331 9.756 12.832 10.451 11.703 13.512C11.591 13.815 11.305 14.002 10.999 14.002L11 14Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowSymbolRight;
