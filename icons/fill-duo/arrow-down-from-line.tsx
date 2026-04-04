import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDownFromLine({
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
          d="M15.25 2H2.75C2.336 2 2 2.336 2 2.75C2 3.164 2.336 3.5 2.75 3.5H15.25C15.664 3.5 16 3.164 16 2.75C16 2.336 15.664 2 15.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.47 10.72L9.74999 13.44V5.75C9.74999 5.336 9.41399 5 8.99999 5C8.58599 5 8.24999 5.336 8.24999 5.75V13.439L5.52999 10.719C5.23699 10.426 4.76199 10.426 4.46899 10.719C4.17599 11.012 4.17599 11.487 4.46899 11.78L8.46899 15.78C8.61499 15.926 8.80699 16 8.99899 16C9.19099 16 9.383 15.927 9.529 15.78L13.529 11.78C13.822 11.487 13.822 11.012 13.529 10.719C13.236 10.426 12.761 10.426 12.468 10.719L12.47 10.72Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowDownFromLine;
