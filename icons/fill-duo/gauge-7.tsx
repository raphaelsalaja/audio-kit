import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gauge7({
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
          d="M9.00009 17C13.4184 17 17.0001 13.4183 17.0001 9C17.0001 4.58172 13.4184 1 9.00009 1C4.58181 1 1.00009 4.58172 1.00009 9C1.00009 13.4183 4.58181 17 9.00009 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00009 11.25C10.2427 11.25 11.2501 10.2426 11.2501 9C11.2501 7.75736 10.2427 6.75 9.00009 6.75C7.75745 6.75 6.75009 7.75736 6.75009 9C6.75009 10.2426 7.75745 11.25 9.00009 11.25Z"
          fill={fill}
        />
        <path
          d="M7.90929 8.6592C7.71739 8.6592 7.52549 8.586 7.37899 8.4395L4.35259 5.41307C4.05959 5.12007 4.05959 4.64549 4.35259 4.35259C4.64559 4.05969 5.12019 4.05959 5.41309 4.35259L8.43949 7.37898C8.73249 7.67198 8.73249 8.1466 8.43949 8.4395C8.29299 8.586 8.10119 8.6592 7.90929 8.6592Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Gauge7;
