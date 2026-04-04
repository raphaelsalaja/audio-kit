import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenWriting5({
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
          d="M1.75 14H16.25C16.664 14 17 13.664 17 13.25C17 12.836 16.664 12.5 16.25 12.5H1.75C1.336 12.5 1 12.836 1 13.25C1 13.664 1.336 14 1.75 14Z"
          fill={secondaryfill}
        />
        <path
          d="M16.25 15.5H1.75C1.336 15.5 1 15.836 1 16.25C1 16.664 1.336 17 1.75 17H16.25C16.664 17 17 16.664 17 16.25C17 15.836 16.664 15.5 16.25 15.5Z"
          fill={secondaryfill}
        />
        <path
          d="M6.75411 10.9959C7.14411 10.9899 9.14811 10.9129 10.0351 10.0259L15.3135 4.74753C16.1565 3.90353 16.1565 2.53053 15.3135 1.68653C14.4945 0.869533 13.0685 0.870533 12.2525 1.68653L6.97411 6.96588C6.08711 7.85188 6.01111 9.84388 6.00411 10.2339C6.00111 10.4369 6.08011 10.6329 6.22411 10.7759C6.36511 10.9169 6.55611 10.9959 6.75411 10.9959Z"
          fill={fill}
        />
        <path
          d="M1 10.25C1 9.83579 1.33579 9.5 1.75 9.5H3.83691C4.25112 9.5 4.58691 9.83579 4.58691 10.25C4.58691 10.6642 4.25112 11 3.83691 11H1.75C1.33579 11 1 10.6642 1 10.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PenWriting5;
