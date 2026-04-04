import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagicWand({
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
          d="M8.8428 2L11.6329 3.82147L14.7153 2.55713L13.8445 5.77307L16 8.31268L12.6731 8.47852L10.9231 11.314L9.7374 8.20062L6.5 7.41333L9.09451 5.32208L8.8428 2Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.5 15.5L9.75449 8.24542"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.8428 2L11.6329 3.82147L14.7153 2.55713L13.8445 5.77307L16 8.31268L12.6731 8.47852L10.9231 11.314L9.7374 8.20062L6.5 7.41333L9.09451 5.32208L8.8428 2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MagicWand;
