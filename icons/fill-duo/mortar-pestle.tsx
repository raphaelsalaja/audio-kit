import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MortarPestle({
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
          d="M15.25 7H2.75C2.336 7 2 7.336 2 7.75V8C2 10.441 3.252 12.666 5.304 13.94L5.178 14.446C5.084 14.822 5.166 15.213 5.405 15.519C5.643 15.825 6.003 16 6.391 16H11.61C11.998 16 12.358 15.825 12.596 15.519C12.835 15.213 12.917 14.822 12.823 14.447L12.697 13.94C14.749 12.666 16.001 10.441 16.001 8V7.75C16.001 7.34061 15.659 7 15.25 7Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12.1374 7L14.5007 3.74399C15.0367 2.99899 14.8667 1.95699 14.1217 1.42099C13.3767 0.88499 12.3347 1.05499 11.7997 1.79899L8.02502 7H12.1374Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MortarPestle;
